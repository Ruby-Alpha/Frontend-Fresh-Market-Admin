import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function UserLogin() {
    const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const userCredentials = { email: email, password: password };

    try {
      const response = await fetch(`http://localhost:5000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();
      console.log(data);
     
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="py-26 bg-white">
    <div class="container px-4 mx-auto">
      <div class="max-w-lg mx-auto">
        <div class="text-center mb-8">
          <a class="inline-block mx-auto mb-6" href="#">
            <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>
          </a>
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Log in</h2>
            </div>
        <form onSubmit={onSubmitHandler} action="">
          <div class="mb-6">
            <label class="block mb-2 font-bolder" for="">Email</label>
            <input class="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-green-900 rounded" type="email" placeholder=""
             onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class="mb-6">
            <label class="block mb-2 font-bolder" for="">Password</label>
            <input class="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-green-900 rounded" type="password" placeholder=""
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label for="">
                <input type="checkbox"/>
                <span class="ml-1 font-bold">Remember me</span>
              </label>
            </div>
            <div class="w-full lg:w-auto px-4"><a class="inline-block font-bold hover:underline" href="#">Forgot your password?</a></div>
          </div>
          <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-green-800 hover:bg-yellow-900 border-3 border-indigo-900 shadow rounded transition duration-200">Log in</button>
          <p class="text-center font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="/register">Sign up</a></p>
        </form>
      </div>
    </div>
    </section>
  )
}
