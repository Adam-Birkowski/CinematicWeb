import React, {Component} from 'react';
import SingleService from './SingleService';
const services= [
    {title: 'Mocny-full', description: 'Delivering beer to house', icon: 'fa-beer'},
    {title: 'Babka', description: 'Sale of grandmothers whelchairs', icon: 'fa-wheelchair'},
    {title: 'WC', description: 'Toilet maintenance', icon: 'fa-toilet'},
];

class Services extends Component{
    render(){

        return(
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">There isn't job for me in this country</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) =>{
                            return <SingleService {...service} key={index}/>
                        })}

                    </div>
                </div>
            </section>
        )
    }
}

export default Services;