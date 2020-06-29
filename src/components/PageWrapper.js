import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';


class PageWrapper extends Component{

    clickHandler = (e) => {
        // console.log(e.target.href);
        const myTarget = e.target.dataset.href;
        // console.log(myTarget);
        // console.log($("#" + myTarget))
        $("html, body").animate(
            {
                scrollTop: $("#" + myTarget).offset().top - 72,
            },
            1000
        );

    }
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/"><img src="assets/img/navbar-logo.svg" onClick={this.clickHandler} data-href="root" alt="" /></Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" onClick={this.clickHandler} data-href="services" to="#services-page-section">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" onClick={this.clickHandler} data-href="portfolio" to="#portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" onClick={this.clickHandler} data-href="about" to="#about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" onClick={this.clickHandler} data-href="team" to="#team">Team</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger"  onClick={this.clickHandler} data-href="contact" to="#contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
            {this.props.children}
            </div>
        )
    }
}


export default PageWrapper;

