import { useState } from "react";
import clsx from "clsx";
import { CreateReport, Reports, type ViewsType } from "./features/reports";
import { logo } from "./assets";

const App = () => {
  const [currentView, setCurrentView] = useState<ViewsType>("create");

  return (
    <>
      <header className="flex justify-center-safe p-6">
        <img src={logo} alt="logo" className="logo" />
        <nav className="flex gap-2 ml-20">
          <button
            onClick={() => setCurrentView("create")}
            className={clsx(
              "mr-8 font-medium text-base hover:text-blue-primary cursor-pointer",
              currentView === "create" ? "text-blue-primary" : "text-black",
            )}
          >
            Reportar un problema
          </button>
          <button
            onClick={() => setCurrentView("reportList")}
            className={clsx(
              "mr-8 font-medium text-base hover:text-blue-primary cursor-pointer",
              currentView === "reportList" ? "text-blue-primary" : "text-black",
            )}
          >
            Mis reportes
          </button>
        </nav>
      </header>
      <main className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-200">
        {currentView === "create" && (
          <CreateReport onReportCreated={() => setCurrentView("reportList")} />
        )}
        {currentView === "reportList" && <Reports />}
      </main>
    </>
  );
};

export default App;
