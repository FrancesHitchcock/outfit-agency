import AdminOutfit from "../components/AdminOutfit";

export default function Admin({
  allOutfits,
  handleDeleteOutfit,
  handleEditFormSubmit,
  outfitsExist,
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
        {outfitsExist ? (
          <>
            <h2>Use this page to edit or delete items</h2>
            <div className="admin-outfits-container">{adminOutfitsMarkup}</div>
          </>
        ) : (
          <>
            <h2>There are no outfits in the database.</h2>
          </>
        )}
      </div>
    </main>
  );
}
