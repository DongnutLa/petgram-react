import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  return (
    <Query query={GET_FAVORITES} fetchPolicy='cache-and-network'>
      {renderProp}
    </Query>
  )
}
