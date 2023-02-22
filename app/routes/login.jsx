import { useState } from "react";

const Login = () => {


  return (
    <main className="max-w-3xl m-auto rounded-xl my-32 bg-slate-200 shadow p-10">
      <h1 className="text-center text-4xl font-bold">Login</h1>
      <form className="mt-2 flex flex-col gap-2 items-center ">
        <div className="my-5">
          <label className="uppercase block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
            type="email"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="password"
            type="password"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className="bg-sky-700 w-1/2 py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
    </main>
  );
};

export default Login;
