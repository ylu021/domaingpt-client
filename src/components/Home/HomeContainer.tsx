import { Container, Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Sidebar } from '../Sidebar';

const HomeContainer = () => {
    return (
        <Container maxW="inherit" bgColor={'gray.100'} p="0">
            <Flex>
            <Sidebar />
            </Flex>
        </Container>
    )
}

export default HomeContainer;
