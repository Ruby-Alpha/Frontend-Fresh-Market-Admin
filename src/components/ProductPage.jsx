import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import ProductDelete from "./ProductDelete";
import { RotatingLines } from "react-loader-spinner";
// import { toast } from "react-toastify";

export const ProductPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  const getProducts = async () => {
    try {
      setLoading(true);
      //   console.log(`${process.env.BACKEND_URI}/product`);
      const response = await fetch(`http://localhost:4000/api/product`);
      const data = await response.json();
      console.log(data);
      setProducts(data);

      //   console.log(first)

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="flex justify-center items-center h-screen">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
              {/* Start coding here  */}
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  {/* <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                        </div>
                    </form>
                </div> */}
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link to={"/product/add"}>
                      {" "}
                      <button
                        type="button"
                        class="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Link to={"/product/add"}>
                      {" "}
                      <button
                        type="button"
                        class="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Add product
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th class="px-4 py-3">Product name</th>
                        <th class="px-4 py-3">Category</th>
                        <th class="px-4 py-3">Qty in stock</th>
                        <th class="px-4 py-3">Description</th>
                        <th class="px-4 py-3">Price</th>
                        <th class="px-4 py-3">Image</th>
                        <th class="px-4 py-3">Edit</th>
                        <th class="px-4 py-3">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products !== null &&
                        products.map((product) => {
                          return (
                            <tr class="border-b text-black dark:border-gray-700">
                              <td class="px-4 py-3">{product.name}</td>
                              <td class="px-4 py-3">{product.category}</td>
                              <td class="px-4 py-3">{product.qty}</td>
                              <td class="px-4 py-3">{product.description}</td>
                              <td class="px-4 py-3">{product.price}</td>
                              <td class="px-4 py-3">
                                {product.image ? (
                                  <img
                                    src={product.image}
                                    alt={`Image of ${product.name}`}
                                    className="h-10 w-10"
                                  />
                                ) : (
                                  "No Image"
                                )}
                              </td>
                              <td class="px-4 py-3">
                                <Link to={`/product/${product._id}/edit`}>
                                  <MdEdit className="text-black text-xl" />
                                </Link>
                              </td>
                              <td class="px-4 py-3">
                                <ProductDelete productId={product._id} />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
