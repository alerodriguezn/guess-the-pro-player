import { NavLink } from "react-router-dom";

const Login = () => {


  return (
      <main className="max-w-3xl m-auto rounded-xl my-32 border-2 border-slate-600 shadow p-10">
      <h1 className="text-center text-2xl font-bold text-white">Login</h1>
      <form className="mt-2 flex flex-col gap-2 items-center ">
        <div className="my-5">
          <label className="uppercase block text-sm font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-slate-800 text-white"
            id="email"
            type="email"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase block text-sm font-bold text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-slate-800 text-white"
            id="password"
            type="password"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className="bg-lime-700 w-48 md:w-1/2 py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-800 transition-colors"
        />
      </form>

      <nav className="flex justify-center gap-4 underline text-indigo-700 mt-4">
        <NavLink className="text-center">¿Has olvidado la contraseña?</NavLink>
        <NavLink className="text-center">¿No tienes cuenta? Registrate</NavLink>

      </nav>
    </main>
  );
};

export default Login;
