import React from 'react'
import './Intro.css'
import github from '../../github.png'


const Intro = () => {
    return (
        <div className='container intro'>
            <div className="vertical-center">
                <div id="myName">
                    John Cripe<br/>
                    /<br/>
                    Web Developer
                    
                </div>
                <p>
                    <a className="social-link" href="https://www.linkedin.com/in/john-cripe-1b5975174/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/ultraviolet/32/000000/linkedin.png" alt=""/>   
                    </a>
                      
                    <a className="social-link" href="https://github.com/johntc121" target="_blank" rel="noreferrer">
                        <img src={github} alt="github"/>
                    </a>

                </p>
            </div>
        </div>
    )
}

export default Intro;
