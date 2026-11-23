export interface ResearchEntry {
  id: string;
  code: string;
  title: string;
  presenter: string;
  schoolOrOffice: string;
  track:
    | "Teaching & Learning"
    | "Governance & Leadership"
    | "Child Protection & Wellness"
    | "Inclusive Education & DRRM";
  format: "BERF" | "NON-BERF";
  timeSlot: string;
  status: "Pending Confirmation" | "Scheduled";
}

export interface PanelMember {
  id: string;
  role: string;
  unit: string;
  focusArea: string;
  assignee: string;
  image: string;
}

export interface GuestEntry {
  id: string;
  designation: string;
  office: string;
  sessionRole: string;
  guestName: string;
  image: string;
}

export interface CommitteeMember {
  id: string;
  committeeRole: string;
  officeOrUnit: string;
  responsibilities: string;
  memberName: string;
  image: string;
}

export interface ProgramItem {
  time: string;
  title: string;
  details: string;
}

export const EVENT_INFO = {
  title: "Schools Division of Toledo City Research Congress 2026",
  shortTitle: "SDO Toledo City Research Congress 2026",
  dateDisplay: "December 7, 2026",
  dayOfWeek: "Monday",
  isoTargetDate: "2026-12-07T08:00:00+08:00",
  location: "Toledo City, Cebu (Venue To Be Announced)",
  partners: [
    {
      name: "DepEd Schools Division of Toledo City",
      shortName: "DepEd Toledo City",
      logo: "/images/deped-toledo-logo.svg",
      role: "Host Division",
    },
  ],
};

export const RESEARCH_LIST: ResearchEntry[] = [
  {
    id: "res-01",
    code: "RC26-TL-01",
    title: "Teaching & Learning Action Research Slot 01",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "Participating School — DepEd Toledo City",
    track: "Teaching & Learning",
    format: "BERF",
    timeSlot: "10:00 AM – 10:25 AM",
    status: "Scheduled",
  },
  {
    id: "res-02",
    code: "RC26-TL-02",
    title: "Teaching & Learning Action Research Slot 02",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "Participating School — DepEd Toledo City",
    track: "Teaching & Learning",
    format: "BERF",
    timeSlot: "10:30 AM – 10:55 AM",
    status: "Scheduled",
  },
  {
    id: "res-03",
    code: "RC26-GL-01",
    title: "Governance & School Leadership Study Slot 01",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "School / Division Office — DepEd Toledo City",
    track: "Governance & Leadership",
    format: "BERF",
    timeSlot: "11:00 AM – 11:25 AM",
    status: "Scheduled",
  },
  {
    id: "res-04",
    code: "RC26-CP-01",
    title: "Child Protection & Learner Wellness Study Slot 01",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "Participating School — DepEd Toledo City",
    track: "Child Protection & Wellness",
    format: "NON-BERF",
    timeSlot: "1:00 PM – 2:00 PM",
    status: "Scheduled",
  },
  {
    id: "res-05",
    code: "RC26-IE-01",
    title: "Inclusive Education & DRRM Innovation Slot 01",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "Participating School — DepEd Toledo City",
    track: "Inclusive Education & DRRM",
    format: "BERF",
    timeSlot: "1:30 PM – 1:55 PM",
    status: "Scheduled",
  },
  {
    id: "res-06",
    code: "RC26-GL-02",
    title: "Governance & Resource Management Study Slot 02",
    presenter: "Lead Researcher / Presenter",
    schoolOrOffice: "Participating School — DepEd Toledo City",
    track: "Governance & Leadership",
    format: "NON-BERF",
    timeSlot: "2:00 PM – 3:00 PM",
    status: "Scheduled",
  },
];

