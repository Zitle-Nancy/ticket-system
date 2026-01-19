import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function CreateReport() {
  return (
    <form>
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-base/7 font-semibold text-black">
          Reporta un problema
        </h2>

        <p className="mt-3 text-sm/6 text-gray-400">
          Por favor, completa el siguiente formulario para crear el ticket.
        </p>

        <div className="border-b border-white/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="subject"
                className="block text-sm/6 font-medium text-black"
              >
                Asunto
                <span className="ml-1 text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  required
                  id="subject"
                  name="subject"
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="detail"
                className="block text-sm/6 font-medium text-black"
              >
                Detalle
                <span className="ml-1 text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  required
                  id="detail"
                  name="detail"
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
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
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-black/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Baja</option>
                  <option>Media</option>
                  <option>Alta</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-file"
                className="block text-sm/6 font-medium text-black"
              >
                Adjuntar archivo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-black/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-600"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-400">PNG, PDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="font-semibold text-black rounded-md bg-gray-primary px-3 py-2 text-sm"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-primary px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Crear ticket
        </button>
      </div>
    </form>
  );
}
