import { getProfessionals } from "@/lib/DBFunctions";
import InteractiveProfessionalsPage from "./interactive";

export default async function Page() {
  const professionals = await getProfessionals();
  return (
    <InteractiveProfessionalsPage professionals={professionals} />
  )
}