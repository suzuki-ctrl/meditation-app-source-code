import useWord from '../hooks/useWord';
import { useToggle } from '../context/TogContext';
import "./Meditation.css";

const Meditation = () => {
  
  const {tog} = useToggle();

        
  return (
    
    <div className='container'>
        <div className="circle"></div>
        <p>{ tog && <Word />}</p>
        <div className={"pointer-container " + (tog && "active")}>
          <div className={"pointer " + (tog && "active")}></div>
        </div>
        <div className='out-circle'></div>
    </div>
    
  )
}

const Word = () => {
  const {words} = useWord();

  return (
    <p>{words}</p>
  )
}

export default Meditation;