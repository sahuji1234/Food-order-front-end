import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Navbar() {
    const {auth,cart} =useSelector((store)=>store)
    const navigate = useNavigate()
    const handleAvatarClick=()=>{
      console.log("user role",auth.user)
      if(auth.user?.role==="ROLE_CUSTOMER"){
        navigate("/my-profile")
      } else(
        navigate("/admin/restaurant")
      )
    }
  return (
    <div className="px-5 sticky top-0 z-50 py-[.8rm] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl">Sahu Food</li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SavedSearchIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "green", color: "pink" }}>
              {auth.user?.fullName[0].toUpperCase()}
              </Avatar>
          ) : (
            <IconButton onClick={()=>navigate("/account/login")}><Person/></IconButton>
          )}
        </div>
        <div className="">
          <IconButton onClick={()=>navigate("/cart")}>
            {console.log("cart===>",cart.cart)}
            <Badge color="primary" badgeContent={(cart.cart?.item.length) || 0}>
              <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
