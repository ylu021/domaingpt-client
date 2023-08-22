import { createContext } from "react";

interface selectedTabContextProps {
    updateTab?: (index: number) => void; 
    tabIndex: number;
    isNew: boolean;
}

const selectedTabContext =  createContext<selectedTabContextProps>({
    tabIndex: 0,
    isNew: false
});

export default selectedTabContext;