import React from 'react';

const Project = () => {
  const project = [
    {
      id: 1,
      title: 'Todo',
      src: require('./images/holla.jpg'),
      seeProject: 'https://stackoverflow.com/questions/37841236/render-images-sources-from-parsed-array-of-objects-in-react-native',

    },
    {
      id: 2,
      title: 'Multi-Post Stories',
      src: require('./images/holla.jpg'),
      seeProject: 'https://stackoverflow.com/questions/37841236/render-images-sources-from-parsed-array-of-objects-in-react-native',

    },
    {
      id: 3,
      title: 'Multi-Post Stories',
      src: require('./images/holla.jpg'),
      seeProject: 'https://stackoverflow.com/questions/37841236/render-images-sources-from-parsed-array-of-objects-in-react-native',

    },
    {
      id: 4,
      title: 'Multi-Post Stories',
      src: require('./images/holla.jpg'),
      seeProject: 'https://stackoverflow.com/questions/37841236/render-images-sources-from-parsed-array-of-objects-in-react-native',
    },
  ];

  return (
    <div>
      {project.map((proj) => (
        <div key={proj.id}>
          <a href={proj.seeProject}>
            <img
              src={proj.src}
              alt={proj.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
