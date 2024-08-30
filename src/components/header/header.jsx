import { useState } from 'react'
import './header.css'
export function Header({mode,setmode}) {
    const[style,setstyle]=useState("text-light ")

    function modechange(){ 
        if(mode==="dark"){
            setmode("light");
            setstyle('text-dark')
        }else{
            setmode("dark");
            setstyle('text-light')
        }
    }
    
    return (
        <>
            <header  className={`d-flex bg-light justify-content-between fs-5 p-2 bg-${mode}`}>
                <div className="logo">
                    <a href="#">MyFolio</a>
                </div>
                <div className="nav-bar ">
                        <a className={style} href="#">Home</a>
                        <a className={style} href="#">About</a>
                        <a className={style} href="#">Skills</a>
                        <a className={style} href="#">Experience</a>
                        <a className={style} href="#footer">Contact</a>
                </div>
                <div className="d-flex hire-me">
                    <button className=" btn btn-warning  hire-me">HIRE ME</button>
                    <div className='form-switch mt-2 '>
                        <input onChange={modechange} className='form-check-input' type='checkbox'></input>
                    </div>
                </div>
            </header>
        </>
    )
}