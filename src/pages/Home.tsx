import * as React from 'react'
import Header from '../components/header'
import BusinessMenu from '../components/BusinessMenu/index'
import SampleLunch from '../components/SampleLunch'
import Cart from '../components/Cart'
import Navigation from '../components/Navigation'

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