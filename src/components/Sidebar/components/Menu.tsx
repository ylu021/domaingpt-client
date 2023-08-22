import { SelectedTabContext, ShowPDFContext } from "@/components/Home/context";
import { List, ListItem } from "@chakra-ui/react";
import { useContext } from "react";

const Menu = () => {
    const { updateTab, isNew } = useContext(SelectedTabContext)
    const { setShowPDF } = useContext(ShowPDFContext);
    return (
        <>
            <List display="flex" flexDir="column">
                <ListItem as="button" marginBottom="1" onClick={() => updateTab?.(-1)}>{'New PDF'}</ListItem>
                <ListItem as="button" marginBottom="1" onClick={() => !isNew && setShowPDF((prev: boolean) => !prev)}>{'Show PDF'}</ListItem>
                <ListItem as="button" marginBottom="1">{'Recent'}</ListItem>
            </List>
        </>
    )
}

export default Menu;