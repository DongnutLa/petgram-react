import React from 'react'

import { FavButton } from '../FavButton'
import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const Photocard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && 
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: { input: { id }}})
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
