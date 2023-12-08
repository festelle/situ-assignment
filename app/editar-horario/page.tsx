import EditAvailability from "@/components/editar-horario/editAvailability";
import CompleteProfessionalInfo from "@/components/editar-horario/completeProfessionalInfo";
import { getProfessional } from "@/lib/DBFunctions";
import { currentUser } from "@clerk/nextjs";

export default async function Page(){
  const userAuthInfo = await currentUser();
  const professional = await getProfessional(userAuthInfo?.id);
  return (
    <div className="m-8 md:m-24">
    {professional ? <EditAvailability user={userAuthInfo} /> : <CompleteProfessionalInfo user={userAuthInfo} />}
    </div>
  )
}