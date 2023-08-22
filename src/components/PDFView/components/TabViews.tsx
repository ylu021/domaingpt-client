import { TabPanel, TabPanels } from "@chakra-ui/react";
import { NewTabView, TabView } from "./TabView";

const TabViews = ({
    items
}: 
{ 
    items: string[]
}) => {
    console.log(items)
    const isNew = (index: number) => index === items.length - 1
    return (
        <TabPanels>
            {items.map((item, index) => 
                <TabPanel key={`tabPanel-${index}`}>
                    <TabView item={item} />
                </TabPanel>
            )}
            <TabPanel key={`tabPanel-new`}>
                <NewTabView item={'new'} />
            </TabPanel>
        </TabPanels>
    )
}

export default TabViews;