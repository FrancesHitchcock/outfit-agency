import AdminOutfit from "../components/AdminOutfit";

export default function Admin({
  allOutfits,
  handleDeleteOutfit,
  handleEditFormSubmit,
}) {
  const adminOutfitsMarkup = allOutfits.map((outfit) => {
    return (
      <AdminOutfit
        key={outfit._id}
        outfit={outfit}
        handleDeleteOutfit={handleDeleteOutfit}
        handleEditFormSubmit={handleEditFormSubmit}
      />
    );
  });

  return (
    <main>
      <div className="admin-page main-container">
        <h2>This is the admin page</h2>
        <div className="admin-outfits-container">{adminOutfitsMarkup}</div>
      </div>
    </main>
  );
}
