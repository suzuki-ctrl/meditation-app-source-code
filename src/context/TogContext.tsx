import { useState, createContext, useContext } from "react";

const ToggleContext = createContext(
    {} as {
        tog :boolean;
        setTog: React.Dispatch<React.SetStateAction<boolean>>
    });

const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
    const [tog, setTog] = useState<boolean>(false);
    return (
        <ToggleContext.Provider value={{tog, setTog}}>
            {children}
        </ToggleContext.Provider>
    )
}

export const useToggle = () => useContext(ToggleContext);
export default ToggleProvider;