import React from 'react';
const tableLamps = [
  {
    name: "Fiesta Resin Table Lamp",
    description: "Beautiful resin table lamp for cozy spaces.",
    price: "Rs 800",
    image: "/images/light5.png",
  },
  {
    name: "Brass Diamond Table Lamp",
    description: "Elegant brass and glass diamond cut lamp.",
    price: "Rs 5850",
    image: "/images/t1.png",
  },
  {
    name: "Classic Wooden Lamp",
    description: "Premium wooden table lamp with jute shade.",
    price: "Rs 2999",
    image: "/images/t2.png",
  },
  {
    name: "Colorful Mosaic Lamp",
    description: "Handmade multi-color mosaic glass lamp.",
    price: "Rs 599",
    image: "/images/t3.png",
  },
];

const TableLamp = () => {
  return (
    <div style={styles.container}>
     

      <h1 style={styles.heading}>Table Lamps Collection  ("आपके घर की रौनक, हमारे टेबल लैंप्स।")</h1>
      <p>Let every glow be a reflection of love, comfort, and style – only at Home Decor</p>
      <div style={styles.productGrid}>
        {tableLamps.map((lamp, index) => (
          <div key={index} style={styles.productCard}>
            <img src={lamp.image} alt={lamp.name} style={styles.productImage} />
            <div style={styles.cardContent}>
              <h3>{lamp.name}</h3>
              <p>{lamp.description}</p>
              <p style={styles.price}>{lamp.price}</p>
              <button style={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  productCard: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  cardContent: {
    paddingTop: '1rem',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: '0.5rem',
  },
  addToCartBtn: {
    marginTop: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default TableLamp;
