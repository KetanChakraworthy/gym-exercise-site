import React from 'react'
import { Box, Button, TextField } from '@mui/material';
export default function SearchForm({ search, handleSearch, handleOnChange }) {
  return (
    <Box position='relative' mb='72px' >
        <TextField
          height='76px'
          value={search}
          onChange={ handleOnChange }
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius:'40px'
          }}
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right:'0'
           }}
        >
          Search
        </Button>
      </Box>
  )
}
