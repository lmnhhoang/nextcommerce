// header
import React from 'react'
import AddHead from '../components/AddHead'
import SideBarTop from '../components/sidebar';
import HeaderMid from '../components/HeaderMid'
import HeaderCenter from '../components/HeaderCenter'
// end header


// product
import Product from '../components/product';
// end product tabs


// form Email
import NameForm from '../components/formEmail';
// end  form Email


// footer
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
// end footer



const Home = () => {

  return (
    <div>
      <AddHead />
      <SideBarTop />
      <HeaderMid />
      <HeaderCenter />

      <Product />
      <NameForm />

      <Footer />
      <Copyright />
    </div>
  )
}

export default Home;