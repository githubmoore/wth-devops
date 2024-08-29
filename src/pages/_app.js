import '../css/style.css';
import '../css/form.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
        <meta name="description" content="Pet Care App - Manage and adopt pets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/new">Add Pet</Link>
        </div>

        <Image
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
          width={200} // Adjust width as needed
          height={100} // Adjust height as needed
        />
      </div>

      <h1>Adoption Shelter</h1>

      <Image
        src="https://raw.githubusercontent.com/github/pets-workshop/main/src/pics/roscoe.jpg"
        alt="Roscoe the dog"
        width={300} // Adjust width as needed
        height={200} // Adjust height as needed
      />

      <p>Alexander Moore</p>

      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
