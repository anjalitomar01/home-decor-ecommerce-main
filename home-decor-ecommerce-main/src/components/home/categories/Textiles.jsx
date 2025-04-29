import React from 'react';
import HeroBanner from '../HeroBanner';
import Fur from './Fur';
import {  Box } from '@mui/material';
const Furniture = () => {
  const fabrics = [
    {
      name: "Cotton Fabric",
      description: "Soft, breathable cotton fabric for a variety of clothing.",
      price: "$15 per meter",
      image: "/images/Bed.png"
    },
    {
      name: "Linen Fabric",
      description: "Perfect for warm weather, light and airy linen fabric.",
      price: "$25 per meter",
      image: "/images/fursofa.png"
    },
    {
      name: "Silk Fabric",
      description: "Luxurious silk fabric for elegant clothing and accessories.",
      price: "$50 per meter",
      image: "/images/frunituretable.png"
    },
    {
      name: "Wool Fabric",
      description: "Soft, warm wool fabric for winter clothing.",
      price: "$40 per meter",
      image: "/images/cusions.png"
    }
  ];
  const banners = [
    {
      // title: "Elevate Your Space",
      // subtitle: "Discover handcrafted home decor pieces",
      image: "/images/textile1.png",
      // ctaText: "Shop Now",
      ctaLink: "/category/all"
    },
    {
      
      image: "/images/textile2.png",
      ctaLink: "/category/furniture"
    },
    {
      image: "/images/textile3.png",
      ctaLink: "/category/lighting"
    },
    {
      image: "/images/textile4.png",
      ctaLink: "/category/all"
    }
  ];
  const furniture = [
    {
      name: "Cotton Fabric",
      description: "Soft, breathable cotton fabric for a variety of clothing.",
      price: "$15 per meter",
      image: "/images/fur1.png"
    },
    {
      name: "Linen Fabric",
      description: "Perfect for warm weather, light and airy linen fabric.",
      price: "$25 per meter",
      image: "/images/fur2.png"
    },
    {
      name: "Silk Fabric",
      description: "Luxurious silk fabric for elegant clothing and accessories.",
      price: "$50 per meter",
      image: "/images/fur3.png"
    },
    {
      name: "Wool Fabric",
      description: "Soft, warm wool fabric for winter clothing.",
      price: "$40 per meter",
      image: "/images/fur4.png"
    }
  ];


  return (
    <div style={styles.container}>
       {/* hero banner */}
       <HeroBanner banners={banners} />
       <Fur/>
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
    justifyContent: 'space-around',  
    gap: '1rem',
    flexWrap: 'wrap',  
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    width: '23%',  
    height:'50%',
    marginBottom: '2rem',  
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

