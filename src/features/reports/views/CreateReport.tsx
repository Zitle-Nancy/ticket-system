import { formattedDate } from "../../../helpers/format";
import { ReportForm } from "../components";
import { useAddReportMutation } from "../services/reportApi";
import type { ReportType } from "../types/report.types";

const EMPTY_TICKET: ReportType = {
  id: "",
  subject: "",
  priority: "Baja",
  detail: "",
  attachment: "",
  createdAt: "",
  status: "Pendiente",
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
      status: "Pendiente",
    });
    onReportCreated();
  };

  return (
    <ReportForm
      headTitle={"Reporta un problema"}
      initialValues={EMPTY_TICKET}
      onSubmit={onSubmit}
    />
  );
};
export default CreateReport;
