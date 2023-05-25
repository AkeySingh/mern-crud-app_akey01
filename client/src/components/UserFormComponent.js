import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { Country, State, City } from 'country-state-city'
import TextField from '@mui/material/TextField'

const UserFormComponent = () => {
  const [allCountries] = useState(Country.getAllCountries())
  const [allStates, setAllStates] = useState(State.getAllStates())
  const [allCyties, setAllCyties] = useState(City.getAllCities())
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
    isWorked: 'country',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    console.log('00000000', name, value)
    setFormData({ ...formData, [name]: value, isWorked: name })

    // if (name === 'country') {
    //   let preval = [...allStates]
    //   preval.filter((el) => el.isoCode === value)
    //   setAllStates(preval)
    // }
  }
  useEffect(() => {
    console.log(formData)
    // if (formData.country === 'country') {
    //   console.log('kjskj')
    //   let preval = [...allStates]
    //   preval.filter((el) => el.isoCode === formData.country)
    //   setAllStates(preval)
    // }
  }, [formData])

  return (
    <>
      <div className='container'>
        <div className='display_flex'>
          <h2>Form Component</h2>
        </div>
        <div className='form_textfields'>
          <TextField small='true' id='outlined-basic' autoComplete='off' label='name' variant='outlined' />
          <TextField small='true' id='outlined-basic' autoComplete='off' label='email' variant='outlined' />
          <TextField small='true' id='outlined-basic' autoComplete='off' label='password' variant='outlined' />
          <TextField small='true' id='outlined-basic' autoComplete='off' label='phone' variant='outlined' />
          <TextField select small='true' id='outlined-basic' autoComplete='off' label='Admin' variant='outlined'>
            <MenuItem value={''}>Select</MenuItem>
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>Inactive</MenuItem>
          </TextField>

          <TextField
            select
            small='true'
            id='outlined-basic'
            autoComplete='off'
            label='country'
            name='country'
            onChange={(e) => handleChange(e)}
            variant='outlined'
          >
            <MenuItem value={''}>Select</MenuItem>

            {allCountries.map((item, index) => {
              return (
                <MenuItem value={item.isoCode} key={item.latitude}>
                  {item.name}
                </MenuItem>
              )
            })}
            <MenuItem value={true}>India</MenuItem>
            <MenuItem value={false}>US</MenuItem>
          </TextField>
          <TextField
            select
            small='true'
            id='outlined-basic'
            autoComplete='off'
            label='state'
            // onChange={(e) => handleChange(e)}
            variant='outlined'
          >
            <MenuItem value={''}>Select</MenuItem>
            {allStates.map((item, index) => {
              return (
                <MenuItem value={item.isoCode} key={item.latitude}>
                  {item.name}
                </MenuItem>
              )
            })}
          </TextField>
          <TextField
            select
            small='true'
            id='outlined-basic'
            autoComplete='off'
            label='city'
            onChange={(e) => handleChange(e)}
            variant='outlined'
          >
            <MenuItem value={''}>Select</MenuItem>
            <MenuItem value={true}>India</MenuItem>
            <MenuItem value={false}>US</MenuItem>
          </TextField>

          <TextField small='true' id='outlined-basic' autoComplete='off' label='zip' variant='outlined' />
        </div>

        <div className='display_flex'></div>
      </div>
    </>
  )
}

export default UserFormComponent
