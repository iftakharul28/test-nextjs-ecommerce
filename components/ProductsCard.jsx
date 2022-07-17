import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductsCard = ({ product }) => {
  const router = useRouter();
  return (
    <div className=" py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">
        All Products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {product?.map((item) => (
          <div
            key={item.id}
            className="group relative"
            onClick={() => router.push(`/shop?product_id=${item.id}`)}
          >
            <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none relative md:pt-[55.25%] lg:pt-[85.25%]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                className="w-full absolute inset-0 h-full object-top object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {item.title.length > 80
                    ? `${item.title.slice(0, 80)}...`
                    : item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {product?.map((item) => (
          <Link key={item.id} href={`/shop/${item.id}`}>
            <a className="group relative">
              <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none relative md:pt-[55.25%] lg:pt-[85.25%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  className="w-full absolute inset-0 h-full object-top object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {item.title.length > 80
                      ? `${item.title.slice(0, 80)}...`
                      : item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${item.price}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default ProductsCard;
