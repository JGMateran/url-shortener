import admin from 'firebase-admin'

const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string)

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
      projectId: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://thegreg-example.firebaseio.com'
  })
}
