import React from 'react'
import { Photocard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      (res) => {
        if(res.data?.loading) return <p>Loading...</p>
        if(res.data?.error) return <p>Error!</p>
        const photo = res.data?.photo ?? {}
        return <Photocard {...photo} />
      }
    }
  </Query>
)
