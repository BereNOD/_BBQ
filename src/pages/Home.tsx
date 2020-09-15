import * as React from 'react'
import Header from '../components/header'
import BusinessMenu from '../components/BusinessMenu/index'
import SampleLunch from '../components/SampleLunch'
import Cart from '../components/Cart'

const Home = () => (
  <>
    <Header />
    <BusinessMenu />
    <SampleLunch />
    <Cart />
  </>
)

export default Home