import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage/"));
const SearchDataPage = lazy(() => import("./pages/SearchDataPage"));
const SingleCardPage = lazy(() => import("./pages/SingleCardPage"));

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
