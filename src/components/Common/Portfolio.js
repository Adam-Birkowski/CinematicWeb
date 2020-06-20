import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';
import img1 from '../assets/img/portfolio/img1.jpg';
import img2 from '../assets/img/portfolio/img2.jpg';
import img3 from '../assets/img/portfolio/img3.jpg';
import img4 from '../assets/img/portfolio/img4.jpg';
import img5 from '../assets/img/portfolio/img5.jpg';
import img6 from '../assets/img/portfolio/img6.jpg';

const portfolio =[
    {title:'Thanos',subtitle:'#Chill', image: img1},
    {title:'Ferdek x Babka',subtitle:'#Renta', image: img2},
    {title:'Ferdek x MocnyFull',subtitle:'#Beer', image: img3},
    {title:'Halynka',subtitle:'#Pośredniak', image: img4},
    {title:'Pazdzioch',subtitle:'#Menda', image: img5},
    {title:'Boczek',subtitle:'#Afera', image: img6},

];

class Portfolio extends Component{
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Memes portfolio</h2>
                        <h3 className="section-subheading text-muted">From Polsat Cinematic Universe</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item,index) =>{
                            return <PortfolioItem {...item} key={index} />
                        })}

                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;