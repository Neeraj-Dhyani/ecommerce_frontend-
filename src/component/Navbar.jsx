import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Paper,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./login_component/AuthContext";

// Styled search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.grey[200], 1),
  "&:hover": { backgroundColor: alpha(theme.palette.grey[300], 1) },
  marginLeft: theme.spacing(2),
  width: "100%",
  maxWidth: 480,
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginTop: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 2),
  paddingRight: theme.spacing(6),
  width: "100%",
  fontSize: 14,
}));

export default function Navbar1() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = useState(null);
  const [countrycode, setCountrycode] = useState("in");
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:5000/userprotection", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUser(res.data.msg))
      .catch(() => {});
  }, [token]);

  useEffect(() => {
    if (!user || !user.country) return;
    axios
      .get(`http://localhost:5000/getCountryiso/${user.country}`)
      .then((res) => setCountrycode(res.data.code.toLowerCase()))
      .catch(() => setCountrycode("in"));
  }, [user?.country]);

  const mainMenu = [
    "Wedding Store",
    "Festive Store",
    "Salwar Kameez",
    "Bridal",
    "Saree",
    "Lehenga",
    "Indo Western",
    "Plus Size",
    "Women",
    "Men",
    "Kids",
    "Jewellery",
    "DIY",
  ];

  const miniCategories = [
    { name: "Salwar Kameez", img: "https://i.pinimg.com/736x/9e/c3/41/9ec34176f70a4f6ed9e87294d81f1b41.jpg" },
    { name: "Wedding Dresses", img: "https://i.pinimg.com/736x/5f/e8/65/5fe8656f947c2538785f1908df446aab.jpg" },
    { name: "Plus Size", img: "https://i.pinimg.com/736x/2b/8c/e4/2b8ce4fb487f54586d11414c9249ce9b.jpg" },
    { name: "Men Clothing", img: "https://i.pinimg.com/736x/23/e5/04/23e504c0340715dedd9ee503a55246f7.jpg" },
    { name: "Designer Wear", img: "https://i.pinimg.com/736x/c5/e0/fc/c5e0fc2d45aa947148a603353f8368ca.jpg" },
    { name: "Indo Western", img: "https://i.pinimg.com/736x/1b/ef/6a/1bef6a3ba7ede35bdfc037698146eb1e.jpg" },
    { name: "Pakistani Suits", img: "https://i.pinimg.com/1200x/94/82/0d/94820d817d94115cbfa7ccd54b0669f5.jpg" },
    { name: "Lehenga", img: "https://i.pinimg.com/1200x/9a/80/f1/9a80f1863c39fa61afb7437bee99cf36.jpg" },
    { name: "Saree", img: "https://i.pinimg.com/736x/33/98/76/3398768402a9f489d0c8e4a7a7a20c8f.jpg" },
  ];

  return (
    <Paper elevation={1} sx={{ width: "100%", borderRadius: 0, m: 0, p: 0 }}>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none", borderBottom: "1px solid #eee", m: 0, p: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap", py: 1, px: { xs: 1, sm: 2, md: 4 } }}>
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={toggleDrawer}><MenuIcon /></IconButton>
          </Box>

          {/* Logo */}
          <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "serif", letterSpacing: 1, color: "#c0004c" }}>Brand</Typography>
            <Typography variant="subtitle2" sx={{ fontFamily: "serif", ml: 0.5, color: "#444", letterSpacing: 1 }}>fashion</Typography>
          </Box>

          {/* Search */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", mx: { xs: 1, md: 3 } }}>
            <Box sx={{ width: { xs: "95%", sm: "70%", md: "50%", lg: "40%" }, position: "relative", display: "flex", justifyContent: "center" }}>
              <Search sx={{ width: "100%", mx: "auto" }}>
                <StyledInputBase placeholder="Search for Salwar Kameez..." inputProps={{ "aria-label": "search" }} />
                <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
              </Search>
            </Box>
          </Box>

          {/* Right Icons */}
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" sx={{ color: "#c0004c", cursor: "pointer", fontWeight: 500, display: { xs: "none", sm: "block" } }}>Need Help?</Typography>

            {user ? (
              <>
                <IconButton onClick={handleMenuClick}><PersonOutlineIcon /></IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem disabled>Hello, {user.name}</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
                  <MenuItem onClick={() => navigate("/setting")}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link to="/login"><IconButton><PersonOutlineIcon /></IconButton></Link>
            )}

            <IconButton><FavoriteBorderIcon /></IconButton>
            <Link to="/AddtoCart"><IconButton><ShoppingBagOutlinedIcon /></IconButton></Link>
            <Avatar sx={{ width: 26, height: 26 }} src={`https://flagcdn.com/h40/${countrycode}.png`} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer}>
          <List>{mainMenu.map((text) => <ListItem button key={text}><ListItemText primary={text} /></ListItem>)}</List>
        </Box>
      </Drawer>

      {/* Second Menu Row */}
      <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", flexWrap: "wrap", alignItems: "center", py: 1.2, px: 0, borderBottom: "1px solid #eee", backgroundColor: "#fafafa", gap: 2, width: "100%", m: 0 }}>
        {mainMenu.map((item) => (
          <Typography key={item} variant="body2" sx={{ fontSize: 14, fontWeight: 500, cursor: "pointer", color: "#333", transition: "color 0.2s", "&:hover": { color: "#c0004c" } }}>
            {item}
          </Typography>
        ))}
        <Button variant="contained" sx={{ backgroundColor: "#9b0048", fontSize: 12, textTransform: "none", px: 2, py: 0.7, ml: 2, borderRadius: 2, "&:hover": { backgroundColor: "#b30056" } }}>
          Flat 70% Off
        </Button>
      </Box>

      {/* Scrollable Categories */}
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 9  ,
            overflowX: "auto",
            px: { xs: 1, sm: 3 },
            py: 2,
            backgroundColor: "#fff",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {miniCategories.map((cat, i) => (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                textAlign: "center",
                cursor: "pointer",
                "&:hover img": { transform: "scale(1.1)", transition: "0.3s" },
              }}
            >
              <Box
                component="img"
                src={cat.img}
                alt={cat.name}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  objectFit: "cover",
                  mb: 1,
                }}
              />
              <Typography sx={{ fontSize: 13, fontWeight: 500, lineHeight: 1.2, color: "#333", whiteSpace: "nowrap" }}>
                {cat.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
