import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import Category from '../components/category'
import Customer from '../components/Customer'
import FeatureProduct from '../components/FeatureProduct'
export default function Home() {
  return (
    <div>
        <Header/>
        <Category/>
        <FeatureProduct/>
        <Customer/>
        <Footer/>
    </div>
  )
}
