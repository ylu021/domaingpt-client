import { Container, Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Sidebar } from '../Sidebar';
import { PDFView } from '../PDFView';

const HomeContainer = () => {
    return (
        <Container maxW="inherit" bgColor={'gray.100'} p="0">
            <Flex flexDir="row">
                <Sidebar />
                <PDFView />
            </Flex>
        </Container>
    )
}

export default HomeContainer;
