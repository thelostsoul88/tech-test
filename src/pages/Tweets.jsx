import { Link } from "react-router-dom";
import { TweetsCard } from "../components/TweetsCard/TweetsCard";

export const Tweets = () => {
  return (
    <>
      <Link to="/">
        <button className="ml-10 font-light font-mono">Home</button>
      </Link>
      <div>
        <TweetsCard />
      </div>
    </>
  );
};
