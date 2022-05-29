import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <>
      <Layout title='Petgram - Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
        <FavsWithQuery />
      </Layout>
    </>
  )
}
