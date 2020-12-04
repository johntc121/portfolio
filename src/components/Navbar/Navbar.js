import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';
import classnames from 'classnames';




class Navbar extends Component {
    state = {
        prevScrollPos: window.pageYOffset,
        showNav: true
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        const {prevScrollPos} = this.state;

        const currentScrollPos = window.pageYOffset;
        const showNav = prevScrollPos > currentScrollPos;
        this.setState({
            prevScrollPos: currentScrollPos,
            showNav: showNav,
        })
    }

    render() {
        // const showNavBar = this.state.showNav;
        // console.log(this.state)
        return(
            <div className={classnames("container","navbar", {
                "navbar--hidden": !this.state.showNav,
                'fadeIn': this.state.showNav === true,
                'fadeOut':this.state.showNav === false
            })}>

                {/* <div>
                    {showNavBar ? (
                        <ul>
                            <NavLink className="navLink" to='/'><i className="material-icons">code</i></NavLink>
                            <NavLink className="navLink" to='/about'>About Me</NavLink>
                            <NavLink className="navLink" to='/projects'>Projects</NavLink>
                            <NavLink className="navLink" to='/contact'>Contact Me</NavLink>
                            <NavLink className="navLink" to='/'><i className="material-icons">code</i></NavLink>
                        </ul>
                    ): (
                        null
                    )}
                </div> */}
                <ul>
                    <NavLink className="navLink" to='/'><i className="material-icons">code</i></NavLink>
                    <NavLink className="navLink" to='/about'>About Me</NavLink>
                    <NavLink className="navLink" to='/projects'>Projects</NavLink>
                    {/* <NavLink className="navLink" to='/contact'>Contact Me</NavLink> */}
                    <NavLink className="navLink" to='/'><i className="material-icons">code</i></NavLink>
                </ul>
            </div>
        )
    }
}

export default Navbar