import { useState } from "react";
import clsx from "clsx";
import { useGetReportsQuery } from "../services/reportApi";
import type { ReportPriority } from "../types/report.types";
import { deleteIcon } from "../../../assets";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Completado":
      return "bg-green-100 text-green-700 border-green-200";
    case "En Progreso":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Pendiente":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Periods = () => {
  const { data: reports = [] } = useGetReportsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const rowByPage = 2;

  const lastItem = currentPage * rowByPage;
  const firstItem = lastItem - rowByPage;
  const currentReports = reports.slice(firstItem, lastItem);
  const totalPages = Math.ceil(reports.length / rowByPage);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Asunto
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Prioridad
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Fecha
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Estatus
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentReports.map(
              ({ id, subject, priority, createdAt, status }) => (
                <tr key={id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {subject}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span
                      className={clsx(
                        "px-2 py-1 rounded-md text-xs font-bold",
                        priority === "alta" ? "text-red-600" : "text-gray-500",
                      )}
                    >
                      {priority as ReportPriority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="flex justify-between items-center pl-6 pr-4 py-4 text-sm text-gray-500">
                    <button className="mr-8 font-medium text-sm text-blue-primary hover:text-blue-primary cursor-pointer">
                      Ver detalle
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-b-sm transition-colors cursor-pointer">
                      <img src={deleteIcon} alt="delete pending task" />
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end px-6 py-4 bg-gray-50/50 border-t border-gray-200 rounded-b-xl">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Periods;
