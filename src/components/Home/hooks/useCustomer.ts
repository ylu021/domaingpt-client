import { useSession } from "next-auth/react";

interface User {
    name: string,
    email: string,
    image: string
}

const useCustomer = (): { user: User, isLoggedIn: boolean } => {
    const { data: session, status} = useSession();
    const isLoggedIn = status === 'authenticated';
    return {user: session?.user, isLoggedIn};
}

export default useCustomer