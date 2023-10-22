import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import app from "../../../../firebase";

const db = getFirestore(app);
const DATABASE = "favorites";

/** GET API endpoint
 * retreaving the collection of `favorites` for given user id
 */

export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const userId = params.get("userId");

  const q = query(collection(db, DATABASE), where("userId", "==", userId));
  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return new Response(JSON.stringify(data));
}
/** POST API endpoint
 * inserting new entry for `favorites` collection
 */
export async function POST(req: Request) {
  const { userId, authorId } = await req.json();

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, DATABASE), {
    userId,
    authorId,
    created_at: serverTimestamp(),
  });

  return new Response(docRef.id);
}

/** DELETE API endpoint
 * deleting an entry for `favorites` collection
 */
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await deleteDoc(doc(db, DATABASE, id));

  return new Response(JSON.stringify({ status: "ok" }));
}
