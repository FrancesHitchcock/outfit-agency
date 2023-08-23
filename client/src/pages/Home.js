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
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          elit eget orci elementum imperdiet. Aenean laoreet arcu ac
          sollicitudin fringilla. Phasellus vitae consectetur sem, in
          scelerisque eros. Quisque mollis non nisi maximus blandit. In ut justo
          leo. Vivamus tempor ante purus, vitae convallis leo luctus a. Sed
          mollis hendrerit maximus. Fusce vestibulum felis non eros commodo,
          pellentesque viverra nulla condimentum. Sed ac diam malesuada,
          pellentesque nunc eu, imperdiet arcu. Nunc tempor lectus a diam
          elementum, at tristique leo egestas. Ut dictum sapien vel hendrerit
          cursus. Ut at leo sodales, feugiat odio at, faucibus orci. Ut quis
          risus quis massa dignissim commodo. Suspendisse laoreet, turpis eget
          imperdiet posuere, risus nibh egestas enim, in pharetra ipsum velit id
          magna. Fusce vulputate cursus sem sit amet facilisis. Vivamus ac orci
          ut magna pulvinar laoreet nec ut tortor.
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
