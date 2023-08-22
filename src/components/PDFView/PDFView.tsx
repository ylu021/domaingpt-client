import { Box, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TabList } from './components';
import TabViews from './components/TabViews';

const fileHistory = [
    'file1.pdf',
    'file2.pdf'
];

const PDFView = () => {
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        if(fileHistory.length) {
            setItems([...fileHistory]);
        }
    }, [fileHistory]);

    return (
        <Box minH="100vh" flex="1" background="blue.900" paddingX="5" paddingY="6">
            <Tabs variant="enclosed">
                <TabList items={items} />
                <TabViews items={items} />
            </Tabs>
        </Box>
    )
}

export default PDFView;