import { useEffect, useState } from 'react';
import Charater from '../components/Charater';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [charaters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(charaters);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {charaters.map((character) => {
            <Charater
              key={character.id}
              id={character.id}
              name={character.name}
              coverImg={character.thumbnail.path}
            />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
