import Head from "next/head";
import Header from "../components/Heade";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/feed";

export default function Home({ session }) {
  console.log(session);
  if (!session) return <Login />;

  return (
    <div className="bg-gray-100 h-screen overflow-auto">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook social media app" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
