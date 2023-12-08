import { professionalInfoType } from "@/types/types";

export default function ProfessionalCard({ professional }: { professional: professionalInfoType}) {
  const {firstName, lastName, specialization, availability } = professional;
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <div>
            <span aria-hidden="true" className="absolute inset-0" />
            {firstName} {lastName}
          </div>
        </h3>
        <h4 className="text-sm">{specialization}</h4>
        {availability.map(a => <p className="text-sm text-gray-500" key={a}>{a}</p>)}
      </div>
    </div>
  )
}