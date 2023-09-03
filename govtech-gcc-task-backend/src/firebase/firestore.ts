import { collection, doc, getDocs, writeBatch } from 'firebase/firestore'
import { firebaseDB } from './firebase'

type UpdateItem = {
  collectionName: string
  documentName: string
  fieldName: string
  newValue: any
}

let updateQueue: UpdateItem[] = []

// commit
export const firestoreCommitUpdate = (
  collectionName: string,
  documentName: string,
  fieldName: string,
  newValue: any
) => {
  updateQueue.push({ collectionName, documentName, fieldName, newValue })
}

// push
export const firestorePushUpdate = async () => {
  const batch = writeBatch(firebaseDB)

  updateQueue.forEach((update) => {
    const docRef = doc(firebaseDB, update.collectionName, update.documentName)
    batch.set(docRef, { [update.fieldName]: update.newValue }, { merge: true })
  })

  await batch.commit()
  updateQueue = []
}

// pull
export const firestoreRetrieveCollection = async (collectionName: string) => {
  type document = {
    id: string
    firstName: string
    lastName: string
    temperature: number
    symptoms: string[]
    closeContact: boolean | null
  }

  const documentList: document[] = []

  const querySnapshot = await getDocs(collection(firebaseDB, collectionName))
  querySnapshot.forEach((doc) => {
    documentList.push(doc.data() as document)
  })

  return documentList
}
