import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./TweetsCard.module.css";
import { usePutUsersMutation } from "../../redux/usersApi";
import { addFollower, removeFollower } from "../../redux/slice";

export const TweetsCard = ({ users }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [putUsers] = usePutUsersMutation();
  const dispatch = useDispatch();
  const { id, user, tweets, followers, avatar } = users;

  const handleFollow = async (id) => {
    const followed = (users) => ({
      ...users,
      followers: users.followers + 1,
    });
    const body = followed(users);
    await putUsers({ body, id });
    dispatch(addFollower(id));
    setIsFollowing(true);
  };

  const handleUnFollow = async (id) => {
    const unFollowed = (users) => ({
      ...users,
      followers: users.followers - 1,
    });
    const body = unFollowed(users);
    await putUsers({ body, id });
    dispatch(removeFollower(id));
    setIsFollowing(false);
  };

  return (
    users && (
      <li className={css.tweetCard} key={id}>
        <div className={css.tweetBgImg}>
          <div className={css.tweetBgLogo}></div>
        </div>
        <div className={css.BothObj}>
          <div className={css.tweetRounded}>
            <img className={css.tweetImg} src={avatar} alt={user}></img>
          </div>
          <div className={css.tweetLine}></div>
        </div>
        <p className={css.tweetsTxt}>{tweets} Tweets</p>
        <p className={css.followersTxt}>
          {String(followers).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Followers
        </p>
        {!isFollowing ? (
          <button className={css.followBtn} onClick={() => handleFollow(id)}>
            Follow
          </button>
        ) : (
          <button
            className={css.followingBtn}
            onClick={() => handleUnFollow(id)}
          >
            Following
          </button>
        )}
      </li>
    )
  );
};
