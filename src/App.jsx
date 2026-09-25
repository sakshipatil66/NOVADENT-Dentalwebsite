import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Treatments from "./pages/Treatments";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}