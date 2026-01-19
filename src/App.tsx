import { logo } from "@/assets";

function App() {
  return (
    <>
      <header className="flex justify-center-safe p-6">
        <img src={logo} alt="logo" className="logo" />
        <nav className="flex gap-2 ml-20">
          <button
            // onClick={() => onNavigate("create")}
            // className={currentView === "create" ? "font-bold" : ""}
            className="mr-8 font-medium text-base hover:text-blue-primary cursor-pointer"
          >
            Crear reporte
          </button>
          <button
            className="mr-8 font-medium text-base hover:text-blue-primary cursor-pointer"
            // onClick={() => onNavigate("list")}
            // className={currentView === "list" ? "font-bold" : ""}
          >
            Ver reportes
          </button>
        </nav>
      </header>
    </>
  );
}

export default App;
