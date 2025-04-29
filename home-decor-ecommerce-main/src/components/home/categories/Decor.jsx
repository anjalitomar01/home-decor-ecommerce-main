import React from 'react';
import HeroBanner from '../HeroBanner';
import Homedecor from './Homedecor';
import {  Box } from '@mui/material';

const Furniture = () => {
  const fabrics = [
    {
      name: "Sofa Arm",
      description: "Bridger Premium Solid Wood Sofa Arm Tray/Dining Mat, Teak Finish",
      price: "Rs 699",
      image: "/images/decor17.png"
    },
    {
      name: "Table Decor",
      description: "Sleek Cage Console Table Decor",
      price: "Rs 1799",
      image: "/images/decor18.png"
    },
    {
      name: "Glass Vase",
      description: "Verdant Glass Vase- Set of 2",
      price: "Rs 1584",
      image: "/images/decor19.png"
    },
    {
      name: "Wall Mounted Shelf",
      description: "Hedwig Wooden Wall Mounted Shelf With 4 Hanging Metal Hooks, Multipurpose Wall Shelf For Living Room/Bedroom",
      price: "Rs 500",
      image: "/images/decor20.png"
    }
  ];
  const banners = [
    {
      // title: "Elevate Your Space",
      // subtitle: "Discover handcrafted home decor pieces",
      image: "/images/Decor1.png",
      // ctaText: "Shop Now",
      ctaLink: "/category/all"
    },
    {
      
      image: "/images/Decor2.png",
      ctaLink: "/category/furniture"
    },
    {
      image: "/images/Decor3.png",
      ctaLink: "/category/lighting"
    },
    {
      image: "/images/Decor4.png",
      ctaLink: "/category/all"
    }
  ];
  const furniture = [
    {
      name: "Wall Paintings",
      description: "Aksha Pichwai Cow Painting Wall Frame",
      price: "Rs 399",
      image: "/images/decor21.png"
    },
    {
      name: "Pot",
      description: "Bloomify Ceramic Pot With Artificial Flowers",
      price: "Rs 299",
      image: "/images/decor22.png"
    },
    {
      name: "Wall Clocks",
      description: "Time to Define Your Wall Story",
      price: "Rs 100",
      image: "/images/decor23.png"
    },
    {
      name: "Photo Frames",
      description: "Ripple Photo Collage",
      price: "Rs 3999",
      image: "/images/decor24.png"
    }
  ];


  return (
    <div style={styles.container}>
       {/* hero banner */}
       <HeroBanner banners={banners} />
       <Homedecor/>
      <h2 style={styles.heading}>Discover Elegance with Our Exclusive Home Décor Collection</h2>
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
