// /lib/scheduleCall.js
import { databases, ID } from "./appwrite"
import { Query } from "appwrite"   // ✅ ADD THIS

export const scheduleCall = async (data) => {
  const {
    date,
    time,
    name,
    email,
    notes = '',
    timeZone
  } = data

  if (!date || !time) throw new Error('Date and time are required.')
  if (!name || !email) throw new Error('Name and email are required.')
  if (!timeZone) throw new Error('Timezone is required.')

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) throw new Error('Invalid email address.')

  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_SCHEDULE_COLLECTION_ID

  if (!dbId || !collectionId) {
    throw new Error('Appwrite DB or collection id not configured.')
  }

  const existing = await databases.listDocuments(dbId, collectionId, [
    Query.equal('email', email),
    Query.equal('date', new Date(date).toISOString()),
    Query.equal('time', time),
  ])

  if (existing.total > 0) {
    throw new Error('You have already scheduled a call at this date and time.')
  }

  const doc = await databases.createDocument(
    dbId,
    collectionId,
    ID.unique(),
    {
      time,
      name,
      email,
      notes,
      timeZone,
      date: new Date(date).toISOString(),
    }
  )

  return doc
}
