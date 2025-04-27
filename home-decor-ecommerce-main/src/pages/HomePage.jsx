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
      image: "/images/corousel4.png",
      // ctaText: "Shop Furniture",
      ctaLink: "/category/furniture"
    },
    {
      // title: "Lighting Inspiration",
      // subtitle: "Brighten up your home with our unique lighting",
      image: "/images/corousel3.png",
      // ctaText: "Shop Lighting",
      ctaLink: "/category/lighting"
    }
  ];

  return (
    <Box>
      {/* <HeroBanner 
        title="Elevate Your Space"
        subtitle="Discover handcrafted home decor pieces"
        image="/images/hero-banner.jpg"
        ctaText="Shop Now"
        ctaLink="/category/all"
      />
       */}
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
