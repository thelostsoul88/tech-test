import css from "./TweetsCard.module.css";
export const TweetsCard = () => {
  return (
    <div className={css.tweetContainer}>
      <ul className={css.tweetList}>
        <li className={css.tweetCard}>
          <div className={css.tweetBgImg}>
            <div className={css.tweetBgLogo}></div>
          </div>
          <div className={css.BothObj}>
            <div className={css.tweetImg}></div>
            <div className={css.tweetLine}></div>
          </div>

          <p className={css.tweetText}>Tweets: </p>
          <p className={css.tweetText}>Followers: </p>
          <button className={css.tweetBtn}>
            <span className={css.tweetBtnText}>Follow</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
