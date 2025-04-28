import React from "react";

const categories = [
  { name: "Table Lamps", image: "/images/light13.png" },
  { name: "Floor Lamps", image: "/images/light14.png" },
  { name: "Study Lamps", image: "/images/light15.png" },
  { name: "Tripod Lamps", image: "/images/light16.png" },
  { name: "Lamp Shades", image: "/images/light17.png" },
  { name: "Spot Lights", image: "/images/light18.png" },
  { name: "Chandeliers", image: "/images/light19.png" },
  { name: "Hanging Lights", image: "/images/light20.png" },
  { name: "Wall Lights", image: "/images/light21.png" },
  { name: "Gate Lights", image: "/images/light22.png" },
  { name: "Pendant Lights", image: "/images/light23.png" },
  { name: "Decorative Lights", image: "/images/light24.png" },
];

const TopPicks = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Home Furnishings</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
      Beautiful furniture, beautiful memories — create your perfect home with us.
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