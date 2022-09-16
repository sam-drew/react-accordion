import { useState, useEffect } from "react";
import "./Accordion.css";

import { AccordionDataItem } from "../types";

export default function Accordion({ data, multipleOpen }: {data: AccordionDataItem[], multipleOpen: boolean }) {
    // Keep track of which accordion items are open.
    // Convert the data array to an object with indexes as keys and open/closed booleans as values.
    const [openItems, setOpenItems] = useState<object>(Object.assign({}, new Array(data.length).fill(false)));

    // Use the effect hook to ensure that all items are closed when multiple open is turned off
    useEffect(() => {
        if (!multipleOpen) {
            setOpenItems(Object.assign({}, new Array(data.length).fill(false)));
        }
    }, [multipleOpen])

    // onToggle method, updates the state object to reflect which items are open/closed.
    // If multiple open is false, and an item is opened, all other items should be closed.
    const onToggle = (index: number) => {
        console.log("toggle clicked");
        console.log(index);
        let tempOpenItems = {};
        // If the item being toggled is currently closed (i.e. it's being opened) and multipleOpen
        // is false, set all other items to be closed.
        if (!openItems[index as keyof typeof openItems] && !multipleOpen) {
            tempOpenItems = Object.assign({}, new Array(data.length).fill(false));
            tempOpenItems = { ...tempOpenItems, [index]: true}
        } else {
            tempOpenItems = { ...openItems, [index]: !openItems[index as keyof typeof openItems]};
        }
        console.log(tempOpenItems);
        setOpenItems(tempOpenItems);
    }

    return(
        <div className="accordionWrapper">
           {data.map((item, index) => (
                <div key={index}>
                    <div className={`accordionItemHeader ${openItems[index as keyof typeof openItems] ? "headerActive" : undefined}`} onClick={() => onToggle(index)}>
                        <div className="accordionItemTitle">{item.title}</div>
                        <div className="accordionItemToggle">{openItems[index as keyof typeof openItems] ? "↑" : "↓"}</div>
                    </div>
                    <div className={`accordionItemContent ${openItems[index as keyof typeof openItems] ? "itemActive" : undefined}`}>{item.content}</div>
                </div>
           ))}
        </div>
    )
}