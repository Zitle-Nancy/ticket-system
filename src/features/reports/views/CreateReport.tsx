import type { ReportFormType } from "@/types";
import { ReportForm } from "../components";

const EMPTY_TICKET: ReportFormType = {
  id: "",
  subject: "",
  priority: "low",
  attachment: "",
  createdAt: "",
  status: "open",
};

const CreateReport = () => {
  const onSubmit = () => {};
  const onCancel = () => {};

  return (
    <ReportForm
      headTitle={"Reporta un problema"}
      initialValues={EMPTY_TICKET}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
};
export default CreateReport;
