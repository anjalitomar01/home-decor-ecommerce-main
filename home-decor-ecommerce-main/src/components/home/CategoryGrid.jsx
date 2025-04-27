import { Box, Grid, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Furniture',
    image: '/images/furnitureCatgory.png',
    link: '/category/furniture'
  },
  {
    name: 'Lighting',
    image: '/images/lightingcat.png',
    link: '/category/lighting'
  },
  {
    name: 'Textiles',
    image: '/images/textilecat.png',
    link: '/category/textiles'
  },
  {
    name: 'Decor',
    image: '/images/decorcat.png',
    link: '/category/decor'
  }
];

const CategoryGrid = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.name} xs={12} sm={6} md={3}>
              <Box sx={{ 
                position: 'relative',
                height: '300px',
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover .category-overlay': {
                  opacity: 1
                }
              }}>
                <Box className="category-overlay" sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <Button 
                    component={Link} 
                    to={category.link} 
                    variant="contained" 
                    size="large"
                  >
                    {category.name}
                  </Button>
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryGrid;
