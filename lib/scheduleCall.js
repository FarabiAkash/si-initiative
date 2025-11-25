// /lib/scheduleCall.js
import { databases, ID } from './appwrite'
import { Query } from 'appwrite'

/**
 * scheduleCall
 * @param {{ date: string, time: string, name: string, email: string, notes?: string }} data
 */
export const scheduleCall = async (data) => {
  const { date, time, name, email, notes = '' } = data

  if (!date || !time) throw new Error('Date and time are required.')
  if (!name || !email) throw new Error('Name and email are required.')

  // optional: basic email check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) throw new Error('Invalid email address.')

  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_SCHEDULE_COLLECTION_ID

  if (!dbId || !collectionId) {
    throw new Error('Appwrite DB or collection id not configured.')
  }

  // Check for duplicate schedule for the same email + date + time
  const existing = await databases.listDocuments(dbId, collectionId, [
    Query.equal('email', email),
    Query.equal('date', date),
    Query.equal('time', time)
  ])

  if (existing.total > 0) {
    throw new Error('You have already scheduled a call at this date and time.')
  }

  // Create document
  const doc = await databases.createDocument(
  dbId,
  collectionId,
  ID.unique(),
  {
    time,     
    name,
    email,
    notes,
    date: new Date(date).toISOString(),  // ⬅️ FIX FOR datetime column
  }
)


  return doc
}
