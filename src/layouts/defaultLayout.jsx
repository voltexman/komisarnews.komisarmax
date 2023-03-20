import Head from 'next/head';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <header>
        {/* Header content goes here */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </>
  );
};

export default DefaultLayout;
