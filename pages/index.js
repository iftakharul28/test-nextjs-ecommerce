import React from 'react';
import axios from 'axios';
import { useStateContext } from '../context/StateContext';
import { Layout, ProductsCard } from '../components';
const Home = () => {
  const { data } = useStateContext();

  return (
    <Layout title="home">
      <ProductsCard product={data} />
    </Layout>
  );
};
// api :https://last-airbender-api.herokuapp.com/api/v1/characters/avatar
export const getStaticProps = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return {
    props: {
      products: data,
      fallback: false,
    },
  };
};

export default Home;
