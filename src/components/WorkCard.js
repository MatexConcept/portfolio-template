import './WorkCard.css'


import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
          <img src={props.imgsrc} alt="img" />
          <h2 className="project-tittle">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>

              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
  )
}

export default WorkCard