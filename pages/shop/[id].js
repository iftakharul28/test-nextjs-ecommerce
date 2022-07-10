import React from 'react';
import axios from 'axios';
import { Layout } from '../../components';
import Image from 'next/image';

const productsDetails = ({ productSingle }) => {
  return (
    <Layout title="product-single">
      {productSingle && (
        <div className="md:flex md:justify-between md:gap-5">
          <div className="relative md:flex-1" style={{ paddingTop: '35.25%' }}>
            <Image
              src={productSingle.image}
              alt={productSingle.title}
              layout="fill"
            />
          </div>
          <div className="md:flex-1">
            <h1>{productSingle.title}</h1>
            <p>{productSingle.description}</p>
            <span>category: {productSingle.category}</span>
            <p>price: {productSingle.price}</p>

            <div>
              <p>rating {productSingle.rating.rate}</p>
              <p>count {productSingle.rating.count}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
export const getStaticPaths = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return {
    paths: data.map((itm) => ({
      params: { id: itm.id.toString() },
    })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      productSingle: data,
    },
  };
};

export default productsDetails;
