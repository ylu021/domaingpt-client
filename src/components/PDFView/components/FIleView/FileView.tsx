import { Box } from "@chakra-ui/react"
import { ViewpaddingStyles } from "../../PDFView"
import { useContext } from "react"
import { FileItemsContext, SelectedTabContext } from "@/components/Home/context"

const FileView = () => {
    const { items } = useContext(FileItemsContext);
    const { tabIndex, isNew } = useContext(SelectedTabContext);
    
    if(isNew) {
        return null;
    }

    return (
        <Box flex="1" height="inherit" backgroundColor="blue.700" sx={ViewpaddingStyles}>{items[tabIndex]}</Box>
    )
}

export default FileView