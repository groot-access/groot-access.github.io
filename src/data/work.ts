import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Automation Engineer",
    company: "Apollo Information Systems",
    region: "Remote",
    description:
      "Built automated threat intelligence collection pipelines using Python and Selenium. Developed API driven workflows to ingest structured data into Elasticsearch and monitored scraper reliability across evolving web platforms.",
    technologies: [
      "Python",
      "Selenium",
      "Playwright",
      "BeautifulSoup",
      "Requests",
      "Elasticsearch",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Enterprise Security Engineer (Threat Intelligence)",
    company: "PPL Utilities",
    region: "Remote",
    description:
      "Conducted reconnaissance and threat intelligence collection across enterprise and cloud environments. Automated IOC collection and enrichment workflows using Python APIs and supported threat hunting operations with Tanium and QRadar.",
    technologies: [
      "Python",
      "REST APIs",
      "Tanium",
      "QRadar",
      "Elasticsearch",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    title: "Security Operations Assistant",
    company: "Georgia Cyber Center of Training and Innovation",
    region: "Augusta, GA",
    description:
      "Led and coordinated a team reviewing Wazuh security logs to identify security events and potential vulnerabilities. Assisted with automated deployment processes and supported vulnerability prioritization based on risk severity and operational impact.",
    technologies: [
      "Wazuh",
      "Linux",
      "Security Monitoring",
      "Vulnerability Prioritization",
      "Deployment Automation",
    ],
  },
  {
    title: "Information Security Intern",
    company: "Heaven Hill Distillery",
    region: "Bardstown, KY",
    description:
      "Monitored and analyzed security events using Graylog and Mimecast. Investigated phishing emails, performed triage on reported incidents, and wrote Bash scripts to support automation and internal security workflows.",
    technologies: [
      "Graylog",
      "Mimecast",
      "Bash",
      "Phishing Analysis",
      "Incident Triage",
      "Linux",
    ],
  },
];

export type WorkItem = (typeof work)[number];

