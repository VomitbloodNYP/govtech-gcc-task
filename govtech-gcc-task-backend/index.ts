import express, { Express, Request, Response } from 'express'
import { firestoreCommitUpdate, firestorePushUpdate, firestoreRetrieveCollection } from './src/firebase/firestore'
import { randomUUID } from 'crypto'
import cors from 'cors'
import { serverTimestamp } from 'firebase/firestore'

const app: Express = express()
const PORT = 5001

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

type InputFormData = {
  firstName: string
  lastName: string
  temperature: number
  symptoms: string[]
  closeContact: boolean | null
}

app.post('/api/submit', (req: Request, res: Response) => {
  const data: InputFormData = req.body

  // server sided validation
  // check if got values from required fields
  if (!data.firstName || !data.lastName || data.closeContact === null) {
    return res.status(400).send({ error: 'Missing required fields.' })
  }
  // check if temperature is a number
  if (typeof data.temperature !== 'number') {
    return res.status(400).send({ error: 'Temperature must be a number.' })
  }

  // commit and push to firestore
  const collectionName = 'declarations'
  const docName = randomUUID()
  firestoreCommitUpdate(collectionName, docName, 'id', docName)
  firestoreCommitUpdate(collectionName, docName, 'firstName', data.firstName)
  firestoreCommitUpdate(collectionName, docName, 'lastName', data.lastName)
  firestoreCommitUpdate(collectionName, docName, 'temperature', data.temperature)
  firestoreCommitUpdate(collectionName, docName, 'symptoms', data.symptoms)
  firestoreCommitUpdate(collectionName, docName, 'closeContact', data.closeContact)
  firestoreCommitUpdate(collectionName, docName, 'timestamp', serverTimestamp())
  firestorePushUpdate()

  res.send({ status: 'success', received: data })
})

app.get('/api/retrieve', async (req: Request, res: Response) => {
  const collectionName = 'declarations'
  const documentList = await firestoreRetrieveCollection(collectionName)

  res.send({ status: 'success', data: documentList })
})
