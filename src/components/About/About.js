import React from 'react';
import picture from '../../me.jpg'

const About = () => {
    return(
        <div className="container about">
            <div className="row">
                <div className="col s7 push-s5">
                    <span className="flow-text">
                        <h4>Hello! My name is John Cripe.</h4>
                        <p className="about-text">I am an aspiring developer currently attending the University of Oregon with
                            an expected graduation date of June 2020.
                        </p>
                        <p className="about-text">I have experience with the fundamentals for Front End Development as well as Javascript frameworks like React.
                            I am also comfortable with other languages, including Java, Python, and C# for Unity Game Development.
                        </p>
                        <p className="about-text">Outside of the coding side of things, I enjoy playing video games, playing sports,
                            and most importantly, spending time with my two young kids.
                        </p>
                    </span>
                </div>
                <div className="col s5 pull-s7">
                    <img src={picture} alt="self" width="85%"/>
                </div>
            </div>
            <div className="email-link-text">
                <span className="flow-text">
                    <p>
                        Feel free to email me at <a href = "mailto: johntc121@gmail.com">johntc121@gmail.com</a>
                    </p>
                </span>
            </div>
        </div>
    )
}

export default About;