import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

const HomePage = lazy(() => import("./components/HomePage"));
const SearchDataPage = lazy(() => import("./components/SearchDataPage"));
const SingleCardPage = lazy(() => import("./components/SingleCardPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<SearchDataPage />} />
          <Route path="/recipes/:id" element={<SingleCardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
