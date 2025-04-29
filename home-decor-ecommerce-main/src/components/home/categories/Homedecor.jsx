import React from "react";
import { Link } from "react-router-dom"; 

const categories = [
  { name: "Wall Shelves", image: "/images/decor5.png", link: "/TableLamp" },
  { name: "Home Temple", image: "/images/decor6.png", link: "/floorlamps" },
  { name: "Wall Mirrors", image: "/images/decor7.png", link: "/studylamps" },
  { name: "Wall Clocks", image: "/images/decor8.png", link: "/tripodlamps" },
  { name: "Tableware", image: "/images/decor9.png", link: "/lampshades" },
  { name: "Glassware", image: "/images/decor10.png", link: "/spotlights" },
  { name: "Figurines", image: "/images/decor11.png", link: "/category/chandeliers" },
  { name: "Key Holders", image: "/images/decor12.png", link: "/category/hanging-lights" },
  { name: "Pots & Planters", image: "/images/decor13.png", link: "/category/wall-lights" },
  { name: "Photo Frames", image: "/images/decor14.png", link: "/category/gate-lights" },
  { name: "Laundry Baskets", image: "/images/decor15.png", link: "/category/pendant-lights" },
  { name: "Serving Trays", image: "/images/decor16.png", link: "/category/decorative-lights" },
 ];

const TopPicks = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Home Decor</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
      Discover Beautiful Décor to Match Your Unique Style
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