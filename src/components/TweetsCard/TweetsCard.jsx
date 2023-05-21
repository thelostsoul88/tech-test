import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePutUsersMutation } from "../../redux/usersApi";
import { addFollower, removeFollower } from "../../redux/slice";
import { selectFollowers } from "../../redux/selectors";
import css from "./TweetsCard.module.css";

export const TweetsCard = ({
  users: { id, user, tweets, followers, avatar },
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [putUsers] = usePutUsersMutation();
  const dispatch = useDispatch();
  const tweetsFollowers = useSelector(selectFollowers);

  useEffect(() => {
    tweetsFollowers.includes(id) ? setIsFollowing(true) : setIsFollowing(false);
  }, [id, tweetsFollowers]);

  const handleFollow = async (id) => {
    const followed = () => ({
      followers: followers + 1,
    });
    const body = followed();
    await putUsers({ body, id });
    dispatch(addFollower(id));
    setIsFollowing(true);
  };

  const handleUnFollow = async (id) => {
    const unFollowed = () => ({
      followers: followers - 1,
    });
    const body = unFollowed();
    await putUsers({ body, id });
    dispatch(removeFollower(id));
    setIsFollowing(false);
  };

  return (
    <li className={css.tweetCard} key={id}>
      <div className={css.tweetBgLogo} />
      <div className={css.tweetBgImg} />
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
        <button className={css.followingBtn} onClick={() => handleUnFollow(id)}>
          Following
        </button>
      )}
    </li>
  );
};
