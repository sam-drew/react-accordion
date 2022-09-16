import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AccordionDataItem } from './types';

import Accordion from './components/Accordion';

function App() {
    const accordionItems: AccordionDataItem[] = [
        {
            title: "Test Accordion Item",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in rutrum mi, at hendrerit ante. Etiam gravida est et hendrerit pulvinar. Duis vel accumsan erat, sit amet faucibus sem. Vestibulum at metus metus. Pellentesque volutpat ligula in feugiat ornare. Suspendisse varius hendrerit suscipit. Mauris quis felis velit. In tempor, ipsum ut gravida suscipit, leo dui sagittis ligula, id bibendum felis nulla at libero. In hac habitasse platea dictumst. Curabitur vestibulum blandit mi sit amet posuere. Duis non magna in sem pulvinar sagittis. Sed id purus a urna sollicitudin commodo. Suspendisse quis pharetra felis. Ut suscipit feugiat vehicula. Cras rhoncus dignissim malesuada."
        },
        {
            title: "Test Accordion Item 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in rutrum mi, at hendrerit ante. Etiam gravida est et hendrerit pulvinar. Duis vel accumsan erat, sit amet faucibus sem. Vestibulum at metus metus. Pellentesque volutpat ligula in feugiat ornare. Suspendisse varius hendrerit suscipit. Mauris quis felis velit. In tempor, ipsum ut gravida suscipit, leo dui sagittis ligula, id bibendum felis nulla at libero. In hac habitasse platea dictumst. Curabitur vestibulum blandit mi sit amet posuere. Duis non magna in sem pulvinar sagittis. Sed id purus a urna sollicitudin commodo. Suspendisse quis pharetra felis. Ut suscipit feugiat vehicula. Cras rhoncus dignissim malesuada."
        },
        {
            title: "Test Accordion Item 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in rutrum mi, at hendrerit ante. Etiam gravida est et hendrerit pulvinar. Duis vel accumsan erat, sit amet faucibus sem. Vestibulum at metus metus. Pellentesque volutpat ligula in feugiat ornare. Suspendisse varius hendrerit suscipit. Mauris quis felis velit. In tempor, ipsum ut gravida suscipit, leo dui sagittis ligula, id bibendum felis nulla at libero. In hac habitasse platea dictumst. Curabitur vestibulum blandit mi sit amet posuere. Duis non magna in sem pulvinar sagittis. Sed id purus a urna sollicitudin commodo. Suspendisse quis pharetra felis. Ut suscipit feugiat vehicula. Cras rhoncus dignissim malesuada."
        }
    ];

    const [multipleOpen, setMultipleOpen] = useState(false);


    return (
        <div className="container">
            <h3>React Accordion Function Component</h3>
            <button onClick={() => setMultipleOpen(!multipleOpen)}>Turn {multipleOpen ? "off" : "on"} multiple open items</button>
            <Accordion data={accordionItems} multipleOpen={multipleOpen} />
        </div>
    )
}

export default App;
