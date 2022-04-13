import Head from "next/head";
import Header from "../components/Heade";
import { getSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/feed";
import Widgets from "../components/Widgets";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="bg-gray-100 h-screen overflow-auto">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook social media app" />
      </Head>
      <Header />
      <main className="flex h-screen ">
        <Sidebar />
        <Feed list={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("timestamp", "desc"));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    timestamp: 0
  }));

  return {
    props: {
      session,
      posts,
    },
  };
}
