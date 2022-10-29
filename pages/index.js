import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ pokemons }) {
  const { results } = pokemons;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Fetch api data using NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokemon App using Next.js!</h1>

        {results.map((result) => (
          <div className={styles.grid} key={result.name}>
            <a href={"pokemon/" + result.name} className={styles.card}>
              <h2>{result.name} &rarr;</h2>
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}
