import admin from 'firebase-admin'
import serviceAccount from '../serviceAccountKey.json' 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
//console.log('Firebase admin initialized');

class FirebaseClass {
  constructor(collectionName) {
    this.db = admin.firestore();
    this.collection = this.db.collection(collectionName);
  }

  async getAll() {
    try {
      const all = await this.collection.get();
      return all.docs.map(doc => doc.data());
    } catch (err) {
      throw new Error(err);
    }
  }
  async getOne(id) {
    try {
      const one = await this.collection.doc(id).get();
      return one.data();
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(doc) {
    try {
      const newDoc = await this.collection.add(doc);
      return newDoc.id;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, doc) {
    try {
        const updatedDoc = await this.collection.doc(id).update(doc);
        return updatedDoc;
    } catch (err) {
        throw new Error(err);
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.collection.doc(id).delete();
      return deletedDoc;
    } catch (err) {
      throw new Error(err);
    }
  }

}

export default FirebaseClass;