import React from 'react'
import { Container, Grid } from '@mui/material';
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

//import request data
import client from '../libs/apollo/ApolloClient';
import gql from 'graphql-tag';


const PRODUCT_QUERY= gql`query{
  products(first: 8) {
    nodes {
      id
      databaseId
      name
      description
      slug
      image {
        uri
        srcSet
        sourceUrl
      }
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
      }
      ... on VariableProduct {
        price
        regularPrice
        salePrice
        variations {
          nodes {
            price
          }
        }
      }
    }
  }
}`;


const Home = (props) => {
  const {products} = props;
  return (
    <div>
      <SwipeableTextMobileStepper />
      <Container>
        <Grid container spacing={{ sm: 2,md: 2, xs: 4 ,lg: 6}} columns={{ xs: 4, sm: 6, md: 4, lg: 4}}>
              { products.length ? (
              products.map( product => <Product key={ product.id } product={ product } /> )
            ) : ''}
        </Grid>
      </Container>
      
      <NewImageList />
      {/* <Container>
        <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 6, md: 3, lg: 3}}>
              { products.length ? (
              products.map( product => <Product key={ product.id } product={ product } /> )
            ) : ''}
        </Grid>
      </Container> */}
      <SellerImageList />
      <NameForm />

    </div>
  )
}

export default Home;

Home.getInitialProps = async () => {
  const result = await client.query( {
      query: PRODUCT_QUERY
  });

  return{
      products: result.data.products.nodes, 
  }
}
