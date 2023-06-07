import {Link} from 'react-router-dom'
import './index.css'

const SimilarMovies = props => {
  const {eachMovie} = props
  const {posterPath, title, id} = eachMovie

  return (
    <Link to={`/movies/${id}`}>
      <li>
        <img className="similar-movies-img" alt={title} src={posterPath} />
      </li>
    </Link>
  )
}

export default SimilarMovies
