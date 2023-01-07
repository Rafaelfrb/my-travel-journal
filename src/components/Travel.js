import React from 'react'
import pin from '../images/Fill220.png'

export default function Travel(props) {
    return(
        <div className='--travel_container'>
            <img src={props.travelInfo.imageUrl}></img>
            <div>
                <div className='--country_name_container'>
                    <img src={pin} />
                    <p>{props.travelInfo.location}</p>
                    <a href={props.travelInfo.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='--travel_title'>{props.travelInfo.title}</h2>
                <p className='--travel_date'>{props.travelInfo.startDate} - {props.travelInfo.endDate}</p>
                <p className='--travel_description'>{props.travelInfo.description}</p>
            </div>
        </div>
    )
}