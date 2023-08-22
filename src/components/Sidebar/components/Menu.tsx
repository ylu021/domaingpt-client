import { List, ListItem } from "@chakra-ui/react";

const Menu = () => {
    return (
        <>
            <List>
                <ListItem>{'New PDF'}</ListItem>
                <ListItem>{'Show PDF'}</ListItem>
                <ListItem>{'Recent'}</ListItem>
            </List>
        </>
    )
}

export default Menu;