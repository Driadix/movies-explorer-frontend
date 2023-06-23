import React from 'react'
import './styles.scss'

const MoviesCard = ({movie, isSaved=false}) => {
  const {image, title, text, isLiked} = movie;
  const [isCardLiked, setIsCardLiked] = React.useState(isLiked);

  return (
    <div className='movies__card'>
      <img src={image} alt={title} className="movies__card-image" />
      <div className="movies__card-content">
        <div className="movies__card-text-area">
          <h4 className="movies__card-title">{title}</h4>
          <p className="movies__card-text">{text}</p>
        </div>
        {!isSaved ?
        (<button onClick={() => setIsCardLiked(!isCardLiked)} className={`movies__card-like-button${isCardLiked ? ' movies__card-like-button_active' : ''}`}/>)
        :
        (<button className='movies__card-delete-button'/>)}
      </div>
    </div>
  )
}

export default MoviesCard
