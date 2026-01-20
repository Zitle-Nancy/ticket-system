export type ReportPriority = "baja" | "media" | "alta";
export type ReportStatus = "completado" | "enProgreso" | "pendiente";

export type ReportType = {
  id: string;
  subject: string;
  priority: ReportPriority;
  detail: string;
  attachment?: string;
  createdAt: string;
  status: ReportStatus;
};

export type ViewsType = "reportList" | "create" | "detail";

export type ViewType = {
  currentView: ViewsType;
};

export type FormTypes = {
  headTitle: string;
  initialValues: ReportType;
  onSubmit: (values: ReportType) => void;
  onCancel: () => void;
};
