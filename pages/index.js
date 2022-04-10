import Head from "next/head";
import Header from "../components/Heade";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook social media app" />
      </Head>
      <Header />
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
