export const studies = [
  {
    title: "B.S. in Cybersecurity",
    institution: "Augusta University",
    description:
      "Coursework focused on network security, operating systems, threat detection, digital forensics, secure system design, and applied security engineering.",
    tags: [
      "Network Security",
      "Operating Systems",
      "Threat Detection",
      "Digital Forensics",
      "Security Engineering",
      "Vulnerability Analysis",
    ],
  },
  {
    title: "CompTIA Security+",
    institution: "CompTIA",
    description:
      "Validated foundational cybersecurity knowledge including risk management, network security, incident response, and security architecture.",
    tags: [
      "Risk Management",
      "Security Architecture",
      "Incident Response",
      "Network Security",
    ],
  },
  {
    title: "CompTIA PenTest+",
    institution: "CompTIA",
    description:
      "Validated skills in penetration testing, vulnerability assessment, exploitation techniques, and security reporting.",
    tags: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Exploitation",
      "Security Reporting",
    ],
  },
  {
    title: "CompTIA Cloud+",
    institution: "CompTIA",
    description:
      "Validated knowledge of cloud infrastructure security, virtualization, automation, and cloud operations across AWS, Azure, and hybrid environments.",
    tags: [
      "Cloud Security",
      "Virtualization",
      "Infrastructure Automation",
      "Cloud Operations",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
