import { formattedDate } from "../../../helpers/format";
import { ReportForm } from "../components";
import { useAddReportMutation } from "../services/reportApi";
import type { ReportType } from "../types/report.types";

const EMPTY_TICKET: ReportType = {
  id: "",
  subject: "",
  priority: "baja",
  detail: "",
  attachment: "",
  createdAt: "",
  status: "pendiente",
};

const CreateReport = ({ onReportCreated }: { onReportCreated: () => void }) => {
  const [addReport] = useAddReportMutation();
  const uuid = crypto.randomUUID();
  const date = new Date();

  const onSubmit = async (values: ReportType) => {
    await addReport({
      ...values,
      id: uuid,
      createdAt: formattedDate(date),
      status: "pendiente",
    });
    onReportCreated();
  };

  return (
    <ReportForm
      headTitle={"Reporta un problema"}
      initialValues={EMPTY_TICKET}
      onSubmit={onSubmit}
      onCancel={onReportCreated}
    />
  );
};
export default CreateReport;
