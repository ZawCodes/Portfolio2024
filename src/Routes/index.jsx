import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Header from "pages/Header";
import Footer from "pages/Footer";

// Lazy-loaded components
const Background = lazy(() => import("pages/Background"));
const Projects = lazy(() => import("pages/Projects"));
const Blogs = lazy(() => import("pages/Blogs"));
const Contact = lazy(() => import("pages/Contact"));
const LearningFlowAi = lazy(() => import("pages/ProjectDetail/LearningFlowAi"));
const Loansestate = lazy(() => import("pages/ProjectDetail/Loansestate"));
const Hunnworld = lazy(() => import("pages/ProjectDetail/Hunnworld"));
const Lighthouse = lazy(() => import("pages/ProjectDetail/Lighthouse"));
const YsqInternational = lazy(() =>
  import("pages/ProjectDetail/YsqInternational")
);
const Stemwerkz = lazy(() => import("pages/ProjectDetail/Stemwerkz"));

const Index = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects">
            <Route path="" element={<Projects />} />
            <Route path="learning-flow-ai" element={<LearningFlowAi />} />
            <Route path="loansestate" element={<Loansestate />} />
            <Route path="hunnworld" element={<Hunnworld />} />
            <Route path="lighthouse" element={<Lighthouse />} />
            <Route path="ysq-international" element={<YsqInternational />} />
            <Route path="stemwerkz" element={<Stemwerkz />} />
          </Route>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
