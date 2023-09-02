import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Outfits from "./pages/Outfits";
import OutfitById from "./pages/OutfitById";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

// Render url: https://outfit-agency.onrender.com
// Local url: http://localhost:8080

function App() {
  const [allOutfits, setAllOutfits] = useState([]);
  const [outfitsExist, setOutfitsExist] = useState(false);

  const [filterTerm, setFilterTerm] = useState("");

  function handleFilterChange(e) {
    setFilterTerm(e.target.value);
  }

  async function getAllOutfits() {
    try {
      const URL = "https://outfit-agency.onrender.com/outfits";
      const resp = await axios.get(URL);
      if (resp.data.length > 0) {
        setAllOutfits(resp.data);
        setOutfitsExist(true);
      } else {
        setOutfitsExist(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOutfits();
  }, []);

  async function handleDeleteOutfit(id) {
    try {
      const URL = `https://outfit-agency.onrender.com/outfits/${id}`;
      await axios.delete(URL);
      getAllOutfits();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditFormSubmit(event, id, outfit) {
    event.preventDefault();
    try {
      const URL = `https://outfit-agency.onrender.com/outfits/${id}`;
      await axios.put(URL, outfit);
      getAllOutfits();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddFormSubmit(e, outfit) {
    try {
      e.preventDefault();
      const URL = "https://outfit-agency.onrender.com/outfits";
      await axios.post(URL, outfit);
      getAllOutfits();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddFormSubmit={handleAddFormSubmit} />}
          />
          <Route
            path="/outfits"
            element={
              <Outfits
                allOutfits={allOutfits}
                filterTerm={filterTerm}
                handleFilterChange={handleFilterChange}
                outfitsExist={outfitsExist}
              />
            }
          />
          <Route
            path="/outfit/:id"
            element={<OutfitById handleDeleteOutfit={handleDeleteOutfit} />}
          />
          <Route
            path="/admin"
            element={
              <Admin
                allOutfits={allOutfits}
                handleDeleteOutfit={handleDeleteOutfit}
                handleEditFormSubmit={handleEditFormSubmit}
                outfitsExist={outfitsExist}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
