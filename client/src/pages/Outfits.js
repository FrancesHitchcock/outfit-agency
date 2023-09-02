import { Link } from "react-router-dom";
import { useState } from "react";

export default function Outfits({
  allOutfits,
  filterTerm,
  handleFilterChange,
  outfitsExist,
}) {
  const filteredOutfits = filterTerm
    ? allOutfits.filter((outfit) => outfit.ownerName === filterTerm)
    : allOutfits;

  const filteredOutfitsMarkup = filteredOutfits.map((outfit) => {
    return (
      <Link
        className="link-to-outfit"
        to={`/outfit/${outfit._id}`}
        key={outfit._id}
      >
        <div className="outfit-card">
          <h3>Outfit: {outfit.itemName}</h3>
          <h3>Owned by: {outfit.ownerName}</h3>
        </div>
      </Link>
    );
  });

  const allOwners = [];

  allOutfits.forEach((outfit) => {
    if (!allOwners.includes(outfit.ownerName)) {
      allOwners.push(outfit.ownerName);
    }
  });

  const filterOptionsMarkup = allOwners.map((owner) => {
    return (
      <option key={owner} value={owner}>
        {owner}
      </option>
    );
  });

  return (
    <main>
      <div className="outfits-page main-container">
        {outfitsExist ? (
          <>
            <h2>Choose Your Outfit</h2>
            <h3 className="outfit-page-h3">
              Click on an outfit to find out more about it.
            </h3>
            <h3 className="outfit-page-h3">
              Use the filter function below to browse outfits by owner.
            </h3>
            <select
              className="owner-filter-select"
              onChange={handleFilterChange}
              value={filterTerm}
            >
              <option value="">All</option>
              {filterOptionsMarkup}
            </select>
            <div className="outfits-container">{filteredOutfitsMarkup}</div>
          </>
        ) : (
          <>
            <h2>There are currently no outfits to hire.</h2>
          </>
        )}
      </div>
    </main>
  );
}

// {outfitsExist ? (

// ) : (
//   <div>
//     <h2>There are currently on outfits to hire.</h2>
//   </div>
// )}
