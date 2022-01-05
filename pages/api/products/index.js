//import request data
import client from '../../../libs/apollo/ApolloClient';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const PRODUCTS_QUERY= gql`query{
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

export function getProducts(){
    const results = await client.query( {
      query: PRODUCTS_QUERY
    }).then((result)=>{
      return result.data.products.nodes;
    })
    return results;
}

export default function handler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
      const products = getProducts();
      res.status(200).json(products);
    }
  }
