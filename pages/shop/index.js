import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import Image from 'next/image';

const productsDetails = () => {
  const [productSingle, setProductSingle] = useState('');
  const router = useRouter();
  const key = router.query.product_id;
  //   console.log(router);
  //   console.log(key);
  const searchData = async () => {
    const url = `https://fakestoreapi.com/products/${key}`;
    // console.log(url);
    try {
      const { data } = await axios.get(url);
      if (data) {
        setProductSingle(data);
      }
    } catch (error) {
      console.log(error);
      if (error.status != 200) {
        alert('something wents wrong');
      }
    }
  };
  useEffect(() => {
    if (key) {
      searchData();
    }
  }, [key]);
  return (
    <Layout title="product-single">
      {productSingle && (
        <div className="md:flex md:justify-between md:gap-6 lg:max-w-[950px] lg:m-auto">
          <div
            className="relative md:flex-[1]"
            style={{ paddingTop: '25.25%' }}
          >
            <Image
              src={productSingle.image}
              alt={productSingle.title}
              layout="fill"
            />
          </div>
          <div className="md:flex-[2]">
            <h1 className="font-semibold text-gray-700 text-xl">
              {productSingle.title}
            </h1>
            <p className="font-medium text-base my-5">
              {productSingle.description}
            </p>
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
// export const getStaticProps = async ({ params }) => {
//   const url = `https://fakestoreapi.com/products/${params}`;
//   console.log(params);
//   console.log(url);
//   const data = 0;
//   //   const { data } = await axios.get(url);
//   return {
//     props: {
//       productSingle: data,
//     },
//     // revalidate: 30,
//   };
// };
export default productsDetails;
