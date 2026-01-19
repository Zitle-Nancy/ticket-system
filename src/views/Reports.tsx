import React, { useState } from "react";
// import {
//   MoreHorizontal,
//   ChevronLeft,
//   ChevronRight,
//   Circle,
// } from "lucide-react";

const Periods = () => {
  // Datos de ejemplo
  const datos = [
    {
      id: 1,
      asunto: "Actualizar servidores",
      prioridad: "Alta",
      fecha: "2024-03-10",
      estatus: "Completado",
    },
    {
      id: 2,
      asunto: "Revisión de diseño UI",
      prioridad: "Media",
      fecha: "2024-03-12",
      estatus: "En Progreso",
    },
    {
      id: 3,
      asunto: "Backup de base de datos",
      prioridad: "Alta",
      fecha: "2024-03-15",
      estatus: "Pendiente",
    },
    {
      id: 4,
      asunto: "Reporte de métricas Q1",
      prioridad: "Baja",
      fecha: "2024-03-18",
      estatus: "Completado",
    },
    {
      id: 5,
      asunto: "Fix bug login móvil",
      prioridad: "Alta",
      fecha: "2024-03-20",
      estatus: "En Progreso",
    },
    {
      id: 6,
      asunto: "Documentación API",
      prioridad: "Media",
      fecha: "2024-03-22",
      estatus: "Pendiente",
    },
  ];

  // Lógica de paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const filasPorPagina = 4;

  const indiceUltimoItem = paginaActual * filasPorPagina;
  const indicePrimerItem = indiceUltimoItem - filasPorPagina;
  const itemsActuales = datos.slice(indicePrimerItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(datos.length / filasPorPagina);

  // Estilos para Estatus
  const getEstatusStyle = (estatus: string) => {
    switch (estatus) {
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
            {itemsActuales.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {item.asunto}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-bold ${item.prioridad === "Alta" ? "text-red-600" : "text-gray-500"}`}
                  >
                    {item.prioridad}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.fecha}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstatusStyle(item.estatus)}`}
                  >
                    {/* <Circle className="w-2 h-2 mr-1.5 fill-current" /> */}
                    {item.estatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
                    {/* <MoreHorizontal className="w-5 h-5 text-gray-400" /> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 border-t border-gray-200 rounded-b-xl">
        <p className="text-sm text-gray-600">
          Mostrando{" "}
          <span className="font-semibold">{indicePrimerItem + 1}</span> a{" "}
          <span className="font-semibold">
            {Math.min(indiceUltimoItem, datos.length)}
          </span>{" "}
          de <span className="font-semibold">{datos.length}</span> resultados
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
            disabled={paginaActual === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {/* <ChevronLeft className="w-4 h-4 mr-1" /> */}
            Previous
          </button>
          <button
            onClick={() =>
              setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
            }
            disabled={paginaActual === totalPaginas}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
            {/* <ChevronRight className="w-4 h-4 ml-1" /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Periods;
