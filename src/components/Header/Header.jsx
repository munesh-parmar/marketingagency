import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>marketing solution agency</h1>
                <p className='text-lead'> Marketing agencies often begin by working with clients to create a marketing strategy. This involves defining goals, identifying target audiences, and planning how to reach and engage them effectively.</p>
                <a href = "/" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>get started</span>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header