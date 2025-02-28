export interface File {
  id: string;
  name: string;
  type: "file" | "folder";
  url?: string;
  parent: string | null;
  modified: string;
  size?: string;
}

export const mockFiles: File[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    parent: null,
    modified: "2023-12-01T10:30:00Z",
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    parent: null,
    modified: "2023-11-25T14:15:00Z",
  },
  {
    id: "3",
    name: "Work",
    type: "folder",
    parent: null,
    modified: "2023-10-18T09:45:00Z",
  },
  {
    id: "4",
    name: "Resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    parent: "1",
    size: "1.2 MB",
    modified: "2023-11-30T08:20:00Z",
  },
  {
    id: "5",
    name: "Project Proposal.docx",
    type: "file",
    url: "/files/proposal.docx",
    parent: "1",
    size: "2.5 MB",
    modified: "2023-11-28T16:50:00Z",
  },
  {
    id: "6",
    name: "Vacation.jpg",
    type: "file",
    url: "/files/vacation.jpg",
    parent: "2",
    size: "3.7 MB",
    modified: "2023-10-05T12:10:00Z",
  },
  {
    id: "7",
    name: "Profile Picture.png",
    type: "file",
    url: "/files/profile.png",
    parent: "2",
    size: "1.8 MB",
    modified: "2023-09-15T11:05:00Z",
  },
  {
    id: "8",
    name: "Presentations",
    type: "folder",
    parent: "3",
    modified: "2023-10-22T13:30:00Z",
  },
  {
    id: "9",
    name: "Q4 Report.pptx",
    type: "file",
    url: "/files/q4-report.pptx",
    parent: "8",
    size: "5.2 MB",
    modified: "2023-10-20T15:45:00Z",
  },
  {
    id: "10",
    name: "Budget.xlsx",
    type: "file",
    url: "/files/budget.xlsx",
    parent: "3",
    size: "1.5 MB",
    modified: "2023-10-11T17:25:00Z",
  },
];
