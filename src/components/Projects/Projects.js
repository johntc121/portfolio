import React from 'react';

import p1 from '../../ospScreenshot.png'
import p2 from '../../recipeScreenshot.png'
import p3 from '../../movieFinderSS.png'
import p4 from '../../relaxer.png'
import './Project.css'


const Projects = () => {
    
    return(
        <div className="container projects">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={p1} alt="project" className="activator project-image"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Old Soul Pizza<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-action">
                            <p>
                                <a href="https://github.com/johntc121/OldSoulPizza" target="_blank" className="project-links">View Source</a>
                                <a href="https://oldsoulpizza.firebaseapp.com/" target="_blank" className="project-links">View Project</a>
                            </p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Old Soul Pizza<i className="material-icons right">close</i></span>
                            <p>Business website for a local Pizza restaurant.</p>
                            <p>Built with vanilla Javascript, HTML, and CSS/Bootstrap.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                        <div className="card sticky-action">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={p2} alt="project" className="activator project-image"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Recipe Finder<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-action">
                                <p>
                                    <a href="https://github.com/johntc121/react-recipes" target="_blank" className="project-links">View Source</a>
                                    <a href="https://reactrecipefinder.herokuapp.com/" target="_blank" className="project-links">View Project</a>
                                </p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Recipe Finder<i className="material-icons right">close</i></span>
                                <p>React App for finding multiple recipes based on what is being searched for.</p>
                                <p>Built using create-react-app, fetch api, and the Edaman recipe finder api call.</p>
                            </div>
                        </div>
                </div>
                <div className="col s12 m6 "> {/* offset-m3 */}
                        <div className="card sticky-action">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={p3}alt="project" className="activator project-image"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Movie Finder<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-action">
                                <p>
                                    <a href="https://github.com/johntc121/MovieFinder" target="_blank" className="project-links">View Source</a>
                                    <a href="https://react-movie-find.netlify.app/" target="_blank" className="project-links">View Project</a>
                                </p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Movie Finder<i className="material-icons right">close</i></span>
                                <p>Movie Finder app built with React.</p>
                                <p>React app that uses the fetch api and the moviedb api.</p>
                            </div>
                            
                        </div>
                </div>
                <div className="col s12 m6 "> {/* offset-m3 */}
                        <div className="card sticky-action">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={p4}alt="project" className="activator project-image"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Relaxer App<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-action">
                                <p>
                                    <a href="https://github.com/johntc121/Relax" target="_blank" className="project-links">View Source</a>
                                    <a href="https://sad-meitner-96e61d.netlify.app/" target="_blank" className="project-links">View Project</a>
                                </p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Relaxer App<i className="material-icons right">close</i></span>
                                <p>Relaxer/Breathe App built with CSS, Javascript, and HTML</p>
                                
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
