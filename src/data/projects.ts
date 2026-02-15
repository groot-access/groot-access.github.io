import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';
import AnsibleIcon from  '../assets/logos/Ansible-logo.svg?raw';


export const projects = [
	{
		title: "Workflow Automation Orchestrator (n8n)",
		techStack: "n8n • Node.js • TypeScript • PostgreSQL",
		description: "Event‑driven workflows for data sync, notifications, and back‑office automation. Custom nodes, secrets management, retries, and metrics.",
		ctaText: "View Repo →",
		ctaLink: "#",
		icon: N8nIcon
	},
	{
		title: "Ansible Playbook Configuration",
		techStack: "Node.js • TypeScript • PostgreSQL • Supabase • Stripe",
		description: "Production‑ready REST/GraphQL API with JWT auth, role‑based access, Stripe subscriptions, and rate‑limited endpoints.",
		ctaText: "Get Source < / >",
		ctaLink: "#",
		icon: AnsibleIcon
	}
];