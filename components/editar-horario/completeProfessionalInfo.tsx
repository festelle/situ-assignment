import { createProfessional } from "@/lib/DBFunctions";
import { User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AvailabilityFormTemplate from "./availabilityFormTemplate";
import { professionalInfoType } from "@/types/types";

export default function CompleteProfessionalInfo({user}:{user: User|null}) {

  const submitProfessional = async (formData: FormData) => {
    "use server"
    let availability: string[] = [];

    formData.forEach((value, key) => value === "on" ? availability.push(key): null)

    const newProfessional = {
      userId: user?.id||"",
      firstName: formData.get("first-name")?.toString()||"",
      lastName: formData.get("last-name")?.toString()||"",
      specialization: formData.get("specialization")?.toString()||"",
      availability
    }

    const isEmpty = Object.values(newProfessional).every(x => x === null || x === '');
    if (isEmpty) return;

    await createProfessional(newProfessional as professionalInfoType);
    redirect("/")

  }

  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Registrarse como profesional</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Notamos que todavía no estás registrado como profesional. Te tomará menos de 5 minutos!
          </p>
        </div>

        <AvailabilityFormTemplate actualProfessionalInfo={null} submitFormFunction={submitProfessional} />
      </div>
    </div>
  )
}
