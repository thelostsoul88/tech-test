import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loading}>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
    </div>
  );
};
