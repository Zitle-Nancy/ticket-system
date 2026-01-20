import { useState } from "react";
import clsx from "clsx";
import {
  useDeleteReportMutation,
  useGetReportsQuery,
} from "../services/reportApi";
import type { ReportPriority, ReportType } from "../types/report.types";
import { deleteIcon } from "../../../assets";
import ReportDetailDialog from "./ReportDetail";

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

const rowByPage = 2;

const Periods = () => {
  const { data: reports = [], isLoading } = useGetReportsQuery();
  const [deleteReport] = useDeleteReportMutation();

  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteReport = async (id: string) => {
    await deleteReport(id);
    setSelectedReport(null);
  };

  const openDetailReport = (currentReport: ReportType) => {
    setSelectedReport(currentReport);
    setOpen(true);
  };

  const lastItem = currentPage * rowByPage;
  const firstItem = lastItem - rowByPage;
  const currentReports = reports.slice(firstItem, lastItem);
  const totalPages = Math.ceil(reports.length / rowByPage);

  if (isLoading) return <p>Cargando...</p>;

  if (!reports.length) {
    return <p>No hay reportes aún</p>;
  }

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
            {currentReports.map((currentReport) => (
              <tr
                key={currentReport.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {currentReport.subject}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-md text-xs font-bold",
                      currentReport.priority === "Alta"
                        ? "text-red-600"
                        : "text-gray-500",
                    )}
                  >
                    {currentReport.priority as ReportPriority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {currentReport.createdAt}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(currentReport.status)}`}
                  >
                    {currentReport.status}
                  </span>
                </td>
                <td className="flex justify-between items-center pl-6 pr-4 py-4 text-sm text-gray-500">
                  <button
                    className="mr-8 font-medium text-sm text-blue-primary hover:text-blue-primary cursor-pointer"
                    onClick={() => openDetailReport(currentReport)}
                  >
                    Ver detalle
                  </button>
                  <button
                    className="p-1 hover:bg-gray-200 rounded-b-sm transition-colors cursor-pointer"
                    onClick={() => handleDeleteReport(currentReport.id)}
                  >
                    <img src={deleteIcon} alt="delete pending task" />
                  </button>
                </td>
              </tr>
            ))}
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

      {selectedReport && (
        <ReportDetailDialog
          report={selectedReport}
          onClose={() => setOpen(false)}
          isOpen={open}
        />
      )}
    </>
  );
};

export default Periods;
