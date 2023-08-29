import { Box, Button } from "@chakra-ui/react"
import { useRef, useState } from "react";

const UploadFileForm = () => {
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if(e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        }else if(e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        handleFile(e?.dataTransfer?.files?.[0])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        handleFile(e?.target?.files?.[0])
    }

    const handleClick = () => {
        inputRef?.current?.click(); // keyboard click
    }

    const isValidSize = (file: File | undefined) => {
        if(!file?.size) {
            return false;
        }

        const fileSize = ((file?.size/1024)/1024).toFixed(4) // MB
        return parseInt(fileSize) <= 10
    }
    
    const handleFile = (file: File | undefined) => {
        if(!isValidSize(file)) {
            return;
        } 

        console.log(file)
    }
    
    return (
        <form id="fileUpload" 
            onSubmit={(e) => e.preventDefault()}
            onDragEnter={handleDrag}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef} 
                type="file" 
                id="inputFileUpload" 
                style={{'display': "none"}}
                onChange={handleChange}
            />
            <label htmlFor="inputFileUpload">
                <Box textAlign="center">
                    <p>
                        Drag and drop your file here or
                    </p>
                    <Button 
                        color='blue.200' 
                        textDecoration="underline"
                        variant='link'
                        onClick={handleClick}
                    >
                        Upload a file
                    </Button>
                    <p>
                        Maximum file size 50 MB.
                    </p>
                </Box>
            </label>
        </form>
    )
}

export default UploadFileForm;