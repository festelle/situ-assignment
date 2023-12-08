import possibleSpecialtizations from "@/lib/specializationOptions";
import { professionalInfoType } from "@/types/types";

export default function AvailabilityFormTemplate({submitFormFunction, actualProfessionalInfo}:{submitFormFunction: ((formData: FormData) => void), actualProfessionalInfo: professionalInfoType|null}){

  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

  const hours: string[] = [];
  for (let i = 8; i <= 18; i++) {
    hours.push(`${i}:00 - ${(i+1)}:00`);
  }

  return (
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" action={submitFormFunction}>
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombres
                </label>
                <div className="mt-2">
                  <input
                  defaultValue={actualProfessionalInfo?.firstName}
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Apellidos
                </label>
                <div className="mt-2">
                  <input
                  defaultValue={actualProfessionalInfo?.lastName}
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Especialidad
                </label>
                <div className="mt-2">
                  <select
                    defaultValue={actualProfessionalInfo?.specialization}
                    id="specialization"
                    name="specialization"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {
                      possibleSpecialtizations.map(s => <option key={s}>{s}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 sm:p-8">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Horarios Disponibles</h3>
          {days.map(day => (
            <div key={day} className="my-2">
              <h4 className="mt-4 text-sm font-medium leading-6 text-gray-900">{day}</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {hours.map(hour => (
                  <label key={hour} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      defaultChecked={actualProfessionalInfo?.availability.includes(`${day.toLowerCase()} ${hour}`)}
                      name={`${day.toLowerCase()} ${hour}`}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{hour}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <a href="/" type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </a>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
  )
}