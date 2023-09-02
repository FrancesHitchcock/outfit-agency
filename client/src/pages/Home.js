import { useState } from "react";

export default function Home({ handleAddFormSubmit }) {
  const [addFormData, setAddFormData] = useState({
    itemName: "",
    ownerName: "",
    colours: [],
    cost: 0,
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAddFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === "colours" ? value.split(", ") : value,
      };
    });
  }

  return (
    <main>
      <div className="home-page main-container">
        <h2>About Outfits Agency</h2>
        <p className="home-p">
          This website was built to consolidate the MERN skills learnt during
          the last part of the Tech Educators Full Stack Bootcamp. The aim was
          not to create a brilliant UX/UI app, but to make a React app using
          MongoDB, Express and Node.js to GET, POST, PUT and DELETE items, and
          to have the list of items re-render immediately the database is
          updated using any of the above methods. The site should also have a
          select box with a filter function so the user can choose to display a
          selection of the products.
        </p>
        <p className="home-p">
          The subject of the website is an outfit agency, where you can hire an
          outfit by selecting selecting it the outfits page and clicking on the
          hire button, which deletes it from the database. On the admin page you
          can choose to edit or permanently delete an item. On the home page you
          you can complete a form to add an item to the database.
        </p>
        <p className="home-p">
          The select box on the outfits page renders dynamically according to
          the items in the database.
        </p>
        <p className="home-p">
          Go ahead and add an item to the database using the form below!
        </p>
        <form
          className="form add-form"
          onSubmit={(e) => {
            handleAddFormSubmit(e, addFormData);
            setAddFormData({
              itemName: "",
              ownerName: "",
              colours: [],
              cost: 0,
              description: "",
            });
          }}
        >
          <label>
            Outfit:{" "}
            <input
              type="text"
              name="itemName"
              value={addFormData.itemName}
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Owner:{" "}
            <input
              type="text"
              name="ownerName"
              value={addFormData.ownerName}
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Colours:{" "}
            <input
              type="text"
              name="colours"
              value={addFormData.colours.join(", ")}
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Cost in pounds:{" "}
            <input
              type="number"
              name="cost"
              value={addFormData.cost}
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Description:{" "}
            <textarea
              name="description"
              value={addFormData.description}
              required
              onChange={handleChange}
            />
          </label>
          <button className="user-submit-btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </main>
  );
}
