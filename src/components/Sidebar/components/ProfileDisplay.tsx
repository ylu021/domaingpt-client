import React from 'react'
import { Avatar, Flex, Link } from '@chakra-ui/react'
import useCustomer from '@/components/Home/hooks/useCustomer';

const ProfileDisplay = () => {
    const {isLoggedIn, user } = useCustomer();
    return (
        <Flex flexDirection="column" alignItems="center">
            <Avatar name={user?.name} src={user?.image} marginBottom="2" />
            { !isLoggedIn ? <Link href="/api/auth/signin">Log In</Link> : <Link href="/api/auth/signout">Log Out</Link>}
        </Flex>
    )
}

export default ProfileDisplay