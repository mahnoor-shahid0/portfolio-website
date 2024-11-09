import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & Typescript based app for managing and organizing your tasks efficiently",
        img: "/Todo.png",
        tags: ["REACT", "NODE", "CSS", "TYPESCRIPT"],
    },

    {
    id: 1,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically",
    img: "/resume.png", 
    tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],
    },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center object-contain'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
