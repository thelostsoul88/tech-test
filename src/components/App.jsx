import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./Layout/Layout";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader/Loader";

const Home = lazy(() =>
  import("../pages/Home").then((res) => ({
    default: res.Home,
  }))
);
const Tweets = lazy(() =>
  import("../pages/Tweets").then((res) => ({
    default: res.Tweets,
  }))
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
