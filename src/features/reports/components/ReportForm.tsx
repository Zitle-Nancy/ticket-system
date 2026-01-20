import { ChevronDownIcon, PhotoIcon } from "@heroicons/react/24/solid";
import type { ReportType } from "../types/report.types";
import useReportForm from "../hooks/useReportForm";

interface FormProps {
  headTitle: string;
  initialValues: ReportType;
  onSubmit: (values: ReportType) => void;
  onCancel: () => void;
}

const ReportForm = ({
  headTitle,
  initialValues,
  onSubmit,
  onCancel,
}: FormProps) => {
  const { values, handleChange } = useReportForm(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                className="border col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              >
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
              />
            </div>
          </div>

          {/* Archivo */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-black">
              Adjuntar archivo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <label className="mt-4 block cursor-pointer text-sm font-semibold text-indigo-600">
                  Upload file
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      handleChange(
                        "attachment",
                        e.target.files ? e.target.files[0] : null,
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md px-4 py-2 text-sm font-semibold"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Crear ticket
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
