import React from 'react'
import '../style/footer.css'
import { useSelector } from 'react-redux';

const Footer = () => {
  const mode = useSelector((state) => state.theme.darkMode);

  return (
    <div className='footer'
    style={{
      background: mode ? "#000" : "#fff",
      color: mode ? "#fff" : "#000",
      borderTop:mode?"2px solid #fff":""
    }}
    >©Copyright 2025. Powered by Dashrath Yadav</div>
  )
}

export default Footer