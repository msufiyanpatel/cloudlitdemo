import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Benefits from "./views/Benefits";
import ServicesCloud from "./views/ServicesCloud";
import ServicesDevOps from "./views/ServicesDevOps";
import ServicesProvision from "./views/ServicesProvision";
import ServicesMonitor from "./views/ServicesMonitor";
import HomeServices from "./views/HomeServices";
import Locations from "./views/Locations";
import Roadmap from "./views/Roadmap";
import Home from "./views/Home";
import ChatForm from "./views/ChatForm";
import About from "./views/About1";
import CaseStudiesPage from "./views/CaseStudiesPage";
// import Router from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App__main">
        <Routes>
          <Route path="/contact" element={<ChatForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to="/services/cloud" replace />} />
          <Route path="/services/cloud" element={<ServicesCloud />} />
          <Route path="/services/devops" element={<ServicesDevOps />} />
          <Route path="/services/provision" element={<ServicesProvision />} />
          <Route path="/services/monitor" element={<ServicesMonitor />} />
          <Route path="/benefits" element={<Benefits variant="light" />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/casestudies" element={<CaseStudiesPage />} />
          <Route
            path="*"
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
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
