import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import ProductDelete from "./ProductDelete";
import { RotatingLines } from "react-loader-spinner";
// import { toast } from "react-toastify";

export const CountUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  const getUsers = async () => {
    try {
      setLoading(true);
      //   console.log(`${process.env.BACKEND_URI}/User`);
      const response = await fetch(`http://localhost:4000/users`);
      const data = await response.json();
      const lengt = data.length;
      this.setState(lengt);
      console.log(data);
      setUser(data);

      //   console.log(first)

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
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
          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 md:ml-64 min-h-screen">
            <h3 class="text-gray-700 text-3xl ml-6 mt-4 mb-4 font-medium">
              {this.state.lengt}
            </h3>
          </section>
        </div>
      )}
    </>
  );
};
