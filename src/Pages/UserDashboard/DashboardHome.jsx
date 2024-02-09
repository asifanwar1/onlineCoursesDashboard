import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { Illustration, ProfileImage } from '../../assets/images';
import { ArrowsIcon, BellIcon, BookIcon, MCardIcon, SearchIcon } from '../../assets/icons';
import Button from '@mui/material/Button';
import CircularWithValueLabel from '../../components/DashboardComponents/CircularProgressWithLabel';
import HomeTabs from '../../components/DashboardComponents/HomeTabs';
import StatisticsTabs from '../../components/DashboardComponents/StatisticsTabs';
import SideBar from '../../components/DashboardComponents/SideBar';

const DashboardHome = () => {
    const theme = useTheme();
  return (
    <>
        <SideBar/>
        <Box sx={{ height: '100vh', overflow: 'scroll',  position: 'relative' }}>

        
        <Grid container sx={{ ml: { xs: '18%', md: '15%' }, mt: 6.5, gap: 5 }}>



            <Grid container md={5} direction="row" className='gap-5'>


                
                <Grid item md={12} xs={9} sx={{marginTop: { xs: '10%', md: '0' },}}>
                <Box className="flex flex-wrap gap-10 overflow rounded-lg bg-[#F5F5F7]" sx={{marginLeft: { xs: '5%', md: '1%' },}}>
                    <Box className="self-center ml-5" sx={{ [theme.breakpoints.down('sm')]:{fontSize: '1.5rem', marginLeft:'0.8rem',} }}>
                        <Typography variant="h3" component="h3" sx={{ [theme.breakpoints.down('sm')]:{fontSize: '1.5rem', marginTop:'3rem',} }}>
                            Hello Josh!
                        </Typography>
                        <Typography variant="body1" >
                            It's good to see you
                        </Typography>
                    </Box>
                     
                     <Box className="self-center overflow" sx={{marginTop: { xs: '-120px', md: '-40px' }, marginLeft: { xs: 'auto', md: '10px' }, width: { xs: '45%', md:'35%'},}}>
                        <img src={Illustration} alt='person' style={{  maxHeight: '100%', maxWidth: '100%', }}/>
                    </Box> 
                </Box>
                </Grid>



                <Grid item md={12} xs={9} className='flex' sx={{flexDirection: { xs: 'column', md: 'row' },}}>
                <Box className="flex flex-wrap gap-8 rounded-lg bg-[#F5F5F7]" sx={{marginLeft: { xs: '5%', md: '1%' }, padding: { xs: '2%', md: '0%' },}} >
                        <Box className="flex gap-8 ml-5">

                        <MCardIcon className="self-center"/>
                        <Box className="self-center">
                            <Typography variant="h5" component="h5">
                                Spanish B2
                            </Typography>
                            <Typography variant="body2" >
                                by Alejandro Velazquez
                            </Typography>
                        </Box>
                        </Box>
                        
                        <Box className="flex gap-8" sx={{marginLeft: { xs: '8%', md: '0%' },}}>

                        <Box className="mt-2"><CircularWithValueLabel/></Box>
                        
                        <Box className='h-[2rem] self-center px-3'>

                        <Button variant='contained' sx={{backgroundColor:'black', textTransform: 'capitalize'}}>Continue</Button>
                        </Box>
                        </Box>
                     
                </Box>
                <Box className="self-center" sx={{marginLeft: { xs: '5%', md: 'auto' }, marginTop: { xs: '5%', md: '0%' },}}>

                        <ArrowsIcon />
                </Box>
              
                </Grid>



                
                <Grid item md={12} xs={9}>
                    {/* <br></br> */}
                    <HomeTabs/> 
                </Grid>




            </Grid>






            {/* second column */}


            
            <Grid container md={4} direction="row" >


                
                <Grid item md={12} xs={9} sx={{ position: { xs: 'absolute', md: 'relative' }, top: { xs: 10, md: 0 }, }}>
                <Box className="flex flex-wrap w-full gap-8" sx={{marginLeft: { xs: '5%', md: '0%' },}}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', width:{ xs: '12rem', md:'18rem'}}} className="rounded-lg bg-[#F5F5F7] h-[3rem]">
                        <SearchIcon className="self-center ml-3" />
                        <InputBase id="input-with-sx"  className="self-center ml-2 " />
                    </Box>
                    
                    <Badge badgeContent={4} color="primary" sx={{marginTop: {xs: '4%', md:'0'}}}>
                        <BellIcon color="action" />
                    </Badge>
                     
                     <Box className="flex" sx={{display: {xs: 'none', md:'block'},}}>
                        <Avatar src={ProfileImage} sx={{ width: 46, height: 46,}} variant="rounded"/>
                        {/* <DArrowIcon className='place-self-end'/> */}
                    </Box> 
                </Box>
                </Grid>



                <Grid item md={12} xs={9} >
                <Box className="flex flex-wrap w-full gap-8 " sx={{marginTop: {xs: '5', md:'-9.8rem'}, marginLeft: {xs: '5%', md:'0'},}}>
                      
                        <Box className="flex flex-wrap w-full gap-8">
                        <Box className="flex gap-5 px-[1.9rem] py-4 self-center rounded-lg bg-[#F5F5F7]" sx={{width:{xs:'100%', md:'auto'}}}>
                            <Typography variant="h3" sx={{fontWeight:'bold'}}>11</Typography>
                            <Box>
                                <Typography variant="body1" >Courses</Typography>
                                <Typography variant="body1" >completed</Typography>                
                            </Box>
                        </Box>

                        <Box className="flex gap-5 px-[1.9rem] py-4  self-center rounded-lg bg-[#F5F5F7]" sx={{width:{xs:'100%', md:'auto'}}}>
                            <Typography variant="h3" sx={{fontWeight:'bold'}}>04</Typography>
                            <Box>
                                <Typography variant="body1" >Courses</Typography>
                                <Typography variant="body1" >in progress</Typography>                
                            </Box>
                        </Box>
                        </Box>
                        
                </Box>
                </Grid>



                
                <Grid item md={12} xs={9}>
                    <StatisticsTabs/>
                </Grid >
                



                <Grid item md={12} xs={9}>
                <Box className="flex flex-wrap gap-6 p-5 rounded-lg bg-[#F5F5F7] justify-center" sx={{marginTop: {xs: '5', md:'-9rem'}, marginLeft: {xs: '5%', md:'0'},}}>
                      
                        
                      <Box className="flex flex-col self-center gap-5">
                          <Typography variant="h6" sx={{fontWeight:'bold'}}>Learn even more!</Typography>
                          <Box>
                              <Typography variant="body1" >Unlock premium features</Typography>
                              <Typography variant="body1" >only for $9.99 per month.</Typography>                
                          </Box>
                          <Button variant='contained' className='h-[2rem] ' sx={{backgroundColor:'black', textTransform: 'capitalize'}}>Go Premium</Button>
                      </Box>

                      <Box className="self-center" sx={{marginLeft:{xs:'0', md:'auto'}}}>
                          <BookIcon/>
                      </Box>

                      
              </Box>
                </Grid>




            </Grid>









        </Grid>

        </Box>
    </>
  )
}

export default DashboardHome