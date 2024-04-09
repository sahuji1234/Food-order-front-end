import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='px-5 z-50 py-[.8rm] bg-[#e91e63] lg:px-20 flex justify-between'>
        
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li className='logo font-semibold text-gray-300 text-2xl'>Sahu Food</li>
            </div>
        
        <div className="flex items-center space-x-2 lg:space-x-10">
            <div className=''>
                <IconButton>
                    <SavedSearchIcon sx={{fontSize:"2.5rem"}}/>
                </IconButton>
            </div>
            <div className="">
                <Avatar sx={{bgcolor:"white", color:"pink"}}>
                    C
                </Avatar>
            </div>
            <div className=''>
                <IconButton>
                    <Badge color="primary" badgeContent={3}>
                        <ShoppingCartIcon sx={{fontSize:"2.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>
            </div>
    </div>
  )
}
