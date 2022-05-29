import React, { useContext, Suspense } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Detail } from './pages/Detail'
//import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'

import { GlobalStyle } from './styles/GlobalStyles'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <Navigate to='/login' />} />
          <Route path='/user' element={isAuth ? <User /> : <Navigate to='/login' />} />
          <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </Suspense>
  )
}
