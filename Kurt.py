import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("C:\\Users\\KURT\\Documents\\KurtPortfolio\\kurtportfolio-5aaa0-firebase-adminsdk-fbsvc-1ed2facb9c.json")
firebase_admin.initialize_app(cred)

from firebase_admin import firestore

db = firestore.client()  #Connect to Firestore

test_ref = db.collection("testing").document("connection_test")

#Test
test_ref.set({
    "status": "connected",
    "language": "Python",
    "success": True
})

print("Successfully wrote test data to Firebase!")
