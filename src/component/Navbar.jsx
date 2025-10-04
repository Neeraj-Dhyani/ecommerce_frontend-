import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, InputBase, Box, Badge, Avatar, Button, Menu, MenuItem
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { useAuth } from './login_component/AuthContext';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f4f4f4",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  maxWidth: 500,
}));
 let pathitem = [{path1:"/weddingstore"}]
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#888",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 2),
  paddingRight: theme.spacing(6),
  width: "100%",
}));
export default function Navbar1() {
  const {user, setUser,} = useAuth();
  const token = localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = useState(null);
  const [countrycode ,setCountrycode] =useState(null)
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  
  useEffect(()=>{
    axios.get("http://localhost:5000/userprotection", {
      headers:{
        Authorization: "Bearer " + token
      }
    }).then(res =>{
      console.log(res.data)
      setUser(res.data.msg);
      console.log(user)
      

    }).catch(err=>{console.log(err)});
  },[token])
  
   useEffect(()=>{
    if(!user||!user.country) return;
    axios.get(`http://localhost:5000/getCountryiso/${user.country}`).then((res)=>{
      console.log(res)
      setCountrycode(res.data.code)
  }).catch(err=>{console.log(err)})
}, [user?.country])



  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  } 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    handleMenuClose();
    navigate("/login");
  };

  
  return (
    <>
        <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img
            src="https://localo.com/assets/img/definitions/what-is-logo.webp"
            alt="Logo"
            style={{ height: 90, marginRight: 10 }}
          />
        </Box>

        {/* Search */}
        <Search>
          <StyledInputBase placeholder="Search for Wedding Dresses" />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>

        {/* Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body2" sx={{ color: "red", cursor: "pointer" }}>
            Need Help?
            
          </Typography>
           {/* Show username or login icon */}
            {user? (
               <>
              <IconButton onClick={handleMenuClick}>
                <PersonOutlineIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem disabled>Hello, {user.name}</MenuItem>
                <MenuItem onClick={() => { navigate("/orders"); handleMenuClose(); }}>
                  Orders
                </MenuItem>
                <MenuItem onClick={() => { navigate("/setting"); handleMenuClose(); }}>
                  setting
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
            ) : (
              <IconButton>
                <Link to="/login"><PersonOutlineIcon /></Link>
              </IconButton>
            )}
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            
             <Link to="/AddtoCart"><ShoppingBagOutlinedIcon /></Link>
          </IconButton>
          {
          countrycode?
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={`https://flagcdn.com/h40/${countrycode.toLowerCase()}.png`}
            alt={countrycode}
          />:
          <Avatar
            sx={{ width: 24, height: 24 }}
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
          />
          }
        </Box>
      </Toolbar>

      {/* Secondary Menu */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={3} py={1} flexWrap="wrap">
      {[
      {name:"Wedding Store", path:"/weddingstore"},
      {name:"Salwar Kameez", path:"/salwarkameez"},
      {name:"Men", path:"/men"},
      ].map((item) => (
      <Typography
      key={item.name}
      variant="body2"
      sx={{
      fontSize: 14,
      }}
      >
      <Link to={item.path}style={{ textDecoration: "none", color: "inherit" }}>{item.name}</Link>
  
      </Typography>
      ))}
{/* Offer Badge */}
<Button
size="small"
variant="contained"
sx={{ backgroundColor: "#9b0048", color: "#fff", fontSize: 12, textTransform: "none" }}
>
Flat 70% Off
</Button>
</Box>

    </AppBar>
    </>
  );
  }
