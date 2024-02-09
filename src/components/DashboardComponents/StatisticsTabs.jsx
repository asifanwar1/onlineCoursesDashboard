import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {LineChartData} from './ChartData';
import { Button } from '@mui/material';
import { DArrowIcon } from '../../assets/icons';
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
        <Box>
          <Box >{children}</Box>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const tabStyles = {
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginLeft:'-15px'
};

export default function StatisticsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full" sx={{marginTop: {xs: '2rem', md:'-14rem'}, marginLeft: {xs: '5%', md:'0'},}} >
      <Typography variant="h5" component="h5" sx={{fontWeight: 'bold'}}>Your statistics</Typography>
      <Box sx={{ display:'flex', flexDirection:{xs:'column', md:'row'}}} className="flex ">
        <Tabs value={value} textColor="primary" indicatorColor="white" onChange={handleChange} aria-label="basic tabs example">
          <StyledTab  label="Learning Hours" {...a11yProps(0)} sx={{...tabStyles}}/>
          <StyledTab  label="My Courses" {...a11yProps(1)}  sx={{...tabStyles}}/>
        </Tabs>
          <Button variant="contained" endIcon={<DArrowIcon />} sx={{ backgroundColor:'#F5F5F7', color:'black', textTransform:'capitalize', marginLeft:{ xs:'0', md:'auto'}, marginRight:{ xs:'auto', md:'0'}}} className='h-[2rem] self-center'>Weekly</Button>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LineChartData/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LineChartData/>
      </CustomTabPanel>
    </Box>
  );
}