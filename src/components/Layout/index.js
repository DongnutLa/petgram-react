import React from 'react'
import { Helmet } from 'react-helmet'

import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, showChildren = true }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && showChildren && <Title>{title}</Title>}
        {subtitle && showChildren && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
