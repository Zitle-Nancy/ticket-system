import { useState } from "react";
import type { ReportType } from "@/types";

const useReportForm = (initialValues: ReportType) => {
  const [values, setValues] = useState<ReportType>(initialValues);

  const handleChange = <K extends keyof ReportType>(
    field: K,
    value: ReportType[K],
  ) => {
    setValues((prev: ReportType) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    values,
    handleChange,
    setValues,
  };
};

export default useReportForm;
