import React from "react";
import { Link } from "react-router-dom"; 

const categories = [
  { name: "Table Lamps", image: "/images/light13.png", Link: "/TableLamp"},
  { name: "Floor Lamps", image: "/images/light14.png", link: "/category/floorlamps" },
  { name: "Study Lamps", image: "/images/light15.png", link: "/category/studylamps" },
  { name: "Tripod Lamps", image: "/images/light16.png", link: "/category/tripod-lamps" },
  { name: "Lamp Shades", image: "/images/light17.png", link: "/category/lamp-shades" },
  { name: "Spot Lights", image: "/images/light18.png", link: "/category/spot-lights" },
  { name: "Chandeliers", image: "/images/light19.png", link: "/category/chandeliers" },
  { name: "Hanging Lights", image: "/images/light20.png", link: "/category/hanging-lights" },
  { name: "Wall Lights", image: "/images/light21.png", link: "/category/wall-lights" },
  { name: "Gate Lights", image: "/images/light22.png", link: "/category/gate-lights" },
  { name: "Pendant Lights", image: "/images/light23.png", link: "/category/pendant-lights" },
  { name: "Decorative Lights", image: "/images/light24.png", link: "/category/decorative-lights" },
 ];

const TopPicks = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Home Lighting</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Light up your life — find the perfect glow for every corner of your home.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        {categories.map((category, index) => (
          <div key={index} style={{ width: "120px" }}>
            <Link to={category.link} style={{ textDecoration: "none", color: "inherit" }}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
