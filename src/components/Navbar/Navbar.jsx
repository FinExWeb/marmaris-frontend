import React from 'react'
// import logo
import Brand from '../../images/icon/brand.svg'

// import css file
import './navbar.css'
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="brand">
                    <img src={Brand} alt="Brand" />
                </div>
                <div className="navbar-content">
                    <h1>BAHO BERING! / ОЦЕНИТЕ НАС! / RATE US!</h1>
                    <h3>BU BIZ UCHUN MUHIM / ЭТО ДЛЯ НАС ВАЖНО / IT IS IMPORTANT FOR US!</h3>
                </div>
            </div>
        </>
    )
}

export default Navbar