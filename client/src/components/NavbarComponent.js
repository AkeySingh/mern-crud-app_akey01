import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavbarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar style={{ backgroundColor: '#ff8500' }} position='static'> */}
      <AppBar style={{ backgroundColor: 'black' }} position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Mern Crud Application
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
