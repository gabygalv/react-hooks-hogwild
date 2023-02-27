import { useState } from "react";

export default function Hogtiles ({ hog }) {
 
const [details, setDetails] = useState(true) 
const toggleDetails = () => {
  setDetails( details => !details)
}

return (
  <div className="ui four wide column image pigTile" 
  onClick={toggleDetails}>
    {details ? <Simple hog={hog}/> : <Detailed hog={hog}/>}
  </div>
)
}

const Simple = ({ hog }) => {
  return (
  <>
  <h1>{hog.name}</h1>
  <img src={hog.image} alt={hog.name} />
  </>
  )
}

const Detailed =  ({ hog }) => {
  return (
  <>
  <h1>{hog.name}</h1>
  <img src={hog.image} alt={hog.name} />
  <h4>Weight: {hog.weight} lbs</h4>
  <h4>Speciality: {hog.specialty}</h4>
  <h4>{hog.greased ? "Good & greased" : "Not Greased :("}</h4>
  <h4>Highest Medal: {hog["highest medal achieved"]}</h4>
  </>
  )
}