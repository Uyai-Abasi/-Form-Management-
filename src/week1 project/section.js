import React from "react";
import Card from "./layout";
function Section() {
    const lists1 = [
        {
            name: 'John Smith',
            time: '2 Minutes Ago',
            id: '1',
            task: 'Make a wireframe'

        },
        {
            name: 'John Doe',
            time: '5 Minutes Ago',
            id: '2',
            task: 'IOS Apps Design '

        },
        {
            name: 'John Break',
            time: '5 Minutes Ago',
            id: '3',
            task: 'Make a website'

        },
        {
            name: 'John Break',
            time: '5 Minutes Ago',
            id: '4',
            task: 'Write Content'

        }
    ]
    const lists2 = [
        {
            name: 'iOS apps design completed',
            time: '2 Minutes Ago',
            id: '1',
            task: 'Make a wireframe'

        },
        {
            name: 'Wireframe Design started',
            time: '5 Minutes Ago',
            id: '2',
            task: 'IOS Apps Design '

        },
        {
            name: 'Dashboard Design Progressing',
            time: '5 Minutes Ago',
            id: '3',
            task: 'Make a website'

        }]
   



    return (
        <>
          <Card data={lists1}/>
          <Card data= {lists2}/>
        </>
    );
}

export default Section;