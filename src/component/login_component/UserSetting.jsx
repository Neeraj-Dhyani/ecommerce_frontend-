import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";

export default function UserSetting() {
   const [values, setValues] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const token = localStorage.getItem('token');
  const [openDelete, setOpenDelete] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const updateEmail = async()=>{
    try{
      const res = await axios.put( "http://localhost:5000/changeEmail", {email:values.email},{
        headers:{
           Authorization: "Bearer " + token
        }
      },{ withCredentials: true })
      alert(res.data.msg)
    }catch(err){
      alert(err)
    }}

  const updatePhone = async()=>{
    try{
      const res = await axios.put( "http://localhost:5000/changePhonenumber", {email:values.phone},{
        headers:{
           Authorization: "Bearer " + token
        }
      },{ withCredentials: true })
      alert(res.data.msg)
    }catch(err){
      alert(err)
    }}

  const updateAddress = async()=>{
    try{
      const res = await axios.put( "http://localhost:5000/updateAddress", {email:values.address},{
        headers:{
           Authorization: "Bearer " + token
        }
      },{ withCredentials: true }, )
      alert(res.data.msg)
    }catch(err){
      alert(err)
    }}
    
  
  const deleteUser = async () =>{
     try{
      const res = await axios.delete( "http://localhost:5000/deleteUser", {
        headers:{
           Authorization: "Bearer " + token
        }
      },{ withCredentials: true })
      localStorage.removeItem("token");
      alert(res.data.msg)
    }catch(err){
      alert(err)
    }}
  
  return (
    <>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={4}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: "100%", borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          User Settings
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="subtitle1" gutterBottom>Email</Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField
            fullWidth
            label="New Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={updateEmail}>
            Update
          </Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>Phone</Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField
            fullWidth
            label="New Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={updatePhone}>
            Update
          </Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>Address</Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField
            fullWidth
            label="New Address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={updateAddress}>
            Update
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={() => setOpenDelete(true)}
        >
          Delete Account
        </Button>

        {/* Confirm Delete Dialog */}
        <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete your account? This action cannot be undone.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
            <Button color="error" variant="contained" onClick={deleteUser}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  </>
  );

}