import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box sx={{ display: "flex" }}>
        <div className={css.loading}>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
          <div className={css.dot}></div>
        </div>
      </Box>
    </Backdrop>
  );
};
