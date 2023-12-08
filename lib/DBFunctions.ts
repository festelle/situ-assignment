import { professionalInfoType } from "@/types/types";
import clientPromise from "./mongodb";



export const getProfessionals = async () => {
  const mongoDBClient = await clientPromise;
  const db = mongoDBClient.db("situ");
  const users = await db.collection("professional").find({}).toArray();
  return users as professionalInfoType[];
}

export const getProfessional = async (userId: string|undefined) => {
  if (!userId) return null;
  const mongoDBClient = await clientPromise;
  const db = mongoDBClient.db("situ");
  const professional = await db.collection("professional").findOne({"userId": userId})
  return professional as professionalInfoType;
}

export const createProfessional = async(professionalInfo: professionalInfoType) => {
  const mongoDBClient = await clientPromise;
  const db = mongoDBClient.db("situ");
  const professional = await db.collection("professional").insertOne(professionalInfo);
  return professional;
}

export const updateProfessional = async(professionalInfo: professionalInfoType) => {
  const mongoDBClient = await clientPromise;
  const db = mongoDBClient.db("situ");
  const professional = await db.collection("professional").updateOne({"_id": professionalInfo._id},{"$set": professionalInfo });
  return professional;
}