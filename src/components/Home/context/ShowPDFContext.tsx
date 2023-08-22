import { createContext } from "react";

interface ShowPDFContextProps {
    setShowPDF?: any;
    showPDF: boolean;
}

const ShowPDFContext =  createContext<ShowPDFContextProps>({
    showPDF: false
});

export default ShowPDFContext;