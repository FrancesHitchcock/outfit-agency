import { useState } from "react";

export default function AdminOutfit({
  outfit,
  handleDeleteOutfit,
  handleEditFormSubmit,
}) {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    itemName: outfit.itemName,
    ownerName: outfit.ownerName,
    colours: outfit.colours,
    cost: outfit.cost,
    description: outfit.description,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === "colours" ? value.split(", ") : value,
      };
    });
  }

  function showForm() {
    setFormVisible(true);
  }

  function hideForm() {
    setFormVisible(false);
  }

  return (
    <div className="admin-card" key={outfit._id}>
      <div className="admin-outfit-details">
        <button
          className="admin-button"
          onClick={() => handleDeleteOutfit(outfit._id)}
        >
          delete
        </button>
        <button className="admin-button" onClick={showForm}>
          edit
        </button>
        <h3 className="admin-outfit-h3">Outfit: {outfit.itemName}</h3>
        <h3 className="admin-outfit-h3">Owner: {outfit.ownerName}</h3>
        <h3 className="admin-outfit-h3">
          Colours: {outfit.colours.join(", ")}
        </h3>
        <h3 className="admin-outfit-h3">Cost: £{outfit.cost}</h3>
        <p>Description: {outfit.description}</p>
      </div>
      {formVisible && (
        <div className="form-container edit-form-container">
          <button className="admin-form-close-btn" onClick={hideForm}>
            close
          </button>
          <form
            className="form edit-form"
            onSubmit={(event) => {
              handleEditFormSubmit(event, outfit._id, formData);
              hideForm();
            }}
          >
            <label>
              Outfit:{" "}
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </label>
            <label>
              Owner:{" "}
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
              />
            </label>
            <label>
              Colours:{" "}
              <input
                type="text"
                name="colours"
                value={formData.colours.join(", ")}
                onChange={handleChange}
              />
            </label>
            <label>
              Cost in pounds:{" "}
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:{" "}
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <button className="admin-submit-btn" type="submit">
              save changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
