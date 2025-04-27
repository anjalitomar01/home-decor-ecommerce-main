import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', url: '#' },
    { icon: <Twitter />, name: 'Twitter', url: '#' },
    { icon: <Instagram />, name: 'Instagram', url: '#' },
    { icon: <LinkedIn />, name: 'LinkedIn', url: '#' },
  ];

  const quickLinks = [
    { text: 'Home', url: '#' },
    { text: 'Products', url: '#' },
    { text: 'About Us', url: '#' },
    { text: 'Contact', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'FAQ', url: '#' },
  ];

  const contactInfo = [
    { icon: <Email />, text: 'info@homedecor.com' },
    { icon: <Phone />, text: '+1 (555) 123-4567' },
    { icon: <LocationOn />, text: '123 Design St, Decor City' },
  ];

  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} HomeDecor. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
