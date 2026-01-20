export type ReportPriority = "Baja" | "Media" | "Alta";
export type ReportStatus = "Completado" | "En Progreso" | "Pendiente";

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
};

export type ReportDetailType = {
  report: ReportType | null;
  isOpen: boolean;
  onClose: () => void;
};
