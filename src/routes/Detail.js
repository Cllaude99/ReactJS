import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  const getCharater = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharater();
  }, []);

  console.log(character);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{character[0].name}</h1>
          {character[0].description ? (
            <p>{character[0].description}</p>
          ) : (
            'No Description'
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
