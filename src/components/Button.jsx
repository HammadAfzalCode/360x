import React, { useState } from 'react';
import Container from './Container';
import { Grid, Typography, Box, Popover, Button } from '@mui/material';
export default function Bottun() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTech, setSelectedTech] = useState(null);
  
    const handleClick = (event, tech) => {
      setAnchorEl(event.currentTarget);
      setSelectedTech(tech);
    };
    const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    const handleClose = () => {
      setAnchorEl(null);
      setSelectedTech(null);
    };
    const technologies = [
        'JavaScript',
        'MySQL',
        'Bootstrap',
        'Stripe',
        'TypeScript',
        
      ];
      const logoPaths_ROW1 = [
        './assets/Technologies_Icon_svg/javascript_horizontal_5a662283b5 2.svg',
        './assets/Technologies_Icon_svg/mysql_horizontal_aec0b8c464 2.svg',
        './assets/Technologies_Icon_svg/getbootstrap_ar21_ebe4405ebc 2.svg',
        './assets/Technologies_Icon_svg/Group.svg',
        './assets/Technologies_Icon_svg/Vector (1).svg',
        
         
      ];
      const technologyPractice = {
        'JavaScript': '4 years',
        'MySQL': '3 years.',
        'Bootstrap': '2 years.',
        'Stripe': '2 years.',
        'TypeScript': '3 years.',
        
      };
      const technologyprojects = {
        'JavaScript': '7+',
        'MySQL': '2+',
        'Bootstrap': '2+',
        'Stripe': '3+',
        'TypeScript': '4+',
    
      };

      const technologyWorkforce = {
              'JavaScript': '15',
     'MySQL': '15',
    'Bootstrap': '15',
      'Stripe': '15',
        'TypeScript': '15',
        
      };
    
  const technologycontent = {
          'JavaScript': '360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.',
 'MySQL': '360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.',
'Bootstrap': '360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.',
  'Stripe': '360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.',
    'TypeScript': '360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.',
   
  };
 return (


<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    gap: 1,
    flexWrap: 'wrap',
    marginTop:"50px"
  }}
>
  {technologies.map((tech, index) => (
    <div key={index}>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={(e) => handleClick(e, tech)}
        startIcon={
          logoPaths_ROW1[index] ? (
            <img src={logoPaths_ROW1[index]} alt={`Logo ${index + 1}`} width="20" height="20" />
          ) : null
        }
        sx={{
          color: '#fff',
          borderColor: '#3A3A3A',
          marginBottom: '10px',
     padding:"15px",
          fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
          '&:hover': {
            backgroundColor: '#D0140F',
          },
        }}
      >
        {tech}
      </Button>
      <Popover
  id={id}
  open={open && selectedTech === tech}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  sx={{
    width: '100%', // Make the width 100% for responsiveness
    maxWidth: '700px', // Set a maximum width for larger screens
  }}
>
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'Technologies_Icon_svg' }}>
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Clash Display',
          fontWeight: 500,
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
          textAlign: 'left',
        }}
      >
        Practice
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Clash Display',
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
          fontWeight: 600,
          lineHeight: '29px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        {technologyPractice[tech]}
      </Typography>
    </Box>

    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Clash Display',
          fontWeight: 500,
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
        }}
      >
        Projects
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Clash Display',
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
          fontWeight: 600,
          lineHeight: '29px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        {technologyprojects[tech]}
      </Typography>
    </Box>

    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Clash Display',
          fontWeight: 500,
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
        }}
      >
        Workforce
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Clash Display',
          fontSize: { xs: '14px', sm: '24px', md: '28px', lg: '32px' },
          fontWeight: 600,
          lineHeight: '29px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        {technologyWorkforce[tech]}
      </Typography>
    </Box>
  </Box>

  <Box sx={{ p: 3, textAlign: { xs: 'center', sm: 'left' } }}>
    <Typography>{technologycontent[tech]}</Typography>
  </Box>
</Popover>

    </div>
  ))}
</Box>







    )
}