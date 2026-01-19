export type ReportPriority = "low" | "medium" | "high";
export type ReportStatus = "open" | "in-progress" | "closed";

export type ReportType = {
  id: string;
  subject: string;
  priority: ReportPriority;
  detail: string;
  attachment?: string;
  createdAt: string;
  status: ReportStatus;
};
