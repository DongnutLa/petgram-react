import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const { id } = useParams()

  return (
    <Layout title={`Fotografía ${id}`}>
      <PhotoCardWithQuery id={id} /> 
    </Layout>
  )
}
