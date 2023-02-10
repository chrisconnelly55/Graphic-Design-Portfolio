import Head from "next/head";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About | Connelly Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">About</p>
      </main>
    </div>
  );
}
