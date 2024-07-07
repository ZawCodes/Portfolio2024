import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Footer from "pages/Footer";

// Lazy-loaded components
const Projects = lazy(() => import("pages/Projects"));
const LoanEstates = lazy(() => import("pages/Projects/Details/LoanEstates"));
const Hunnworld = lazy(() => import("pages/Projects/Details/Hunnworld"));
const YSQ = lazy(() => import("pages/Projects/Details/YSQ"));
const ParisTobacco = lazy(() => import("pages/Projects/Details/ParisTobacco"));
const Lighthouse = lazy(() => import("pages/Projects/Details/Lighthouse"));
const Classwerkz = lazy(() => import("pages/Projects/Details/Classwerkz"));
const Nodma = lazy(() => import("pages/Projects/Details/Nodma"));
const Stemwerkz = lazy(() => import("pages/Projects/Details/Stemwerkz"));

const Index = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="" element={<Navigate to="loansestate" replace />} />
            <Route path="loansestate" element={<LoanEstates />} />
            <Route path="hunnworld" element={<Hunnworld />} />
            <Route path="ysq" element={<YSQ />} />
            <Route path="paristobacco" element={<ParisTobacco />} />
            <Route path="lighthouse" element={<Lighthouse />} />
            <Route path="classwerkz" element={<Classwerkz />} />
            <Route path="nodma" element={<Nodma />} />
            <Route path="stemwerkz" element={<Stemwerkz />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
