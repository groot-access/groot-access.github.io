---
title: 'Automating Updates with Ansible: Managing Linux & Windows Devices'
description: 'How I used Ansible to push update playbooks to my Linux and Windows devices using SSH, WinRM, and Ansible Vault.'
pubDate: 'Feb 15 2026'
heroImage: '../../assets/images/example-blog-hero8.jpg'
tags: ['ansible', 'automation', 'homelab']
---

In this part I will be going through how I use Ansible to push playbooks out to my Linux and Windows devices. I will specifically focus on updating my machines.

## Setting Up the Control Node

To start, I installed Ansible on one Linux server and named this my control node. My goal was to connect all of my devices to the control node using SSH and key-based authentication. While connecting to the Linux devices was fairly simple, it seemed like using WinRM was the more common use case, so I switched to that for Windows. I decided to use a self-signed cert so I could use HTTPS as well, but I ignored the cert validation just for the ease of setting this up.

## Configuration Files

Here are the configuration files that I used minus my secrets file.

### hosts.yml

```yaml
all:
  children:
    servers:
      children:
        windows:
          hosts:
            darkdean.com:
            wds.darkdean.com:
        linux:
          hosts:
            ls1.darkdean.com:
    clients:
      children:
        windows:
          hosts:
            wc1.darkdean.com:
```

### ansible.cfg

```ini
[defaults]
inventory = hosts.yml
log_path = ansible.log
ask_vault_pass = True
```

## Playbooks

### lin_updates.yml

For this playbook you can see that if I had any servers using Red Hat or CentOS it would detect it and update that OS too. I also made sure that Ansible would login as a user who was not always a super user and only escalated when needed.

```yaml
---
- name: Update all Linux servers
  hosts: linux
  become: yes
  become_user: root
  vars_files:
    - secrets.yml
  vars:
    ansible_become_pass: "{{ linux_password }}"
    ansible_user: ansible
    ansible_ssh_private_key_file: /home/ansible/.ssh/id_rsa
  tasks:
    - name: Update APT package index (Debian/Ubuntu)
      ansible.builtin.apt:
        update_cache: yes
      when: ansible_facts['os_family'] == "Debian"

    - name: Upgrade all APT packages to the latest version (Debian/Ubuntu)
      ansible.builtin.apt:
        upgrade: dist
      when: ansible_facts['os_family'] == "Debian"

    - name: Ensure YUM/DNF package index is updated (Red Hat/CentOS)
      ansible.builtin.yum:
        name: '*'
        state: latest
      when: ansible_facts['os_family'] == "RedHat"
```

### win_updates.yml

```yaml
---
- name: Update all Windows servers
  hosts: windows
  vars:
    ansible_connection: winrm
    ansible_user: administrator
    ansible_password: "{{ windows_password }}"
    ansible_winrm_transport: basic
    ansible_winrm_scheme: https
    ansible_port: 5986
    ansible_winrm_server_cert_validation: ignore
  vars_files:
    - secrets.yml
  tasks:
    - name: Check for and Install updates
      ansible.windows.win_updates:
        category_names:
          - CriticalUpdates
          - SecurityUpdates
        log_path: C:\\ansible_win_updates.log
      register: update_result

    - name: Reboot if required
      ansible.windows.win_reboot:
      when: update_result.reboot_required
```

## Running the Playbooks

Finally, here are the two commands that I used to run the updates.

```bash
sudo ansible-playbook lin_updates.yml
sudo ansible-playbook win_updates.yml
```