import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Link, 
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

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
    <Box 
      component="footer" 
      sx={{ 
        py: 6,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              HomeDecor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bringing beautiful design to your home since 2010. We offer premium quality 
              furniture and decor items to transform your living space.
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                {socialLinks.map((social) => (
                  <Tooltip key={social.name} title={social.name}>
                    <IconButton 
                      href={social.url} 
                      aria-label={social.name}
                      sx={{ color: 'text.secondary', mr: 1 }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map((link) => (
                <Link 
                  key={link.text}
                  href={link.url} 
                  color="text.secondary"
                  underline="hover"
                  sx={{ mb: 1 }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>
          
          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {contactInfo.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {item.icon}
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Subscribe to our newsletter for the latest updates and offers.
            </Typography>
            <Box 
              component="form"
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: 2,
                mt: 2
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} HomeDecor. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;