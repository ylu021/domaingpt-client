import React, { useEffect, useState } from "react";
import NewTab from "./NewTab";
import { Tabs, TabList as StyledTabList, Tab } from "@chakra-ui/react";

const TabList = ({
    items
}: 
{ 
    items: string[]
}) => {
    // if there is file already open
    // else add a tab at the end if not already there
    return (
        <StyledTabList>
            {items.map((tab, index) => {
                return <Tab key={`tab-${index}`}>{tab}</Tab>
            })}
            <NewTab />
        </StyledTabList>
    )
}

export default TabList;