import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




export default function RegisterPage() {
    const [firstname, setFirstName] = useState(null);
    const [Lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();


    const onSubmitHandler = async (e) => {
      e.preventDefault();
  
      const userCredentials = { firstName: firstname, lastName:Lastname, email: email, password: password };
      console.log({userCredentials});
  
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
    <div  class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">

            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
            </h2>

            <form onSubmit={onSubmitHandler} class="space-y-6" method="POST">

                <div>
                    <label for="new-password" class="block text-sm font-medium text-gray-700">Firstname</label>
                    <div class="mt-1">
                        <input name="username" type="firstname" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Lastname </label>
                    <div class="mt-1">
                        <input name="email" type="Lastname" autocomplete="Lastname" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input name="password" type="Email" autocomplete="Email" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="mt-1">
                        <input name="confirm_password" type="password" autocomplete="confirm-password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button onSubmit={onSubmitHandler} type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-green-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        Account
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
