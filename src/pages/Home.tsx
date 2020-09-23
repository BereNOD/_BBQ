import * as React from 'react'
import Header from '../components/header'
import Navigation from '../components/Navigation'
import BusinessMenu from '../components/BusinessMenu/index'
import SampleLunch from '../components/SampleLunch'
import Cart from '../components/Cart'

const Home = () => (
  <>
    <Header />
    <Navigation />
    <BusinessMenu />
    <SampleLunch />
    <Cart />
  </>
)

export default Home