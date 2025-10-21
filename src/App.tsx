// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./styles/style.css";
// import "./styles/mediaqueries.css";
// import { useCursor } from "./hooks/useCursor";
// import { useAnimations } from "./hooks/useAnimations";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Works from "./components/Works";
// import Testimonials from "./components/Testimonials";
// import Team from "./components/Team";
// import Footer from "./components/Footer";
// import VideoSection from "./components/VideoSection";
// import DomainNav from "./pages/DomainNav"; // ⬅️ new page import
// import HostingNav from "./pages/HostingNav";
// import Onboarding from "./pages/Onboarding";
// import Services from "./pages/Services";
// import CloudNav from "./pages/CloudNav";
// import Contact from "./pages/Contact";
// import SharedHosting from "./pages/SharedHosting";
// import LinuxShared from "./pages/LinuxShared";
// import WindowsShared from "./pages/WindowsShared";
// import WordpressShared from "./pages/WordpressShared";

// const App: React.FC = () => {
//   useCursor();
//   useAnimations();

//   return (
//     <Router>
//       <div className="background"></div>
//       <div id="cursor"></div>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <Hero />
//               <About />
//               <Works />
//               <VideoSection />
//               <Testimonials />
//               <Team />
//               <Footer />
//             </>
//           }
//         />
//         <Route path="/domains" element={<DomainNav />} /> {/* ⬅️ new route */}
//          <Route path="/hosting" element={<HostingNav />} />  {/* ⬅️ New route */}
//          <Route path="/onboarding" element={<Onboarding />} />
//          <Route path="/services" element={<Services />} />
//          <Route path="/cloud" element={<CloudNav />} />
//          <Route path="/contact" element={<Contact />} />
//          <Route path="/hosting/shared" element={<SharedHosting />} />
//          <Route path="/hosting/linux-shared" element={<LinuxShared />} />
//          <Route path="/hosting/windows-shared" element={<WindowsShared />} />
//          <Route path="/hosting/wordpress-shared" element={<WordpressShared />} />

         

//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/mediaqueries.css";

// Hooks
import { useCursor } from "./hooks/useCursor";
import { useAnimations } from "./hooks/useAnimations";
import { useLenis } from "./hooks/useLenis"; // ✅ NEW HOOK

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";

// Pages
import DomainNav from "./pages/DomainNav";
import HostingNav from "./pages/HostingNav";
import Onboarding from "./pages/Onboarding";
import Services from "./pages/Services";
import CloudNav from "./pages/CloudNav";
import Contact from "./pages/Contact";
import SharedHosting from "./pages/SharedHosting";
import LinuxShared from "./pages/LinuxShared";
import WindowsShared from "./pages/WindowsShared";
import WordpressShared from "./pages/WordpressShared";
import CheckDomain from "./pages/CheckDomain";
import DomainReg from "./pages/DomainReg";
import ResellerHosting from "./pages/ResellerHosting";
import LinuxReseller from "./pages/LinuxReseller";
import WindowsReseller from "./pages/WindowsReseller";
import ProfCloud from "./pages/ProfCloud";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App: React.FC = () => {
  // 🌀 Custom hooks
  useCursor();       // Your custom cursor effect
  useLenis();        // ✅ Enables smooth scrolling globally
  useAnimations();   // ✅ GSAP scroll-triggered animations

  // 🔄 Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <Router>
      <div className="background"></div>
      <div id="cursor"></div>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Works />
              <VideoSection />
              <Testimonials />
              <Team />
              <Footer />
            </>
          }
        />

        {/* Domain & Hosting Routes */}
        <Route path="/domains" element={<DomainNav />} />
        <Route path="/hosting" element={<HostingNav />} />

        {/* Other Routes */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cloud" element={<CloudNav />} />
        <Route path="/contact" element={<Contact />} />

        {/* Shared Hosting Subroutes */}
        <Route path="/hosting/shared" element={<SharedHosting />} />
        <Route path="/hosting/linux-shared" element={<LinuxShared />} />
        <Route path="/hosting/windows-shared" element={<WindowsShared />} />
        <Route path="/hosting/wordpress-shared" element={<WordpressShared />} />
        <Route path="/check-domain" element={<CheckDomain />} />
        <Route path="/domain-register" element={<DomainReg />} />
        <Route path="/hosting/reseller" element={<ResellerHosting />} />
        <Route path="/hosting/linux-reseller" element={<LinuxReseller />} />
        <Route path="/hosting/windows-reseller" element={<WindowsReseller />} />
        <Route path="/cloud/profcloud" element={<ProfCloud />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
};

export default App;