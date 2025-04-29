
import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from '../../product/ProductCard';
import HeroBanner from '../HeroBanner';
import Homedecor from '../categories/Homedecor';


const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Modern Ceramic Vase',
      price: 45.99,
      // image: '/images/vase.jpg',
      image: '/images/image copy.png',
      shortDescription: 'Handcrafted ceramic vase with minimalist design',
      category: 'decor'
    },
    {
      id: 2,
      name: 'Wooden Coffee Table',
      price: 249.99,
      // image: '/images/coffee-table.jpg',
      image: '/images/image copy 2.png',
      shortDescription: 'Solid oak coffee table with clean lines',
      category: 'furniture'
    },
    {
      id: 3,
      name: 'Linen Throw Blanket',
      price: 79.99,
      // image: '/images/blanket.jpg',
      image: '/images/image1.png',
      shortDescription: 'Soft linen blanket in neutral tones',
      category: 'textiles'
    },
    {
      id: 4,
      name: 'Industrial Floor Lamp',
      price: 129.99,
      image: '/images/lamp.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'lighting'
    },
    {
      id: 5,
      name: 'Jhumar',
      price: 499,
      image: '/images/Jhumar.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'lighting'
    },
    {
      id: 6,
      name: 'Curtains',
      price: 199.99,
      image: '/images/Curtains.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'Curtains'
    },
    {
      id: 7,
      name: 'Study Table',
      price: 250,
      image: '/images/StudyTable.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'Study Table'
    },
    {
      id: 8,
      name: 'Almirah',
      price: 129.99,
      image: '/images/Almirah.png',
      shortDescription: 'Almirah for your modern home',
      category: 'Almirah'
    },
    
  ];
  //corousel
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
    <Box>
       {/* hero banner */}
       <HeroBanner banners={banners} />
        <Homedecor/>    
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Explore Our Premium Furniture Collection
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
 {/*  hero banner */}
 <Box sx={{ textAlign: 'center', my: 4 }}>
    <img src="/images/furnituresale.png" alt="Your Description" style={{ maxWidth: '100%', height: 'auto' }} />
  </Box>  

<Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Explore Our Premium Furniture Collection
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;