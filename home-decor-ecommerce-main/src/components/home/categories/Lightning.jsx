import React from 'react';
import HeroBanner from '../HeroBanner';
import Light from './Light';
import {  Box } from '@mui/material';
const Furniture = () => {
  const fabrics = [
    {
      name: "Table Lamp",
      description: "Fiesta Resin Table Lamp",
      price: "800",
      image: "/images/light5.png"
    },
    {
      name: "Metal Table Lamp",
      description: "Brass Antique Diamond Cut Glass and Pure Brass Royal Table Lamp",
      price: "5850",
      image: "/images/light6.png"
    },
    {
      name: "Floor Lamps",
      description: "Beige Wooden Floor Lamp with Shelf Natural Jute Shade",
      price: "2999",
      image: "/images/light7.png"
    },
    {
      name: "Study Lamps",
      description: "Mosaic Multi Color Glass Table Lamp With Black Base",
      price: "599",
      image: "/images/light8.png"
    }
  ];
  const banners = [
    {
      // title: "Elevate Your Space",
      // subtitle: "Discover handcrafted home decor pieces",
      image: "/images/light1.png",
      // ctaText: "Shop Now",
      ctaLink: "/category/all"
    },
    {
      
      image: "/images/light2.png",
      ctaLink: "/category/lighting"
    },
    {
      image: "/images/light3.png",
      ctaLink: "/category/lighting"
    },
    {
      image: "/images/light4.png",
      ctaLink: "/category/all"
    }
  ];
  const furniture = [
    {
      name: "Chandeliers",
      description: "Gold Finish Iron Glass Chandeliers",
      price: "$10000",
      image: "/images/light9.png"
    },
    {
      name: "Pendant Lights",
      description: "Miera Glass Pendant Light( Smokey Grey )",
      price: "2999",
      image: "/images/light10.png"
    },
    {
      name: "Hanging Light",
      description: "Elegant Crystal Drops Hanging Lights",
      price: "20000",
      image: "/images/light11.png"
    },
    {
      name: "Decorative light",
      description: "Elephant Antique Brass Finish Metal Table Lamp",
      price: "6999",
      image: "/images/light12.png"
    }
  ];


  return (
    <div style={styles.container}>
       {/* hero banner */}
       <HeroBanner banners={banners} />
       <Light/>
      <h2 style={styles.heading}>Explore Our Premium Furniture Collection</h2>
      <div style={styles.productGrid}>
        {fabrics.map((fabric, index) => (
          <div key={index} style={styles.productCard}>
            <img src={fabric.image} alt={fabric.name} style={styles.productImage} />
            <div style={styles.cardContent}>
              <h4>{fabric.name}</h4>
              <p>{fabric.description}</p>
              <p style={styles.price}>{fabric.price}</p>
              <button style={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
     {/* Image below hero banner */}
     <Box sx={{ textAlign: 'center', my: 4 }}>
    <img src="/images/furnituresale.png" alt="Your Description" style={{ maxWidth: '100%', height: 'auto' }} />
  </Box>

  <div style={styles.productGrid}>
        {furniture.map((furniture, index) => (
          <div key={index} style={styles.productCard}>
            <img src={furniture.image} alt={furniture.name} style={styles.productImage} />
            <div style={styles.cardContent}>
              <h4>{furniture.name}</h4>
              <p>{furniture.description}</p>
              <p style={styles.price}>{furniture.price}</p>
              <button style={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: '1rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  productGrid: {
    display: 'flex',
    justifyContent: 'space-around',  // Distribute space between cards
    gap: '1rem',
    flexWrap: 'wrap',  // Allow wrapping if screen is small
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    width: '23%',  // Set each card width to take about 1/4th of the container
    height:'50%',
    marginBottom: '2rem',  // Niche space bhi
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit:'cover',
    borderRadius: '8px',
  },
  cardContent: {
    paddingTop: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    marginTop: '1rem',
    fontSize: '1.2rem',
  },
  addToCartBtn: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  },
};


export default Furniture;
