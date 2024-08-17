import React from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
export const Navbar = () => {
    return (

        <div className="flex nav justify-around bg-amber-400">
            <div className=""><img src={logo} className="logo1 " alt="logo" /></div>
                <div className="p-8 font-bold hover:text-white">Home</div>
                <div className="p-8 font-bold hover:text-white">Menu</div>
                <div className="p-8 font-bold hover:text-white">ContactUs</div>
        </div>
    )
}
