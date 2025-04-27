import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from '../components/product/ProductCard';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';

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
      id: 4,
      name: 'Jhumar',
      price: 499,
      image: '/images/Jhumar.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'lighting'
    },
    {
      id: 4,
      name: 'Curtains',
      price: 199.99,
      image: '/images/Curtains.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'Curtains'
    },
    {
      id: 4,
      name: 'Study Table',
      price: 250,
      image: '/images/StudyTable.png',
      shortDescription: 'Adjustable floor lamp with metal finish',
      category: 'Study Table'
    },
    {
      id: 4,
      name: 'Almirah',
      price: 129.99,
      image: '/images/Almirah.png',
      shortDescription: 'Almirah for your modern home',
      category: 'Almirah'
    },
    {
      id: 4,
      name: 'Temple',
      price: 400.99,
      image: '/images/Temple.png',
      shortDescription: 'Elegant home temples for a peaceful and spiritual space.',
      category: 'Temple'
    },
    {
      id: 4,
      name: 'Bed',
      price: 120000.99,
      image: '/images/Bed.png',
      shortDescription: 'Elegant design for perfect sleep and comfort.',
      category: 'Bed'
    },
    {
      id: 4,
      name: 'Mattress',
      price: 10000.99,
      image: '/images/Mattress.png',
      shortDescription: 'Soft, supportive, and built for better sleep',
      category: 'mattress'
    },
    {
      id: 4,
      name: 'Sofa',
      price: 45000.99,
      image: '/images/Sofa.png',
      shortDescription: 'Stylish, cozy, and made for everyday comfort',
      category: 'Sofa'
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
      // title: "Timeless Furniture",
      // subtitle: "Find the perfect piece for your living room",
      image: "/images/corousel5.png",
      // ctaText: "Shop Furniture",
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
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <CategoryGrid />
    </Box>
  );
};

export default HomePage;
