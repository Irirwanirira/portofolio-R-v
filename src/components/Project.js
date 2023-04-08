import React from "react";

const Project = () => { 
  const project = [
    {
      id: 1,
      title: 'Todo',
      info: {
        client: 'CANOPY',
        role: 'Back End Dev',
        img: 'images/Counter.png',
        year: 2022,
      },
      src: 'images/Screenshot-2020-10.png',
      desription: {
        descDesktop:
              'Todo app helps you to keep on track of your activities, give you some options of editing or deleting the completed tasks.  ',
        descPopup:
              'Todo app helps you to keep on track of your activities, give you some options of editing or deleting the completed tasks. ',
      },
      technologies: ['html', 'css', 'javaScript'],
      seeProject: 'See Project',
      seeLiveLink: 'https://irirwanirira.github.io/To-do-List/',
      seeSourceLink: 'https://github.com/Irirwanirira/To-do-List',
    },
    {
      id: 2,
      title: 'Multi-Post Stories',
      info: {
        client: 'CANOPY',
        role: 'Back End Dev',
        img: 'images/Counter.png',
        year: 2015,
      },
      src: 'images/calculator.png',
      desription: {
        descDesktop:
              'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descPopup:
              'Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      },
      technologies: ['html', 'css', 'javaScript'],
      seeProject: 'See Project',
      seeLiveLink: 'https://imaginative-scone-fa9020.netlify.app/',
      seeSourceLink: 'https://github.com/Irirwanirira/math-magician',
    },
    {
      id: 3,
      title: 'Multi-Post Stories',
      info: {
        client: 'CANOPY',
        role: 'Back End Dev',
        img: 'images/Counter.png',
        year: 2015,
      },
      src: 'images/Falcon.png',
      desription: {
        descDesktop:
              'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descPopup:
              'Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      },
      technologies: ['html', 'css', 'javaScript'],
      seeProject: 'See Project',
      seeLiveLink:
          'https://deploy-preview-32--strong-heliotrope-adde83.netlify.app/',
      seeSourceLink: 'https://github.com/Irirwanirira/space-x-react-project',
    },
    {
      id: 4,
      title: 'Multi-Post Stories',
      info: {
        client: 'CANOPY',
        role: 'Back End Dev',
        img: 'images/Counter.png',
        year: 2015,
      },
      src: 'images/ccc.png',
      desription: {
        descDesktop:
              'This a simple app that displays an event of celebration, which includes names of speakers and the avenue where the celebration will occur.',
        descPopup:
              'Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      },
      technologies: ['html', 'css', 'javaScript', 'React', 'Rails'],
      seeProject: 'see Project',
      seeLiveLink: 'https://eclectic-gumption-fb13ce.netlify.app/',
      seeSourceLink: 'https://github.com/Irirwanirira/Capstone-project-1',
    },
  ];
  
  return (
    <div>
      {project.map((proj) =>
        proj.title)}
    </div>
  )
}


export default Project;
