import React, {Component} from 'react';
import TimePic from './TimePic';
import img1 from '../assets/img/about/1.png';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';


const images=[
    {image:img1,time:'5 december 1992r',subhead:'Beginning of Polsat',description:'Polish television channel launched on December 5, 1992 at 16:30. Polsat is the first commercial channel that has received a national broadcasting license and is also the main channel of Telewizja Polsat. As at June 2, 2017 Polsat is the most watched TV channel in Poland with a market share of 11.43%'},
    {image:img2,time:'16 march 1999r',subhead:'Beginning of sitcom',description:'Polish comedy series broadcast on Polsat since March 16, 1999, produced by ATM Grupa. It is one of the longest broadcast Polish series. He stigmatizes various flaws (laziness, egoism, alcoholism, pathologies, apathy, rudeness) and the stereotypical model of life of a Polish family, using simple humor and funny language of the characters.'},
    {image:img3,time:'24 january 2007r',subhead:'Babka is dead',description:'Character from the series The world according to the Kiepski, played by Krystyna Feldman. After the death of the actress, it was decided to also kill the characters. She went to heaven where there is no bread.'},
]

class Timeline extends Component{
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Our History</h3>
                    </div>
                    <ul class="timeline">
                            {images.map((image,i) => {
                                return <TimePic {...image} key={i} />
                            })}

                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>Be Part<br />Of Our<br />Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;


