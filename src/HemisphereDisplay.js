import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northern.jpg';
import southernPic from './image/southern.jpg';


//configuration object to clean the code
const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southernPic
    }
}

//functional component
const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    //using this instead of the Ternary operations
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;