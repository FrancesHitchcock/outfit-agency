import axios from "axios";
import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";

import Admin from "./pages/Admin";

function App() {
  const [allOutfits, setAllOutfits] = useState([]);

  async function getAllOutfits() {
    try {
      const API = "http://localhost:8080/outfits";
      const resp = await axios.get(API);
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

  const allOutfitsMarkup = allOutfits.map((outfit) => {
    return (
      <div className="outfit-card" key={outfit._id}>
        <h3>Outfit: {outfit.itemName}</h3>
      </div>
    );
  });

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1>Outfit Agency</h1>
        </div>
      </header>
      <main className="main">
        <div className="home-page main-container">
          <h2>This is the home page</h2>
        </div>
        <div className="outfits-page main-container">
          <h2>This is the outfits page</h2>
          <div className="outfits-container">{allOutfitsMarkup}</div>
        </div>
        <div className="outfit-by-id-page main-container">
          <h2>This is the outfit by id page</h2>
        </div>
        <Admin
          allOutfits={allOutfits}
          handleDeleteOutfit={handleDeleteOutfit}
          handleEditFormSubmit={handleEditFormSubmit}
        />
        {/* <div className="admin-page main-container">
          <h2>This is the admin page</h2>
          <div className="admin-outfits-container">{adminOutfitsMarkup}</div>
        </div> */}
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
