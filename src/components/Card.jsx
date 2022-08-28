import React from 'react'
import image from '../../public/assets/Rectangle 77.png'
const Card = (props) => {
  return (
    <section className='Card_container'>
      <img src={props.el.imageUrl} alt="" className="Card_left" />
      <div className='Card_right'>
        <div className="Card_info">
            <i className="fas fa-map-marker-alt icon"></i>
            <span className="Card_location">{props.el.location}</span>
            <a href={props.el.googleMapsUrl}>View On Google Maps</a>
        </div>
        <p className="Card_title">{props.el.title}</p>
        <p className="Card_time">{props.el.startDate +" - "+props.el.endDate}</p>
        <p className="Card_desc">{props.el.description}</p>
      </div>
    </section>
  )
}

export default Card
