import { Box, Divider, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import useCustomer from '../Home/hooks/useCustomer'
import { Logo, Menu, ProfileDisplay } from './components';

const Sidebar = () => {
    return (
        <Box minH="100vh" minW="200px" width="30%" bgColor={'blue.800'} paddingX="5" paddingY="6">
            <Flex height="100%" flexDir="column" justifyContent="space-between" alignItems="center">
                <Logo />
                <Menu />
                <ProfileDisplay />
            </Flex>
        </Box>
    )
}
export default Sidebar