import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-light font-mono">
        Welcome to our tweet app
      </h1>
      <NavLink to="/tweets" className="mt-4">
        <button className="text-2xl font-light font-mono">Just Tweet</button>
      </NavLink>
    </div>
  );
};
