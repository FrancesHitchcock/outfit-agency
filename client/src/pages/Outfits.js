export default function Outfits({
  allOutfits,
  filterTerm,
  handleFilterChange,
}) {
  const filteredOutfits = filterTerm
    ? allOutfits.filter((outfit) => outfit.ownerName === filterTerm)
    : allOutfits;

  const filteredOutfitsMarkup = filteredOutfits.map((outfit) => {
    return (
      <div className="outfit-card" key={outfit._id}>
        <h3>Outfit: {outfit.itemName}</h3>
      </div>
    );
  });

  return (
    <main>
      <div className="outfits-page main-container">
        <h2>Choose Your Outfit</h2>
        <h3 className="outfit-page-h3">
          Click on an outfit to find out more about it.
        </h3>
        <h3 className="outfit-page-h3">
          Use the filter function below to browse outfits by owner.
        </h3>
        <select className="owner-filter-select" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Sally">Sally</option>
          <option value="Harry">Harry</option>
        </select>
        <div className="outfits-container">{filteredOutfitsMarkup}</div>
      </div>
    </main>
  );
}
