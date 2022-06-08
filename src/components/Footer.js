import React from 'react'
// import './Footer.css'

const Footer = ({theme, setTheme}) => {
  return (
    <div className="flex flex-row justify-between items-center m-5">
      <button class='border-none focus:outline-none' type='button' onClick={() => setTheme(!theme)}>
        {theme ? '🌙':'☀️'}
      </button>
      <div className="text-white font-bold bg-purple border-2 border-solid border-purple shadow-md shadow-purple rounded-md p-0.5 hover:cursor-pointer">
        <a href='https://www.linkedin.com/in/kabir-chhabra-47045017a/'>Copyright &copy; Kabir Chhabra</a>
      </div>
    </div>
  )
}

export default Footer