import { createContext } from "react";

interface FileItemsContextProps {
    setItems?: any; 
    items: string[];
}

const FileItemsContext =  createContext<FileItemsContextProps>({
    items: []
});

export default FileItemsContext;