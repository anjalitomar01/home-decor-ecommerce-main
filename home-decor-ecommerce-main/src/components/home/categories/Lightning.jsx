import React from 'react';
import HeroBanner from '../HeroBanner';
const Lightning = () => {
  const fabrics = [
    {
      name: "Cotton Fabric",
      description: "Soft, breathable cotton fabric for a variety of clothing.",
      price: "$15 per meter",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Linen Fabric",
      description: "Perfect for warm weather, light and airy linen fabric.",
      price: "$25 per meter",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Silk Fabric",
      description: "Luxurious silk fabric for elegant clothing and accessories.",
      price: "$50 per meter",
      image: "/images/Almirah.png"
    },
    {
      name: "Wool Fabric",
      description: "Soft, warm wool fabric for winter clothing.",
      price: "$40 per meter",
      image: "https://via.placeholder.com/300"
    }
  ];
  const banners = [
    {
      // title: "Elevate Your Space",
      // subtitle: "Discover handcrafted home decor pieces",
      image: "/images/corousel1.png",
      // ctaText: "Shop Now",
      ctaLink: "/category/all"
    },
    {
      
      image: "/images/corousel5.png",
      ctaLink: "/category/furniture"
    },
    {
      image: "/images/corousel3.png",
      ctaLink: "/category/lighting"
    },
    {
      image: "/images/Eid.png",
      ctaLink: "/category/all"
    }
  ];

  return (
    <div style={styles.container}>
       {/* hero banner */}
       <HeroBanner banners={banners} />
      <h2 style={styles.heading}>Explore Our Premium Lightning Collection</h2>
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
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  productGrid: {
    display: 'flex',
    justifyContent: 'space-around',  // Distribute space between cards
    gap: '2rem',
    flexWrap: 'wrap',  // Allow wrapping if screen is small
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    width: '23%',  // Set each card width to take about 1/4th of the container
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  cardContent: {
    paddingTop: '1rem',
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

export default Lightning;
