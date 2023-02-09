import { useState , useEffect } from "react";

const useWord = () => {

    const [words , setWords] = useState('');

    let totalTime = 6000;
    let breathTime = (totalTime / 5) * 2;
    let holdTime = totalTime / 5;
    
    const changeWord = () => {
        setWords('吸って');
        setTimeout(() => {
              setWords('止めて')
              setTimeout(() => {
                setWords('吐いて')
            }, holdTime);
            }, breathTime);
          };
          
          
          useEffect(() => {
            changeWord();
          let intervalId: NodeJS.Timer | null = null;
            intervalId = setInterval(changeWord , totalTime);

            return () => clearInterval(intervalId as NodeJS.Timer);
            //eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

        return { words };
}

export default useWord;