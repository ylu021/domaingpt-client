import { Box, Flex, Tabs } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { TabList } from './components';
import TabViews from './components/TabViews';
import { ShowPDFContext } from '../Home/context';
import { FileView } from './components/FIleView';
import selectedTabContext from '../Home/context/SelectedTabContext';

export const ViewpaddingStyles = {
    paddingX: 5,
    paddingY: 6
}

const PDFView = ({ items }: { items: string[] }) => {
    const { showPDF } = useContext(ShowPDFContext);
    const { tabIndex, updateTab } = useContext(selectedTabContext);
    return (
        <Flex minH="100vh" flex={1} background="blue.900">
            <Tabs 
                flex={1} 
                index={tabIndex} 
                onChange={(index) => updateTab?.(index)} variant="enclosed" sx={ViewpaddingStyles}
                display="flex"
                flexDir="column"
            >
                <Box maxHeight="5rem">
                    <TabList items={items} />
                </Box>
                <Box flexGrow={12}>
                    <TabViews items={items} />
                </Box>
            </Tabs>
            { showPDF && <FileView />}
        </Flex>
    )
}

export default PDFView;