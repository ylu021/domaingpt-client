import { Box, Button, Flex, textDecoration } from "@chakra-ui/react";
import { NewTabViewWrapper } from "./NewTabViewStyles";

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
                <form id="fileUpload">
                    <input type="file" id="inputFileUpload" style={{'display': "none"}} />
                    <label htmlFor="inputFileUpload">
                        <Box textAlign="center">
                            <p>
                                Drag and drop your file here or
                            </p>
                            <Button color='blue.200' sx={{ 'textDecoration': 'underline' }} variant='link'>
                                Upload a file
                            </Button>
                            <p>
                                Maximum file size 50 MB.
                            </p>
                        </Box>
                    </label>
                </form>
            </NewTabViewWrapper>
        </Flex>
    )
}
export default NewTabView;