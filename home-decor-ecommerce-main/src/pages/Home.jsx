import React from "react";

const categories = [
  { name: "Sofa Sets", image: "/images/sofaset.png" },
  { name: "Beds", image: "/images/Bed.png" },
  { name: "Dining Table Sets", image: "/images/Dining.png" },
  { name: "Sofa Cum Beds", image: "/images/Sofa.png" },
  { name: "TV Units", image: "/images/tv.png" },
  { name: "Book shelves", image: "/images/bookshelves.png" },
  { name: "Coffee Tables", image: "/images/coffee.png" },
  { name: "Study Tables", image: "/images/StudyTable.png" },
  { name: "Home Decor", image: "/images/Homedecor.png" },
  { name: "Home Furnishing", image: "/images/homefur.png" },
  { name: "Lamps & Lightings", image: "/images/lamp.png" },
  { name: "Sale", image: "/images/sale.png" },
];

const TopPicks = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Top Picks For You</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Impressive Collection for your Dream Home
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        {categories.map((category, index) => (
          <div key={index} style={{ width: "120px" }}>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                backgroundColor: "#f0f0f0",
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
