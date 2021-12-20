import React from 'react'

// slider
import SwipeableTextMobileStepper from '../components/slider';
// end slider

// product
import Product from '../components/product';
// end product tabs

// newlistimg
import NewImageList from '../components/newlistimg';
// end newlistimg

// imglist
import SellerImageList from '../components/imglist';
// end imglist

// form Email
import NameForm from '../components/formEmail';
// end  form Email

const Home = () => {

  return (
    <div>

      <SwipeableTextMobileStepper />
      <Product />
      <NewImageList />
      <Product />
      <SellerImageList />
      <NameForm />

    </div>
  )
}

export default Home;