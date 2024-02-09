import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ClockIcon, FigmaIcon, FlameIcon, PensilIcon, PsIcon, CamIcon } from '../../assets/icons';
import InstagramIcon from '@mui/icons-material/Instagram';


const AllCoursesPanel = () => {

    const [course, setCourses] = useState([
        {id: 0, icon: <FigmaIcon/>, courseName: 'Learn Figma', courseCreator: 'by Christopher Morgan', duration:' 6h 30min', ratings: '4,9'},
        {id: 1, icon: <CamIcon/>, courseName: 'Analog Photography', courseCreator: 'by Gordon Norman', duration:' 3h 15min', ratings: '4,7'},
        {id: 2, icon: <InstagramIcon/>, courseName: 'Master Instagram', courseCreator: 'by Sophie Gill', duration:' 7h 40min', ratings: '4,6'},
        {id: 3, icon: <PensilIcon/>, courseName: 'Basic of Drawing', courseCreator: 'by Jean Tate', duration:' 11h 30min', ratings: '4,8'},
        {id: 4, icon: <PsIcon/>, courseName: 'Photoshop-Essence', courseCreator: 'by David Green', duration:' 5h 35min', ratings: '4,7'},
    ]);


  return (
    <>
    
    <Grid container >
        
        {course.map((element, index) => (
            
            <Grid item key={index} md={12}>
                
                <Box className="flex flex-wrap gap-5 " sx={{justifyContent: { xs: 'space-evenly', md: 'space-between' },}}>
                    <Box className="self-center p-4 bg-white rounded-lg">{element.icon}</Box>
                
                    <Box className="self-center">
                        <Typography variant="body2" sx={{fontWeight:'600'}}>{element.courseName}</Typography>
                        <Typography variant="body2" >{element.courseCreator}</Typography>
                    </Box>

                    <Box className="flex flex-wrap mt-4"><ClockIcon/> {element.duration}</Box>

                    <Box className="flex flex-wrap mt-4"><FlameIcon/> {element.ratings}</Box>

                    <Box className="self-center">
                        <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>  
                    </Box> 
                       
                </Box>
                <br></br>
                <Box className="border"></Box>
                <br></br>
            </Grid>

        ))}

        
        {/* <Box className="flex flex-wrap gap-4" >
            <Box className="self-center p-4 bg-white rounded-lg"><FigmaIcon/></Box>
                        
            <Box className="self-center">
                <Typography variant="body1" sx={{fontWeight:'600'}}>Learn Figma</Typography>
                <Typography variant="body2" >by Christopher Morgan</Typography>
            </Box>

            <Box className="flex flex-wrap mt-4"><ClockIcon/> 3h 15min</Box>

            <Box className="flex flex-wrap mt-4"><FlameIcon/> 4,7</Box>
                        
            <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>             
        </Box>
        <br></br>
        <Box className="flex flex-wrap gap-4 ml-1 " >
            <Box className="self-center p-4 bg-white rounded-lg"><CamIcon/></Box>
                        
            <Box className="self-center">
                <Typography variant="body1" sx={{fontWeight:'600'}}>Analog Photography</Typography>
                <Typography variant="body2" >by Goordon Norman</Typography>
            </Box>

            <Box className="flex flex-wrap mt-4"><ClockIcon/> 7h 40min</Box>

            <Box className="flex flex-wrap mt-4"><FlameIcon/> 4,7</Box>
                        
            <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>             
        </Box>
        <br></br>
        <Box className="flex flex-wrap gap-3 ml-1 " >
            <Box className="self-center p-4 bg-white rounded-lg"><img src={InstaImage} alt='insta'/></Box>
                        
            <Box className="self-center">
                <Typography variant="body1" sx={{fontWeight:'600'}}>Master Instagram</Typography>
                <Typography variant="body2" >by Sophie Gill</Typography>
            </Box>

            <Box className="flex flex-wrap mt-4"><ClockIcon/> 6h 30min</Box>

            <Box className="flex flex-wrap mt-4"><FlameIcon/> 4,7</Box>
                        
            <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>             
        </Box>
        <br></br>
        <Box className="flex flex-wrap gap-3 ml-1 " >
            <Box className="self-center p-4 bg-white rounded-lg"><PensilIcon/></Box>
                        
            <Box className="self-center">
                <Typography variant="body1" sx={{fontWeight:'600'}}>Basic of Drawing</Typography>
                <Typography variant="body2" >by Jean Tate</Typography>
            </Box>

            <Box className="flex flex-wrap mt-4"><ClockIcon/> 11h 30min</Box>

            <Box className="flex flex-wrap mt-4"><FlameIcon/> 4,8</Box>
                        
            <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>             
        </Box>
        <br></br>
        <Box className="flex flex-wrap gap-3 ml-1 " >
            <Box className="self-center p-4 bg-white rounded-lg"><PsIcon/></Box>
                        
            <Box className="self-center">
                <Typography variant="body1" sx={{fontWeight:'600'}}>Photoshop Essence</Typography>
                <Typography variant="body2" >by David Green</Typography>
            </Box>

            <Box className="flex flex-wrap mt-4"><ClockIcon/> 5h 35min</Box>

            <Box className="flex flex-wrap mt-4"><FlameIcon/> 4,7</Box>
                        
            <Button variant='outlined' className='h-[2rem] self-center' sx={{borderColor:'black', color:'black', textTransform: 'capitalize'}}>View Course</Button>             
        </Box> */}
    </Grid>
    </>
  )
}

export default AllCoursesPanel