import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

export default function Posts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("timestamp", "desc"));

  const [snapshots, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    console.log(snapshots);
  }, [snapshots]);

  return (
    <div>
      {!loading && (
        <div>
          {snapshots.docs.map((doc) => {
            return <Post key={doc.id} post={doc.data()} />;
          })}
        </div>
      )}
    </div>
  );
}

function Post({ post }) {
  return <div>{JSON.stringify(post)}</div>;
}
