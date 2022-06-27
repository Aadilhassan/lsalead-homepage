import React from 'react'
import './Footer.css'
import {FaFacebook, FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
export default function Footer() {
  return (
<><hr />
        <div className='main'><div className='copy'><h6>Copyrights By LSALead – 2022. All Rights Reserved.</h6></div>
        <div className='icon'><FaFacebook style={{margin:'10px'}}/><FaTwitter style={{margin:'10px'}}/><FaInstagram style={{margin:'10px'}}/><FaLinkedinIn style={{margin:'10px'}}/></div></div>
        </>
  )
}
