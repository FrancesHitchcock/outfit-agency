import axios from "axios";
import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";

import Outfits from "./pages/Outfits";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

// Render url: https://outfit-agency.onrender.com
// Local url: http://localhost:8080

function App() {
  const [allOutfits, setAllOutfits] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  async function getAllOutfits() {
    try {
      const URL = "http://localhost:8080/outfits";
      const resp = await axios.get(URL);
      setAllOutfits(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOutfits();
  }, []);

  async function handleDeleteOutfit(id) {
    try {
      const URL = `http://localhost:8080/outfits/${id}`;
      await axios.delete(URL);
      getAllOutfits();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditFormSubmit(event, id, outfit) {
    event.preventDefault();
    try {
      const URL = `http://localhost:8080/outfits/${id}`;
      await axios.put(URL, outfit);
      getAllOutfits();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddFormSubmit(e, outfit) {
    e.preventDefault();
    const URL = "http://localhost:8080/outfits";
    await axios.post(URL, outfit);
    getAllOutfits();
  }

  function handleFilterChange(e) {
    setFilterTerm(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1>Outfit Agency</h1>
        </div>
      </header>
      <main className="main">
        <Home handleAddFormSubmit={handleAddFormSubmit} />
        <Outfits
          allOutfits={allOutfits}
          filterTerm={filterTerm}
          handleFilterChange={handleFilterChange}
        />
        <div className="outfit-by-id-page main-container">
          <h2>This is the outfit by id page</h2>
        </div>
        <Admin
          allOutfits={allOutfits}
          handleDeleteOutfit={handleDeleteOutfit}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      </main>
      <footer>
        <div className="footer-container">
          <h5>This is the footer</h5>
        </div>
      </footer>
    </div>
  );
}

export default App;
