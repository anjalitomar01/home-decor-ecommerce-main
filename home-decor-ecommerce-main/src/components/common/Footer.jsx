
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import ShopIcon from '@mui/icons-material/Shop';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#fafafa', pt: 6, pb: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* OUR COMPANY */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>Our Company</Typography>
            <Stack spacing={1}>
              <Link href="#">About Us</Link>
              <Link href="#">Career</Link>
              <Link href="#">Media</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Our Stores</Link>
              <Link href="#">Customer Stories</Link>
              <Link href="#">Investor Relations</Link>
            </Stack>
          </Grid>

          {/* USEFUL LINKS */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>Useful Links</Typography>
            <Stack spacing={1}>
              <Link href="#">Custom Furniture</Link>
              <Link href="#">Exporters</Link>
              <Link href="#">Hotel Furniture</Link>
              <Link href="#">Delivery Location</Link>
              <Link href="#">Sitemap</Link>
            </Stack>
          </Grid>

          {/* SHOP BY ROOM */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>Shop by Room</Typography>
            <Stack spacing={1}>
              <Link href="#">Living Room</Link>
              <Link href="#">Bedroom</Link>
              <Link href="#">Dining Room</Link>
              <Link href="#">Kids Room</Link>
              <Link href="#">Modular Furniture</Link>
              <Link href="#">Modular Kitchen</Link>
              <Link href="#">Modular Wardrobe</Link>
            </Stack>
          </Grid>

          {/* PARTNERS & TRUSTED BY */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Partners</Typography>
            <Stack spacing={1}>
              <Link href="#">Become a Franchise</Link>
              <Link href="#">Sell on HomeDecor</Link>
              <Link href="#">Design Partner</Link>
            </Stack>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Trusted By</Typography>
            <Stack spacing={1}>
              <Link href="#">QRO Certified</Link>
              <Link href="#">Ukcert Certified</Link>
            </Stack>
          </Grid>

          {/* NEED HELP */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Need Help</Typography>
            <Stack spacing={1}>
              <Link href="#">Help Center</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Track Your Order</Link>
              <Link href="#">Ask Expert</Link>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-start" sx={{ mt: 2 }}>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><PinterestIcon /></IconButton>
              <IconButton><YouTubeIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4 }} />

        {/* Delivery Info */}
        <Typography variant="body2" align="center" paragraph>
          <strong>Delivery Across India</strong> : Ahmedabad, Bangalore, Bhopal, Chandigarh, Chennai, Coimbatore, Faridabad, Ghaziabad, Goa, Gurgaon, Hyderabad, Indore, Jaipur and <Link href="#">More Cities</Link>
        </Typography>

        {/* Payments and App Download */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">We Accept</Typography>
            <CreditCardIcon />
            <PaymentIcon />
            <ShopIcon />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Download App</Typography>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="40" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height="40" />
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 3 }} />

        {/* Bottom Text */}
        <Typography variant="body2" color="text.secondary" align="center" paragraph>
          Terms of Use | Security | Return & Refund | Payment Policy | Grievance Cell
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} HomeDecor.com. All rights reserved. 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

