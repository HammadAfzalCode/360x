// import React from 'react'
import ShowcaseCard from './ShowcaseCard'
// import CaseStudyCards from './CaseStudyCards'

// const ShowcaseComponent = () => {
//   return (
//     <div>Showcase component
//       <ShowcaseCard/>
//       {/* <CaseStudyCards/> */}
//     </div>
//   )
// }

// export default ShowcaseComponent

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ShowcaseComponent() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
          <Item><ShowcaseCard/></Item>
        </Box>
        <Box gridColumn="span 3">
          <Item><ShowcaseCard/></Item>
        </Box>
        <Box gridColumn="span 3">
          <Item><ShowcaseCard/></Item>
        </Box>
        <Box gridColumn="span 6">
          <Item><ShowcaseCard/></Item>
        </Box>
        <Box gridColumn="span 3">
          <Item><ShowcaseCard/></Item>
        </Box> <Box gridColumn="span 3">
          <Item><ShowcaseCard/></Item>
        </Box>
      </Box>
    </Box>
  );
}
