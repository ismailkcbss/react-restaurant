import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgb(249, 222, 159)',
  '&:hover': {
    backgroundColor: 'rgb(247, 214, 135)',
    transition:'.5s'
  },
  borderRadius:10,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'rgb(249, 222, 159)',
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:'10',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    borderRadius:'10',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));


function SearchBar() {

  const [searchText, setSearchText] = useState("");

  const searchTextChange = (event) =>{
    console.log(searchText);
    setSearchText(event.target.value);
  }

  return (
    <Box >
      <AppBar position="static" sx={{borderRadius:'500px'}}>
        <Search value={searchText} onChange={searchTextChange}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </AppBar>
    </Box>
  );
}

export default SearchBar;