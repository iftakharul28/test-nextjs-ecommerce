import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import Image from 'next/image';
import { Minus, Plus } from '../../components/Icos';
import useCart from '../../store/store';

const productsDetails = ({ data }) => {
  const [productSingle, setProductSingle] = useState('');

  const totalqty = useCart((state) => state.totalqty);
  const addTocart = useCart((state) => state.addTocart);
  const removeTocart = useCart((state) => state.removeTocart);
  const updatecart = useCart((state) => state.updatecart);
  const mycart = useCart((state) => state.cartContent);
  const addProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (product != -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };
  const removeProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (product != -1) {
      mycart[product].quantity--;
      updatecart({ params, mycart });
    } else {
      removeTocart(params);
    }
  };
  const router = useRouter();
  const key = router.query.product_id;
  console.log(key);

  //   const searchData = async () => {
  //     const url = `${process.env.NEXT_PUBLIC_SINGLE_PAGE}/${key}`;
  //     try {
  //       const { data } = await axios.get(url);
  //       if (data) {
  //         setProductSingle(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       if (error.status != 200) {
  //         alert('something wents wrong');
  //       }
  //     }
  //   };
  //   useEffect(() => {
  //     if (key) {
  //       searchData();
  //     }
  //   }, [key]);

  useEffect(() => {
    if (data) {
      setProductSingle(data);
    }
  }, [data]);
  const addItem = () => {
    addProduct({
      id: productSingle.id,
      name: productSingle.title,
      price: productSingle.price,
      quantity: 1,
    });
  };
  const removeItem = () => {
    removeProduct({
      id: productSingle.id,
      name: productSingle.title,
      price: productSingle.price,
      quantity: -1,
    });
  };
  return (
    <Layout title="product-single">
      {productSingle && (
        <div className="md:flex md:justify-between md:gap-6 lg:max-w-[950px] lg:m-auto">
          <div className="relative md:flex-[1] pt-[25.25%]">
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
            <div className="flex items-center md:gap-5 lg:gap-10">
              <div>
                <span>category: {productSingle.category}</span>
                <p>price: {productSingle.price}</p>
                <p>rating {productSingle.rating.rate}</p>
              </div>
              <div className="flex items-center gap-2 p-1 h-max w-max cursor-pointer border-solid border border-stone-900">
                <div onClick={addItem}>
                  <Plus />
                </div>
                <div>{totalqty}</div>

                <div onClick={removeItem}>
                  <Minus />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
productsDetails.getInitialProps = async ({ query }) => {
  const page = query.product_id || 1;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SINGLE_PAGE}/${page}`
  );
  return {
    data,
    fallback: true,
  };
};
export default productsDetails;
