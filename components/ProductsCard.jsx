import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProductsCard = ({ product }) => {
  return (
    <div className="grid grid-cals-1 gap-4 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {product?.map((item) => (
        <Link key={item.id} href={`/shop/${item.id}`}>
          <a>
            <div className="relative" style={{ paddingTop: '65.25%' }}>
              <Image src={item.image} alt={item.title} layout="fill" />
            </div>
            <div className=" flex flex-col">
              <div>
                <h2>
                  {item.title.length > 80
                    ? `${item.title.slice(0, 80)}...`
                    : item.title}
                </h2>
                <p>
                  {item.description.length > 150
                    ? `${item.description.slice(0, 150)}...`
                    : item.description}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <p className="font-medium">৳ {item.price * 90}</p>
                <p className="ml-20">{item.rating.rate}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCard;
