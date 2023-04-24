
import React from 'react'
import { Box} from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import Navbar from '../components/Layout/Navbar/Navbar'
import Sidebar from '../components/Layout/Sidebar/Sidebar'

import '../styles/Dash.css'


const Home = () => {
    return (
        <>
          <div className='bgcolor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
              <Sidebar />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <Card sx={{ minWidth: 100 + '%', minHeight : 100 +'%', bgcolor: '#575656' }}>
                        <CardContent sx={{
                          margin: 10 + 'px',
                        }}>
                          <div className='homepageCard' sx={{
                            // margin: 100 + 'px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
              
    
                          }}>
                            Welcome back to your dashboard!
                          </div>
                        </CardContent>
                      </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </>
      )
}

export default Home
