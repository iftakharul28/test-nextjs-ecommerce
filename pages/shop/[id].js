// import React from 'react';
// import axios from 'axios';
// import { Layout } from '../../components';
// import Image from 'next/image';

// const productsDetails = ({ productSingle }) => {
//   return (
//     <Layout title="product-single">
//       {productSingle && (
//         <div className="md:flex md:justify-between md:gap-6 lg:max-w-[950px] lg:m-auto">
//           <div
//             className="relative md:flex-[1]"
//             style={{ paddingTop: '25.25%' }}
//           >
//             <Image
//               src={productSingle.image}
//               alt={productSingle.title}
//               layout="fill"
//             />
//           </div>
//           <div className="md:flex-[2]">
//             <h1 className="font-semibold text-gray-700 text-xl">
//               {productSingle.title}
//             </h1>
//             <p className="font-medium text-base my-5">
//               {productSingle.description}
//             </p>
//             <span>category: {productSingle.category}</span>
//             <p>price: {productSingle.price}</p>

//             <div>
//               <p>rating {productSingle.rating.rate}</p>
//               <p>count {productSingle.rating.count}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };
// export const getStaticPaths = async () => {
//   const { data } = await axios.get('https://fakestoreapi.com/products');
//   return {
//     paths: data.map((itm) => ({
//       params: { id: itm.id.toString() },
//     })),
//     fallback: false,
//   };
// };
// export const getStaticProps = async ({ params }) => {
//   const { data } = await axios.get(
//     `https://fakestoreapi.com/products/${params.id}`
//   );
//   return {
//     props: {
//       productSingle: data,
//     },
//     revalidate: 30,
//   };
// };

// export default productsDetails;
