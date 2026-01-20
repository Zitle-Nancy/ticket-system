export type ReportPriority = "low" | "medium" | "high";
export type ReportStatus = "open" | "in-progress" | "closed";

export type ReportType = {
  id: string;
  subject: string;
  priority: ReportPriority;
  attachment?: string;
  createdAt: string;
  status: ReportStatus;
};

export type ViewsType = "reportList" | "create" | "detail";

export type ViewType = {
  currentView: ViewsType;
};
