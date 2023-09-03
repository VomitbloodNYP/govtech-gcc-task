import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// project and keys will be destroyed after 30 days
const firebaseConfig = {
  apiKey: 'AIzaSyBwzD9EOlwhtVUy0B_p9uV_Fg4zEryiBeY',
  authDomain: 'govtech-gcc-task-backend.firebaseapp.com',
  projectId: 'govtech-gcc-task-backend',
  storageBucket: 'govtech-gcc-task-backend.appspot.com',
  messagingSenderId: '182364461671',
  appId: '1:182364461671:web:31457668a170d9f66392c2',
  measurementId: 'G-J4CWXGJHFC',
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseDB = getFirestore(firebaseApp)
