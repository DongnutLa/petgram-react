import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotocards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const { id } = useParams()

  return (
    <Layout showChildren={false} title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotocards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage)
