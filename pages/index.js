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
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  return {
    props: {
      products: data,
      fallback: true,
    },
    revalidate: 30,
  };
};

export default Home;
