import "./StartButton.css";
import { useToggle } from "../context/TogContext";

const StartButton = () => {
  const {tog , setTog} = useToggle();

  return (
    <div>
      <button onClick={() => setTog(prev => !prev)}>{tog ? "停止" : "開始"}</button>
    </div>
  )
}

export default StartButton;