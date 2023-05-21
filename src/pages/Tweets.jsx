import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/all";
import { TweetsList } from "../components/TweetsList/TweetsList";

export const Tweets = () => {
  return (
    <>
      <Link to="/" className="ml-2 fixed z-10">
        <button className="mt-8 mb-6">
          <span className="font-light font-mono flex items-center gap-1">
            <BsArrowLeft />
            Back
          </span>
        </button>
      </Link>
      <TweetsList />
    </>
  );
};
