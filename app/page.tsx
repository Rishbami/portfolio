import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website." />
      </Head>
      <main className="container mx-auto p-4">
        <section className="text-center my-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600">
            I am a passionate developer building modern web applications.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;