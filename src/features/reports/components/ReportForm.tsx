import type { FormEvent } from "react";
import { ChevronDownIcon, PhotoIcon } from "@heroicons/react/24/solid";
import type { FormTypes, ReportType } from "../types/report.types";
import useReportForm from "../hooks/useReportForm";

const ReportForm = ({ headTitle, initialValues, onSubmit }: FormTypes) => {
  const { values, handleChange } = useReportForm(initialValues);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-b border-black/10 pb-6">
        <h2 className="text-base font-semibold text-black">{headTitle}</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <div className="col-span-full">
            <label className="block text-sm font-medium text-black">
              Asunto <span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              value={values?.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-black">
              Detalle <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              value={values?.detail}
              onChange={(e) => handleChange("detail", e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
              rows={4}
            />
          </div>

          <div className="col-span-full">
            <label
              htmlFor="priority"
              className="block text-sm/6 font-medium text-black"
            >
              Prioridad
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="priority"
                name="priority"
                value={values.priority}
                onChange={(e) =>
                  handleChange(
                    "priority",
                    e.target.value as ReportType["priority"],
                  )
                }
                className="border col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-black">
              Adjuntar archivo
            </label>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-black/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />

                <label
                  htmlFor="attachment"
                  className="mt-4 cursor-pointer text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <span>
                    {values.attachment ? values.attachment : "Upload a PDF"}
                  </span>

                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept="application/pdf"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      if (file.type !== "application/pdf") {
                        alert("Only PDF files are allowed");
                        return;
                      }

                      handleChange("attachment", file.name);
                    }}
                  />
                </label>

                <p className="mt-1 text-xs text-gray-500">PDF only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="submit"
          className="rounded-md bg-blue-primary px-4 py-2 text-sm font-semibold text-white"
        >
          Crear ticket
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
