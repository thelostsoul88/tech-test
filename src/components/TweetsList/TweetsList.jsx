import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../redux/usersApi";
import { TweetsCard } from "../TweetsCard/TweetsCard";
import { selectFollowers } from "../../redux/selectors";
import "../../utils/LoadMoreButton/LoadMoreBtn.css";

const LIMIT = 3;
const TOTAL_CARDS = 15;

export const TweetsList = () => {
  const [limit, setLimit] = useState(LIMIT);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const { data: users = [], isLoading } = useGetUsersQuery(limit);
  const followers = useSelector(selectFollowers);

  useEffect(() => {
    !isLoading && setFilteredFollowers(users);
  }, [isLoading, users]);

  const filterUsers = (status) => {
    let followersFiltered = [];
    if (status === "all") {
      setFilteredFollowers(users);
      return;
    } else if (status === "follow") {
      users.forEach((user) => {
        !followers.includes(user.id) && followersFiltered.push(user);
      });
    } else if (status === "following") {
      users.forEach((user) => {
        followers.includes(user.id) && followersFiltered.push(user);
      });
    }
    setFilteredFollowers(followersFiltered);
  };

  const LoadMore = () => {
    setLimit((prev) => prev + 3);
  };
  return (
    <>
      <div className="flex justify-end">
        <div className="">
          <div className="wrapper">
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="option1"
                onClick={() => filterUsers("all")}
              />
              <div className="btn">
                <span className="span">All</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="option2"
                onClick={() => filterUsers("follow")}
              />
              <div className="btn">
                <span className="span">Follow</span>
              </div>
            </div>
            <div className="option">
              <input
                className="input"
                type="radio"
                name="btn"
                value="option3"
                onClick={() => filterUsers("following")}
              />
              <div className="btn">
                <span className="span">Followed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <ul className="flex justify-center flex-wrap gap-12 mt-10">
          {filteredFollowers.map((users) => (
            <TweetsCard key={users.id} users={users} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mb-6 font-mono font-extralight text-indigo-500">
        {users.length >= TOTAL_CARDS ? (
          <h2 className="text-xl">Its all tweets</h2>
        ) : (
          <button className="buttonMore" onClick={() => LoadMore()}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};
