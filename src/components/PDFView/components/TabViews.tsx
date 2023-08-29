import { TabPanel, TabPanels } from "@chakra-ui/react";
import { NewTabView, TabView } from "./TabView";

const TabViews = ({
    items
}: 
{ 
    items: string[]
}) => {
    return (
        <TabPanels height="100%">
            {items.map((item, index) => 
                <TabPanel key={`tabPanel-${index}`}>
                    <TabView item={item} />
                </TabPanel>
            )}
            <TabPanel key={`tabPanel-new`} height="100%">
                <NewTabView item={'new'} />
            </TabPanel>
        </TabPanels>
    )
}

export default TabViews;