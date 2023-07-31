import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav 
        className='flex justify-between items-center w-full h-14 px-20'
        style={{
            boxShadow:"0px -3px 12px -4px",
            position:"fixed",
            background:"#fff",
        }}
    >
        <div>Logo</div>
        <ul className='flex items-center justify-between' style={{width:"25%"}}>
            <li className='' >
                <Link 
                    href="/" 
                    style={{fontSize:"1.2rem"}}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link href="/">About me</Link>
            </li>
            <li>
                <Link href="/">Projects</Link>
            </li>
            <li>
                <Link href="/">Get in touch</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation
