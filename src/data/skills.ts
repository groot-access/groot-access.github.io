export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8 4v6c0 5-3.8 9.7-8 10-4.2-.3-8-5-8-10V6l8-4z"/></svg>`,
    title: "Threat Intelligence & OSINT",
    description:
      "IOC collection, adversary tracking, phishing investigation, and enrichment workflows. Built structured intelligence pipelines for analysis and reporting.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Security Automation",
    description:
      "Python driven automation for collection, enrichment, parsing, and API integration. Designed workflows that handle failures cleanly and produce reliable outputs.",
  },

  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zm0 7h18v4H3zm0 7h18v4H3z"/></svg>`,
    title: "Log Analysis & SIEM",
    description:
      "Security event detection and triage using Wazuh, Graylog, Elasticsearch, and Splunk. Investigated phishing reports and supported incident response efforts.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6l8 4v6c0 4-3 7.5-8 8-5-.5-8-4-8-8v-6l8-4z"/></svg>`,
    title: "Detection Engineering",
    description:
      "Developed and refined detection logic based on threat patterns, log telemetry, and vulnerability trends to improve alert accuracy and reduce noise.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4z"/></svg>`,
    title: "Security Data Pipelines",
    description:
      "Ingestion, normalization, and storage using PostgreSQL and Elasticsearch. Built ETL style pipelines for telemetry and threat intelligence data.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>`,
    title: "Web Automation & Scraping",
    description:
      "Browser automation with Playwright and Selenium for authenticated workflows and dynamic content extraction across changing web environments.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v6H4zM4 13h16v8H4z"/></svg>`,
    title: "Infrastructure & Virtualization",
    description:
      "Linux server deployment, containerization with Docker, and virtualized lab environments designed for secure testing, monitoring, and automation.",
  },
    {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h16v10H4V10zm3 3h10v2H7v-2z"/></svg>`,
    title: "Business Document Automation",
    description:
      "Extracted structured data from PDFs using OCR and parsing techniques, then generated clean output PDFs and exports to streamline business workflows.",
  },
];


export type Skill = (typeof skills)[number];

