import Head from "next/head";
import Header from "../components/Heade";

export default function Home() {
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
