import Head from "next/head";
import Header from "../components/Heade";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";


export default function Home({ session }) {
  console.log(session);
  if (!session) return <Login />;

  return (
    <div className="overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook social media app" />
      </Head>
      <Header />
      <main>
        <Sidebar />
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
