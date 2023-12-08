import type { WithId, Document } from 'mongodb'

export interface professionalInfoType extends WithId<Document> {
  userId: string;
  firstName: string;
  lastName: string;
  specialization: string;
  availability: string[];
}