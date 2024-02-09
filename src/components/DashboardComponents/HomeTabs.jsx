import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllCoursesPanel from './AllCoursesPanel';
import { styled } from '@mui/system';


const StyledTab = styled(Tab)({
  '&.Mui-selected': {
    color: 'black',
  },
});

function CustomTabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="rounded-lg bg-[#F5F5F7]">
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tabpanel-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const tabStyles = {
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginLeft:'-15px'
};

export default function HomeTabs() {
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%',marginLeft: {xs: '5%', md:'0'}, }} >
      <Typography variant="h5" component="h5" sx={{fontWeight: 'bold'}}>Courses</Typography>
      <Box sx={{ borderColor: 'divider',}}>
        <Tabs value={value} variant="scrollable" scrollButtons={false} indicatorColor="white" onChange={handleChange}>
          <StyledTab  label="All Courses" {...a11yProps(0)} sx={{...tabStyles}}/>
          <StyledTab  label="The Newest" {...a11yProps(1)}  sx={{...tabStyles}}/>
          <StyledTab  label="Top Rated" {...a11yProps(2)}  sx={{...tabStyles}}/>
          <StyledTab  label="Most Popular" {...a11yProps(3)}  sx={{...tabStyles}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AllCoursesPanel/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AllCoursesPanel/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AllCoursesPanel/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AllCoursesPanel/>
      </CustomTabPanel>
    </Box>
  );
}