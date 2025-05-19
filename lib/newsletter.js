import { databases, ID } from './appwrite'
import { Query } from 'appwrite'

export const subscribeToNewsletter = async (email) => {
    if (!email) throw new Error('Email is required')

    // Check for duplicate email
    const existing = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_NEWSLETTER_COLLECTION_ID,
        [Query.equal("email", email)]
    )

    if (existing.total > 0) {
        throw new Error('You are already subscribed with this email.')
    }

    await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_NEWSLETTER_COLLECTION_ID,
        ID.unique(),
        {
            email,
            subscribedAt: new Date().toISOString()
        }
    )
}
