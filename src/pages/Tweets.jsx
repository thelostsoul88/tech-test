import { Link } from "react-router-dom";
import { TweetsCard } from "../components/TweetsCard/TweetsCard";
import { useGetUsersQuery } from "../redux/usersApi";
import { BsArrowLeft } from "react-icons/all";
import { useState } from "react";

const LIMIT = 3;
const TOTAL_CARDS = 15;

export const Tweets = () => {
  const [limit, setLimit] = useState(LIMIT);
  const { data = [] } = useGetUsersQuery(limit);

  const LoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  return (
    <>
      <Link to="/" className="ml-10 fixed z-10">
        <button className="mt-4 mb-6">
          <span className="font-light font-mono flex items-center gap-1">
            <BsArrowLeft />
            Home
          </span>
        </button>
      </Link>
      <div className="mb-10">
        {data && (
          <ul className="flex justify-center flex-wrap gap-12 mt-24">
            {data.map((users) => (
              <TweetsCard key={users.id} users={users} />
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center mb-4">
        {data.length >= 15 ? (
          <h2>Its all tweets</h2>
        ) : (
          <button className="" onClick={() => LoadMore()}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};
