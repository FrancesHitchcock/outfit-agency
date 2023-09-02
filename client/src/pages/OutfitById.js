import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OutfitById({ handleDeleteOutfit }) {
  const [targetOutfit, setTargetOutfit] = useState();
  const [outfitVisible, setOutfitVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const paramsId = useParams().id;

  async function getTargetOutfit() {
    const res = await axios.get(`http://localhost:8080/outfits/${paramsId}`);
    setTargetOutfit(res.data[0]);
    setOutfitVisible(true);
  }

  useEffect(() => {
    getTargetOutfit();
  }, []);

  return (
    <main>
      <div className="outfit-by-id-page main-container">
        <h2>Outfit in detail</h2>

        {targetOutfit && outfitVisible && (
          <div className="outfit-by-id-container">
            <Link to="/outfits">
              <button className="back-button">back to outfits</button>
            </Link>
            <h3 className="outfit-by-id-h3">Outfit: {targetOutfit.itemName}</h3>
            <h3 className="outfit-by-id-h3">Owner: {targetOutfit.ownerName}</h3>
            <h3 className="outfit-by-id-h3">
              Colours: {targetOutfit.colours.join(", ")}
            </h3>
            <h3 className="outfit-by-id-h3">Cost: £{targetOutfit.cost}</h3>
            <p>Description: {targetOutfit.description}</p>
            <button
              className="hire-button"
              onClick={() => {
                handleDeleteOutfit(targetOutfit._id);
                setOutfitVisible(false);
                setConfirmationVisible(true);
              }}
            >
              hire outfit
            </button>
          </div>
        )}
        {confirmationVisible && (
          <div className="confirmation-container">
            <h3 className="confirmation-h3">
              Thank you for hiring the {targetOutfit.itemName} from{" "}
              {targetOutfit.ownerName}.
            </h3>
            <Link to="/outfits">
              <button
                className="back-button"
                onClick={() => {
                  setConfirmationVisible(false);
                  setTargetOutfit(null);
                }}
              >
                OK
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
