import { Link } from 'react-router-dom';

function Character({ id, coverImg, name }) {
  return (
    <div>
      <img src={coverImg} alt={name} />
      <div>
        <h2>
          <h3>
            Character name : <Link to={`/character/${id}`}>{name}</Link>
          </h3>
        </h2>
      </div>
    </div>
  );
}

export default Character;
