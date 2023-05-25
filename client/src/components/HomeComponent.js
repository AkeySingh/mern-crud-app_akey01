import React from 'react'
import UserTable from './UserTable'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
const HomeComponent = () => {
  return (
    <div className='container'>
      <div className='display_flex'>
        <h2 className='totitle'>User List</h2>
        <Link to='/add/user'>
          <Button variant='contained'>Add User</Button>
        </Link>
      </div>
      <UserTable />
    </div>
  )
}

export default HomeComponent