export const PANEL_MEMBERS: PanelMember[] = [
  {
    id: "panel-1",
    role: "Panel Chair — Division Research Coordinator",
    unit: "Planning & Research Unit, DepEd Toledo City",
    focusArea: "Research Rigor, Policy Alignment & Division Standards",
    assignee: "To Be Announced",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "panel-2",
    role: "Division Research Evaluator — Curriculum & Instruction",
    unit: "Curriculum Implementation Division (CID), DepEd Toledo City",
    focusArea: "Pedagogical Innovation & Learning Outcomes",
    assignee: "To Be Announced",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "panel-3",
    role: "Division Research Evaluator — Governance & Operations",
    unit: "School Governance & Operations Division (SGOD), DepEd Toledo City",
    focusArea: "School Leadership, DRRM & Learner Welfare",
    assignee: "To Be Announced",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "panel-4",
    role: "External Academic & Methodology Panelist",
    unit: "Partner Higher Education Institution",
    focusArea: "Research Design, Data Analysis & Ethics",
    assignee: "To Be Announced",
    image: "/images/member-placeholder.svg",
  },
];

export const GUEST_LIST: GuestEntry[] = [
  {
    id: "guest-1",
    designation: "Keynote Speaker",
    office: "Keynote Speaker — Academic & Education Leadership",
    sessionRole: "Keynote Address on Evidence-Based Basic Education",
    guestName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "guest-2",
    designation: "Host Division Head",
    office: "DepEd Schools Division of Toledo City — Office of the SDS",
    sessionRole: "Welcome Remarks & Division Research Vision",
    guestName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "guest-3",
    designation: "Assistant Schools Division Superintendent",
    office: "DepEd Schools Division of Toledo City — Office of the ASDS",
    sessionRole: "Statement of Purpose & Division Research Updates",
    guestName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "guest-4",
    designation: "Local Government Partner",
    office: "City Government of Toledo",
    sessionRole: "Message of Support for Local Education Research",
    guestName: "",
    image: "/images/member-placeholder.svg",
  },
];

export const RESEARCH_COMMITTEE: CommitteeMember[] = [
  {
    id: "comm-1",
    committeeRole: "Over-all Chairperson",
    officeOrUnit: "Office of the Schools Division Superintendent, DepEd Toledo City",
    responsibilities: "Overall strategic direction and executive oversight of the 2026 Research Congress.",
    memberName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "comm-2",
    committeeRole: "Co-Chairperson",
    officeOrUnit: "Office of the Assistant Schools Division Superintendent, DepEd Toledo City",
    responsibilities: "Operational coordination across divisions, schools, and partner units.",
    memberName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "comm-3",
    committeeRole: "Division Research Coordinator & Secretariat Lead",
    officeOrUnit: "School Governance & Operations Division (SGOD) — Planning & Research",
    responsibilities: "Abstract screening, presenter scheduling, and congress documentation.",
    memberName: "",
    image: "/images/member-placeholder.svg",
  },
  {
    id: "comm-4",
    committeeRole: "Technical Working Group — Program & Evaluation",
    officeOrUnit: "Curriculum Implementation Division (CID) & SGOD, DepEd Toledo City",
    responsibilities: "Track facilitation, panel logistics, and certificate/awarding management.",
    memberName: "",
    image: "/images/member-placeholder.svg",
  },
];

export const PROGRAM_SCHEDULE: ProgramItem[] = [
  {
    time: "8:00 AM – 8:45 AM",
    title: "Registration & Research Gallery Opening",
    details: "Check-in of presenters, panelists, and guests; opening of research exhibits.",
  },
  {
    time: "8:45 AM – 9:45 AM",
    title: "Opening Program & Keynote Address",
    details: "Welcome remarks by DepEd Toledo City leadership followed by the keynote address.",
  },
  {
    time: "10:00 AM – 12:00 PM",
    title: "Morning Research Sessions (BERF & NON-BERF)",
    details: "Track sessions with live panel evaluation and Q&A.",
  },
  {
    time: "1:00 PM – 3:00 PM",
    title: "Afternoon Research Sessions (BERF & NON-BERF)",
    details: "Continuation of track papers and panel reviews.",
  },
  {
    time: "3:15 PM – 4:30 PM",
    title: "Recognition, Best Paper Awards & Closing Ceremonies",
    details: "Awarding of certificates and synthesis of research recommendations.",
  },
];
