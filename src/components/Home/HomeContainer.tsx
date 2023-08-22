import { Container, Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react';
import { Sidebar } from '../Sidebar';
import { PDFView } from '../PDFView';
import { FileItemsContext, SelectedTabContext, ShowPDFContext } from './context';

const fileHistory = [
    'file1.pdf',
    'file2.pdf'
];

const HomeContainer = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [isNew, setIsNew] = useState(false);

    const updateTab = (index: number) => {
        if( index === -1 || index === items.length) {
            // new
            // get the length of history and 
            // setTabIndex()
            setTabIndex(items.length)
            setIsNew(true)
        }else {
            setIsNew(false)
            setTabIndex(index)
        }
    }
    // do a ref and context for updating tab
    const defaultValue = {
        updateTab,
        tabIndex,
        isNew
    };

    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        if(fileHistory.length) {
            setItems([...fileHistory]);
        }
    }, []);

    const [showPDF, setShowPDF] = useState(false);

    return (
        <ShowPDFContext.Provider value={{
            setShowPDF,
            showPDF
        }}>
            <FileItemsContext.Provider value={{
                setItems,
                items
            }}>
                <SelectedTabContext.Provider value={defaultValue}>
                    <Container maxW="inherit" bgColor={'gray.100'} p="0">
                        <Flex flexDir="row">
                            <Sidebar />
                            <PDFView tabIndex={tabIndex} items={items} />
                        </Flex>
                    </Container>
                </SelectedTabContext.Provider>
            </FileItemsContext.Provider>
        </ShowPDFContext.Provider>
    )
}

export default HomeContainer;
