import {Link} from 'react-router-dom'

import './index.css'

const MovieItems = props => {
  const {eachMovie} = props
  const {posterPath, title, id} = eachMovie

  return (
    <Link to={`/movies/${id}`} replace>
      <img className="popular-img" alt={title} src={posterPath} />
    </Link>
  )
}

export default MovieItems
