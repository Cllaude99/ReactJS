import { Link } from 'react-router-dom';

function Charater({ id, coverImg, name }) {
  return (
    <div>
      <img src={coverImg} alt={name} />
      <div>
        <h2>
          <Link to={`/character/${id}`}>{name}</Link>
        </h2>
      </div>
    </div>
  );
}

export default Charater;
