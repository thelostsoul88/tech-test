import { Link } from "react-router-dom";
import { TweetsCard } from "../components/TweetsCard/TweetsCard";
import { useGetUsersQuery } from "../redux/usersApi";
import { BsArrowLeft } from "react-icons/all";

export const Tweets = () => {
  const { data = [] } = useGetUsersQuery();
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
    </>
  );
};
