// import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const HeroBanner = ({ title, subtitle, image, ctaText, ctaLink }) => {
//   return (
//     <Box sx={{ 
//       position: 'relative',
//       height: '500px',
//       backgroundImage: `url(${image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'white',
//       textAlign: 'center',
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//       }
//     }}>
//       <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', px: 3 }}>
//         <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
//           {title}
//         </Typography>
//         <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
//           {subtitle}
//         </Typography>
//         <Button 
//           component={Link} 
//           to={ctaLink} 
//           variant="contained" 
//           size="large"
//           sx={{ 
//             backgroundColor: 'primary.main',
//             '&:hover': { backgroundColor: 'primary.dark' }
//           }}
//         >
//           {ctaText}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HeroBanner;



// import React from 'react';
// import Slider from 'react-slick';  // Import Slider from react-slick
// import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const HeroBanner = ({ banners }) => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,  // Show dots at the bottom
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,  // Auto slide
//     autoplaySpeed: 5000,  // Change slide every 5 seconds
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Slider {...settings}>
//         {banners.map((banner, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: 'relative',
//               height: '500px',
//               backgroundImage: `url(${banner.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: 'white',
//               textAlign: 'center',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 backgroundColor: 'rgba(0, 0, 0, 0.3)',
//               },
//             }}
//           >
//             <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', px: 3 }}>
//               <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
//                 {banner.title}
//               </Typography>
//               <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
//                 {banner.subtitle}
//               </Typography>
//               <Button
//                 component={Link}
//                 to={banner.ctaLink}
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: 'primary.main',
//                   '&:hover': { backgroundColor: 'primary.dark' },
//                 }}
//               >
//                 {banner.ctaText}
//               </Button>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default HeroBanner;



import React from 'react';
import Slider from 'react-slick';  // Import Slider from react-slick
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const HeroBanner = ({ banners = [] }) => {
  // Settings for the carousel
  const settings = {
    dots: true,  // Show dots at the bottom
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Auto slide
    autoplaySpeed: 5000,  // Change slide every 5 seconds
    arrows: true,  // Enable arrows
    prevArrow: (
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        zIndex: 10,
        fontSize: '30px',
        color: 'white',
        cursor: 'pointer',
        transform: 'translateY(-50%)',
      }}>
        {/* <ChevronLeft fontSize="inherit" /> */}
      </Box>
    ),  // Left arrow
    nextArrow: (
      <Box sx={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        zIndex: 10,
        fontSize: '30px',
        color: 'white',
        cursor: 'pointer',
        transform: 'translateY(-50%)',
      }}>
        {/* <ChevronRight fontSize="inherit" /> */}
      </Box>
    ),  // Right arrow
  };

  // Check if banners array is empty
  if (banners.length === 0) {
    return <Typography variant="h6" align="center">No banners available</Typography>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: '500px',
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              },
            }}
          >
             {/* Make the entire image clickable */}
              <Link to={banner.ctaLink} style={{ width: '100%', height: '100%', position: 'absolute' }} />

              
            <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', px: 3 }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                {banner.title}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
                {banner.subtitle}
              </Typography>
              <Button
                component={Link}
                to={banner.ctaLink}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': { backgroundColor: 'primary.dark' },
                }}
              >
                {banner.ctaText}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroBanner;
