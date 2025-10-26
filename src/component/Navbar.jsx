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
  Popover,
  Grid,
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
  transition: "all 0.3s ease",
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
  cursor: "pointer",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#c0004c",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 2),
  paddingRight: theme.spacing(6),
  width: "100%",
  fontSize: 14,
  transition: "all 0.2s ease",
}));

export default function Navbar1() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = useState(null);
  const [countrycode, setCountrycode] = useState("in");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  
  const open = Boolean(anchorEl);

  const handleMenuClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleDropdownOpen = (event, menuName) => {
    if (menuData[menuName]) {
      setDropdownAnchor(event.currentTarget);
      setActiveMenu(menuName);
    }
  };

  const handleDropdownClose = () => {
    setDropdownAnchor(null);
    setActiveMenu(null);
  };

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:5000/userprotection", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUser(res.data.msg))
      .catch(() => {});
  }, [token, setUser]);

  useEffect(() => {
    if (!user || !user.country) return;
    axios
      .get(`http://localhost:5000/getCountryiso/${user.country}`)
      .then((res) => setCountrycode(res.data.code.toLowerCase()))
      .catch(() => setCountrycode("in"));
  }, [user?.country]);

  const menuData = {
    "Wedding Store": {
      columns: [
        {
          title: "WEDDING DRESSES",
          items: [
            "Indian Wedding Dresses",
            "Pakistani Wedding Dresses",
            "Islamic Wedding Dresses",
            "Nikkah Dresses",
            "Punjabi Wedding Dresses",
            "Bengali Wedding Dresses",
            "Plus Size Wedding Dresses",
            "Muslim Clothing",
          ],
        },
        {
          title: "OCCASIONS",
          items: [
            { name: "BRIDAL", highlight: true },
            "Engagement",
            "Haldi",
            "Mehndi",
            "Sangeet",
            "Cocktail",
            "Reception",
            "Guest Wear",
          ],
        },
        {
          title: "PARTY DRESSES",
          items: [
            "Party Dresses",
            "Gown Party Dresses",
            "Saree Party Dresses",
            "Lehenga Party Dresses",
            "Anarkali Party Dresses",
            "Mens Party Dresses",
          ],
        },
        {
          title: "BRIDESMAIDS & GUEST WEAR",
          items: [
            "Lehengas",
            "Sarees",
            "Salwar Suits",
            "Gowns",
            "Anarkali Suits",
            "Jewellery",
          ],
        },
        {
          title: "COLLECTIONS",
          items: [
            "Mother Daughter Collection",
            "Father & Son Matching Outfits",
            "Indian Couple Outfits",
            "New Arrivals",
            "Ready To Ship",
            "Best Sellers",
            "Trending",
            "Ready To Wear",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/5f/e8/65/5fe8656f947c2538785f1908df446aab.jpg", label: "Bridal Collection" },
        { img: "https://i.pinimg.com/1200x/9a/80/f1/9a80f1863c39fa61afb7437bee99cf36.jpg", label: "Wedding Lehenga" },
      ],
    },
    "Festive Store": {
      columns: [
        {
          title: "FESTIVE WEAR",
          items: [
            "Diwali Collection",
            "Eid Collection",
            "Navratri Special",
            "Durga Puja",
            "Holi Collection",
            "Christmas Special",
            "Raksha Bandhan",
          ],
        },
        {
          title: "BY OUTFIT",
          items: [
            "Festive Sarees",
            "Festive Lehengas",
            "Anarkali Suits",
            "Sharara Sets",
            "Indo Western",
            "Gowns",
          ],
        },
        {
          title: "BY COLOR",
          items: [
            "Red Collection",
            "Gold & Beige",
            "Blue & Green",
            "Pink & Orange",
            "Multi Color",
            "Pastel Shades",
          ],
        },
        {
          title: "BY FABRIC",
          items: [
            "Silk Collection",
            "Velvet Collection",
            "Georgette",
            "Net & Chiffon",
            "Cotton Festive",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/c5/e0/fc/c5e0fc2d45aa947148a603353f8368ca.jpg", label: "Festive Collection" },
        { img: "https://i.pinimg.com/736x/1b/ef/6a/1bef6a3ba7ede35bdfc037698146eb1e.jpg", label: "Designer Wear" },
      ],
    },
    "Salwar Kameez": {
      columns: [
        {
          title: "BY STYLE",
          items: [
            "Anarkali Suits",
            "Straight Suits",
            "Palazzo Suits",
            "Sharara Suits",
            "Pakistani Suits",
            "Pant Style Suits",
            "Churidar Suits",
            "A-Line Suits",
          ],
        },
        {
          title: "BY OCCASION",
          items: [
            "Wedding Salwar Kameez",
            "Party Wear Suits",
            "Festive Wear",
            "Casual Suits",
            "Office Wear",
            "Designer Suits",
            "Daily Wear",
          ],
        },
        {
          title: "BY FABRIC",
          items: [
            "Cotton Suits",
            "Silk Suits",
            "Georgette Suits",
            "Velvet Suits",
            "Net Suits",
            "Chanderi Suits",
            "Crepe Suits",
          ],
        },
        {
          title: "BY COLOR",
          items: [
            "Black Suits",
            "Red Suits",
            "Blue Suits",
            "Green Suits",
            "Pink Suits",
            "White Suits",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/9e/c3/41/9ec34176f70a4f6ed9e87294d81f1b41.jpg", label: "Anarkali Suits" },
        { img: "https://i.pinimg.com/1200x/94/82/0d/94820d817d94115cbfa7ccd54b0669f5.jpg", label: "Pakistani Suits" },
      ],
    },
    "Bridal": {
      columns: [
        {
          title: "BRIDAL WEAR",
          items: [
            "Bridal Lehenga",
            "Bridal Sarees",
            "Bridal Anarkali",
            "Bridal Sharara",
            "Bridal Gowns",
            "Reception Wear",
            "Engagement Outfits",
          ],
        },
        {
          title: "BY REGION",
          items: [
            "North Indian Bridal",
            "South Indian Bridal",
            "Bengali Bridal",
            "Punjabi Bridal",
            "Muslim Bridal",
            "Gujarati Bridal",
          ],
        },
        {
          title: "ACCESSORIES",
          items: [
            "Bridal Jewellery",
            "Maang Tikka",
            "Necklace Sets",
            "Bangles & Kadas",
            "Bridal Clutches",
            "Dupattas",
          ],
        },
        {
          title: "BY COLOR",
          items: [
            "Red Bridal",
            "Pink Bridal",
            "Maroon Bridal",
            "Gold Bridal",
            "Pastel Bridal",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/5f/e8/65/5fe8656f947c2538785f1908df446aab.jpg", label: "Bridal Lehenga" },
        { img: "https://i.pinimg.com/736x/33/98/76/3398768402a9f489d0c8e4a7a7a20c8f.jpg", label: "Bridal Saree" },
      ],
    },
    "Saree": {
      columns: [
        {
          title: "BY STYLE",
          items: [
            "Designer Sarees",
            "Bollywood Sarees",
            "Party Wear Sarees",
            "Wedding Sarees",
            "Bridal Sarees",
            "Casual Sarees",
            "Half & Half Sarees",
            "Pre-Stitched Sarees",
          ],
        },
        {
          title: "BY FABRIC",
          items: [
            "Silk Sarees",
            "Cotton Sarees",
            "Georgette Sarees",
            "Chiffon Sarees",
            "Net Sarees",
            "Velvet Sarees",
            "Banarasi Sarees",
            "Satin Sarees",
          ],
        },
        {
          title: "BY WORK",
          items: [
            "Embroidered Sarees",
            "Printed Sarees",
            "Zari Work Sarees",
            "Stone Work Sarees",
            "Plain Sarees",
            "Sequin Sarees",
          ],
        },
        {
          title: "REGIONAL SAREES",
          items: [
            "Kanjeevaram Sarees",
            "Banarasi Sarees",
            "Chanderi Sarees",
            "Patola Sarees",
            "Paithani Sarees",
            "Bandhani Sarees",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/33/98/76/3398768402a9f489d0c8e4a7a7a20c8f.jpg", label: "Designer Sarees" },
        { img: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg", label: "Silk Sarees" },
      ],
    },
    "Lehenga": {
      columns: [
        {
          title: "BY OCCASION",
          items: [
            "Bridal Lehenga",
            "Wedding Lehenga",
            "Party Wear Lehenga",
            "Festive Lehenga",
            "Sangeet Lehenga",
            "Engagement Lehenga",
            "Reception Lehenga",
          ],
        },
        {
          title: "BY STYLE",
          items: [
            "A-Line Lehenga",
            "Circular Lehenga",
            "Sharara Lehenga",
            "Designer Lehenga",
            "Indo Western Lehenga",
            "Crop Top Lehenga",
            "Jacket Style Lehenga",
          ],
        },
        {
          title: "BY FABRIC",
          items: [
            "Silk Lehenga",
            "Velvet Lehenga",
            "Net Lehenga",
            "Georgette Lehenga",
            "Brocade Lehenga",
            "Satin Lehenga",
          ],
        },
        {
          title: "BY COLOR",
          items: [
            "Red Lehenga",
            "Pink Lehenga",
            "Blue Lehenga",
            "Green Lehenga",
            "Gold Lehenga",
            "Pastel Lehenga",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/1200x/9a/80/f1/9a80f1863c39fa61afb7437bee99cf36.jpg", label: "Bridal Lehenga" },
        { img: "https://i.pinimg.com/736x/e1/f2/a3/e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg", label: "Designer Lehenga" },
      ],
    },
    "Indo Western": {
      columns: [
        {
          title: "WOMEN",
          items: [
            "Indo Western Gowns",
            "Cape Style Suits",
            "Dhoti Pants",
            "Palazzo Suits",
            "Jacket Style Suits",
            "Crop Top Sets",
            "Fusion Sarees",
          ],
        },
        {
          title: "MEN",
          items: [
            "Indo Western Sherwani",
            "Jodhpuri Suits",
            "Nehru Jackets",
            "Kurta Pajama Sets",
            "Pathani Suits",
            "Waistcoats",
          ],
        },
        {
          title: "OCCASION",
          items: [
            "Wedding Indo Western",
            "Party Wear",
            "Festive Collection",
            "Casual Wear",
            "Cocktail Wear",
          ],
        },
        {
          title: "TRENDING",
          items: [
            "Cape Gowns",
            "Jacket Lehengas",
            "Drape Sarees",
            "Palazzo Jumpsuits",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/1b/ef/6a/1bef6a3ba7ede35bdfc037698146eb1e.jpg", label: "Indo Western" },
        { img: "https://i.pinimg.com/736x/c5/e0/fc/c5e0fc2d45aa947148a603353f8368ca.jpg", label: "Fusion Wear" },
      ],
    },
    "Plus Size": {
      columns: [
        {
          title: "CLOTHING",
          items: [
            "Plus Size Salwar Suits",
            "Plus Size Sarees",
            "Plus Size Lehengas",
            "Plus Size Gowns",
            "Plus Size Kurtis",
            "Plus Size Indo Western",
            "Plus Size Anarkalis",
          ],
        },
        {
          title: "BY OCCASION",
          items: [
            "Wedding Collection",
            "Party Wear",
            "Casual Wear",
            "Office Wear",
            "Festive Collection",
            "Bridal Plus Size",
          ],
        },
        {
          title: "SIZE RANGE",
          items: [
            "XL Size",
            "XXL Size",
            "3XL Size",
            "4XL Size",
            "5XL & Above",
            "Custom Sizes",
          ],
        },
        {
          title: "TRENDING",
          items: [
            "Palazzo Sets",
            "Long Kurtis",
            "A-Line Suits",
            "Printed Sarees",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/2b/8c/e4/2b8ce4fb487f54586d11414c9249ce9b.jpg", label: "Plus Size Collection" },
      ],
    },
    "Women": {
      columns: [
        {
          title: "ETHNIC WEAR",
          items: [
            "Salwar Kameez",
            "Sarees",
            "Lehengas",
            "Kurtis & Kurtas",
            "Palazzo Sets",
            "Anarkali Suits",
            "Gowns",
          ],
        },
        {
          title: "WESTERN WEAR",
          items: [
            "Dresses",
            "Tops & Tunics",
            "Skirts",
            "Pants & Trousers",
            "Jeans",
            "Jumpsuits",
          ],
        },
        {
          title: "BOTTOM WEAR",
          items: [
            "Palazzo Pants",
            "Churidar",
            "Leggings",
            "Dhoti Pants",
            "Salwar Pants",
            "Sharara Pants",
          ],
        },
        {
          title: "OCCASION",
          items: [
            "Party Wear",
            "Casual Wear",
            "Office Wear",
            "Festive Wear",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/c5/e0/fc/c5e0fc2d45aa947148a603353f8368ca.jpg", label: "Women Collection" },
      ],
    },
    "Men": {
      columns: [
        {
          title: "ETHNIC WEAR",
          items: [
            "Sherwani",
            "Kurta Pajama",
            "Indo Western",
            "Nehru Jacket",
            "Pathani Suits",
            "Jodhpuri Suits",
            "Bandhgala",
          ],
        },
        {
          title: "OCCASION",
          items: [
            "Wedding Wear",
            "Party Wear",
            "Festive Collection",
            "Casual Kurtas",
            "Sangeet Outfits",
          ],
        },
        {
          title: "ACCESSORIES",
          items: [
            "Turbans & Safa",
            "Mojari & Juttis",
            "Brooch & Pins",
            "Pocket Squares",
            "Stoles",
          ],
        },
        {
          title: "BY FABRIC",
          items: [
            "Silk Sherwanis",
            "Velvet Collection",
            "Cotton Kurtas",
            "Brocade",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/23/e5/04/23e504c0340715dedd9ee503a55246f7.jpg", label: "Men Collection" },
      ],
    },
    "Kids": {
      columns: [
        {
          title: "GIRLS",
          items: [
            "Lehenga Choli",
            "Salwar Suits",
            "Gowns",
            "Frocks",
            "Ethnic Sets",
            "Anarkalis",
          ],
        },
        {
          title: "BOYS",
          items: [
            "Sherwani",
            "Kurta Pajama",
            "Indo Western",
            "Nehru Jacket Sets",
            "Pathani Suits",
            "Waistcoat Sets",
          ],
        },
        {
          title: "BY AGE",
          items: [
            "0-2 Years",
            "2-5 Years",
            "5-8 Years",
            "8-12 Years",
            "12+ Years",
          ],
        },
        {
          title: "OCCASION",
          items: [
            "Wedding Wear",
            "Birthday Party",
            "Festive Wear",
            "Casual Wear",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/a2/b3/c4/a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7.jpg", label: "Kids Collection" },
      ],
    },
    "Jewellery": {
      columns: [
        {
          title: "BY TYPE",
          items: [
            "Necklace Sets",
            "Earrings",
            "Maang Tikka",
            "Bangles & Kadas",
            "Rings",
            "Nose Rings",
            "Anklets",
            "Bracelets",
          ],
        },
        {
          title: "BY OCCASION",
          items: [
            "Bridal Jewellery",
            "Wedding Jewellery",
            "Party Wear",
            "Temple Jewellery",
            "Kundan Jewellery",
            "Meenakari",
          ],
        },
        {
          title: "BY MATERIAL",
          items: [
            "Gold Plated",
            "Silver Jewellery",
            "Oxidised Jewellery",
            "Artificial Jewellery",
            "Polki Jewellery",
            "Diamond Jewellery",
          ],
        },
        {
          title: "SETS",
          items: [
            "Complete Bridal Set",
            "Necklace & Earring Set",
            "Choker Sets",
            "Layered Sets",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/b1/c2/d3/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6.jpg", label: "Jewellery Collection" },
      ],
    },
    "DIY": {
      columns: [
        {
          title: "CUSTOMIZATION",
          items: [
            "Design Your Own",
            "Custom Measurements",
            "Color Customization",
            "Fabric Selection",
            "Embroidery Options",
            "Print Customization",
          ],
        },
        {
          title: "SERVICES",
          items: [
            "Stitching Service",
            "Alteration Service",
            "Blouse Stitching",
            "Fall & Pico",
            "Resizing",
            "Repair Services",
          ],
        },
        {
          title: "CONSULTATION",
          items: [
            "Style Advice",
            "Fabric Guidance",
            "Design Consultation",
            "Virtual Try-On",
          ],
        },
      ],
      images: [
        { img: "https://i.pinimg.com/736x/c1/d2/e3/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg", label: "DIY Collection" },
      ],
    },
  };

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
    <Paper elevation={1} sx={{ width: "100%", borderRadius: 0, m: 0, p: 0 }}
       style={{ fontFamily: "'Work Sans', sans-serif" }}>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none", borderBottom: "1px solid #eee", m: 0, p: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap", py: 1, px: { xs: 1, sm: 2, md: 4 } }}>
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={toggleDrawer} sx={{ transition: "all 0.2s ease", "&:hover": { backgroundColor: alpha("#c0004c", 0.1) } }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box display="flex" alignItems="center" sx={{ cursor: "pointer", transition: "transform 0.2s ease", "&:hover": { transform: "scale(1.02)" } }}>
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
            <Typography variant="body2" sx={{ color: "#c0004c", cursor: "pointer", fontWeight: 500, display: { xs: "none", sm: "block" }, transition: "all 0.2s ease", "&:hover": { textDecoration: "underline", transform: "scale(1.05)" } }}>
              Need Help?
            </Typography>

            {user ? (
              <>
                <IconButton onClick={handleMenuClick} sx={{ transition: "all 0.2s ease", "&:hover": { backgroundColor: alpha("#c0004c", 0.1), transform: "scale(1.1)" } }}>
                  <PersonOutlineIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      borderRadius: 2,
                      "& .MuiMenuItem-root": {
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: alpha("#c0004c", 0.1),
                          color: "#c0004c",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem disabled sx={{ fontWeight: 600 }}>Hello, {user.name}</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
                  <MenuItem onClick={() => navigate("/setting")}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                <IconButton sx={{ transition: "all 0.2s ease", "&:hover": { backgroundColor: alpha("#c0004c", 0.1), transform: "scale(1.1)" } }}>
                  <PersonOutlineIcon />
                </IconButton>
              </Link>
            )}

            <IconButton sx={{ transition: "all 0.2s ease", "&:hover": { backgroundColor: alpha("#c0004c", 0.1), transform: "scale(1.1)", color: "#c0004c" } }}>
              <FavoriteBorderIcon />
            </IconButton>
            
            <Link to="/AddtoCart" style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton sx={{ transition: "all 0.2s ease", "&:hover": { backgroundColor: alpha("#c0004c", 0.1), transform: "scale(1.1)", color: "#c0004c" } }}>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Link>
            
            <Avatar 
              sx={{ 
                width: 26, 
                height: 26, 
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { 
                  transform: "scale(1.15)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }
              }} 
              src={`https://flagcdn.com/h40/${countrycode}.png`} 
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer 
        anchor="left" 
        open={mobileOpen} 
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            "& .MuiListItem-root": {
              transition: "all 0.2s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: alpha("#c0004c", 0.1),
                color: "#c0004c",
                paddingLeft: 3,
              },
            },
          },
        }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {mainMenu.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Second Menu Row with Dropdowns */}
      <Box 
        sx={{ 
          display: { xs: "none", md: "flex" }, 
          justifyContent: "center", 
          flexWrap: "wrap", 
          alignItems: "center", 
          py: 1.2, 
          px: 0, 
          borderBottom: "1px solid #eee", 
          backgroundColor: "#fafafa", 
          gap: 2, 
          width: "100%", 
          m: 0,
          position: "relative",
          zIndex: 10
        }}
           style={{ fontFamily: "'Work Sans', sans-serif" }}  
      >
        {mainMenu.map((item) => (
          <Typography
            key={item}
            variant="body2"
            onMouseEnter={(e) => handleDropdownOpen(e, item)}
            sx={{
              fontSize: 14,
             
              cursor: "pointer",
              color: activeMenu === item ? "#c0004c" : "#333",
              transition: "all 0.3s ease",
              position: "relative",
              padding: "6px 12px",
              borderRadius: 1,
              "&:hover": { 
                color: "#c0004c",
                backgroundColor: alpha("#c0004c", 0.05),
                transform: "translateY(-2px)"
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: activeMenu === item ? "80%" : "0%",
                height: "2px",
                backgroundColor: "#c0004c",
                transition: "width 0.3s ease",
              },
            }}
               style={{ fontFamily: "'Work Sans', sans-serif" }}  
          >
            {item}
          </Typography>
        ))}
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: "#9b0048", 
            fontSize: 12, 
            textTransform: "none", 
            px: 2, 
            py: 0.7, 
            ml: 2, 
            borderRadius: 2, 
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px rgba(155,0,72,0.3)",
            "&:hover": { 
              backgroundColor: "#b30056",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(155,0,72,0.4)"
            } 
          }}
             style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Flat 70% Off
        </Button>
      </Box>

      {/* Dropdown Popover */}
      <Popover
        open={Boolean(dropdownAnchor)}
        anchorEl={dropdownAnchor}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        disableRestoreFocus
        slotProps={{
          paper: {
            onMouseLeave: handleDropdownClose,
            sx: {
              mt: 0,
              minWidth: 900,
              maxWidth: 1400,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              borderRadius: 0,
              borderTop: "3px solid #c0004c",
              transition: "all 0.3s ease",
            },
          },
        }}
        TransitionProps={{
          timeout: 300,
        }}
      >
        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {/* Text Columns */}
            {activeMenu && menuData[activeMenu]?.columns.map((column, idx) => (
              <Grid item xs={12} sm={6} md={2.4} key={idx}>
                <Typography
                  variant="subtitle2"
                  sx={{
                  
                    mb: 2,
                    color: "#333",
                    fontSize: 13,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                  }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {column.title}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {column.items.map((item, i) => {
                    const isHighlighted = typeof item === "object" && item.highlight;
                    const itemName = typeof item === "object" ? item.name : item;
                    return (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          fontSize: 13,
                          color: isHighlighted ? "#c0004c" : "#666",
                          fontWeight: isHighlighted ? 600 : 400,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          padding: "4px 8px",
                          borderRadius: 1,
                          "&:hover": { 
                            color: "#c0004c",
                            backgroundColor: alpha("#c0004c", 0.05),
                            paddingLeft: "12px",
                        
                          },
                        }}
                           style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {itemName}
                      </Typography>
                    );
                  })}
                </Box>
              </Grid>
            ))}

            {/* Image Section */}
            {activeMenu && menuData[activeMenu]?.images && (
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {menuData[activeMenu].images.map((imgData, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                          transform: "translateY(-4px)"
                        },
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={imgData.img}
                        alt={imgData.label}
                        sx={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          p: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                        
                            fontSize: 14,
                          }}
                             style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {imgData.label}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Popover>

      {/* Scrollable Categories */}
      <Box sx={{ width: "100%", overflow: "hidden", backgroundColor: "#fff" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 9,
            overflowX: "auto",
            px: { xs: 1, sm: 3 },
            py: 2,
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
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)"
                },
                "&:hover img": { 
                  transform: "scale(1.15)",
                  boxShadow: "0 4px 12px rgba(192,0,76,0.3)"
                },
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
                  border: "2px solid #ddd",
                  objectFit: "cover",
                  mb: 1,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography 
                sx={{ 
                  fontSize: 13, 
                  lineHeight: 1.2, 
                  color: "#333", 
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#c0004c"
                  }
                }}
                   style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {cat.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}