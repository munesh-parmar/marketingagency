import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>Crafting and executing email campaigns to reach and engage a brand's subscribers and potential customers!</p>
                <span className='text'>&copy; {date.getFullYear().toString()} Agency.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
