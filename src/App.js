import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Benefits from "./views/Benefits";
import Services from "./views/Services";
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
          <Route path="/services" element={<Services />} />
          <Route path="/benefits" element={<Benefits variant="light" />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/casestudies" element={<CaseStudiesPage />} />
          <Route
            path="*"
            element={
              <>
                <Home />
                <Services />
                <Benefits />
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
