import { Link } from "react-router-dom";
import { HomeBtn } from "../utils/HomeButton/HomeBtn";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-light font-mono">
        Welcome to our tweet app
      </h1>
      <Link to="/tweets" className="mt-7">
        <HomeBtn />
      </Link>
    </div>
  );
};
