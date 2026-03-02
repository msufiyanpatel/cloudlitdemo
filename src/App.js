import { useEffect, Suspense, lazy } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import HomeServices from "./views/HomeServices";
import Benefits from "./views/Benefits";
import Locations from "./views/Locations";
import Roadmap from "./views/Roadmap";

const ChatForm = lazy(() => import("./views/ChatForm"));
const About = lazy(() => import("./views/About1"));
const ServicesCloud = lazy(() => import("./views/ServicesCloud"));
const ServicesDevOps = lazy(() => import("./views/ServicesDevOps"));
const ServicesProvision = lazy(() => import("./views/ServicesProvision"));
const ServicesMonitor = lazy(() => import("./views/ServicesMonitor"));
const ServicesOpenShift = lazy(() => import("./views/ServicesOpenShift"));
const CaseStudiesPage = lazy(() => import("./views/CaseStudiesPage"));
const CaseStudyFlightAlert = lazy(() => import("./views/CaseStudyFlightAlert"));
const CaseStudyMaximo = lazy(() => import("./views/CaseStudyMaximo"));
const CaseStudyAiWebCrawling = lazy(() => import("./views/CaseStudyAiWebCrawling"));
const PrivacyPolicy = lazy(() => import("./views/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./views/TermsOfService"));
const NotFound = lazy(() => import("./views/NotFound"));

const PageFallback = () => <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true" />;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main className="App__main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <HomeServices />
                <Benefits />
                <Locations />
                <Roadmap />
              </>
            }
          />
          <Route path="/contact" element={<ChatForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to="/services/cloud" replace />} />
          <Route path="/services/cloud" element={<ServicesCloud />} />
          <Route path="/services/devops" element={<ServicesDevOps />} />
          <Route path="/services/provision" element={<ServicesProvision />} />
          <Route path="/services/monitor" element={<ServicesMonitor />} />
          <Route path="/services/openshift" element={<ServicesOpenShift />} />
          <Route path="/benefits" element={<Benefits variant="light" />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/casestudies" element={<CaseStudiesPage />} />
          <Route path="/casestudies/flight-alert" element={<CaseStudyFlightAlert />} />
          <Route path="/casestudies/maximo-azure-openshift" element={<CaseStudyMaximo />} />
          <Route path="/casestudies/ai-web-crawling" element={<CaseStudyAiWebCrawling />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </div>
  );
}

export default App;
