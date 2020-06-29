import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/home-page.jpg';

//reusable components
import Services from '../Common/Services';
import Potrfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
import Contact from '../Common/Contact';


class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    title="Welcome to my project"
                    subtitle="I hope that you enjoy"
                    buttonText="Tell me more"
                    link="#"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Potrfolio/>
                <Timeline/>
                <Team/>
                <Contact/>

            </div>
        )
    }
}

export default Home;