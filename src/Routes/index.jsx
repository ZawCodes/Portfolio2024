import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));

const index = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default index;
