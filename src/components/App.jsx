import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
