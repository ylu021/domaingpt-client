import { Box, Button, Flex, textDecoration } from "@chakra-ui/react";
import { NewTabViewWrapper } from "./NewTabViewStyles";
import UploadFileForm from "./UploadFileForm";

const NewTabView = ({ item }: {item: string}) => {
    const dropHandler = (e) => {

    } 

    const dragOverHandler = (e) => {
        console.log("File(s) in drop zone");
        e.preventDefault()
    } 

    return (
        <Flex 
            width="100%" 
            height="inherit" 
            justifyContent="center"
            alignItems="center"
        >
            <NewTabViewWrapper 
                id="fileDropZone" 
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                // onClick={}
            >
                <UploadFileForm />
            </NewTabViewWrapper>
        </Flex>
    )
}
export default NewTabView;