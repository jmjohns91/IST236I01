import { default as AsyncStorage } from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};
const DummyDataTemplate = async (projectID, projectIcon, projectTitle, projectContents, photos, createdDate, lastEditedDate, lastMarkedProgressDate, completed) => {
  const projectData = {
    projectID,
    projectIcon,
    projectTitle,
    projectContents,
    photos,
    createdDate,
    lastEditedDate,
    lastMarkedProgressDate,
    completed,
  };

  await AsyncStorage.setItem(`@project_${projectID}`, JSON.stringify(projectData));

  let storedData = await AsyncStorage.getItem('@projectIDs');
  let projectIDs = [];
  if (storedData !== null) {
    projectIDs = JSON.parse(storedData);
  }
  if (!projectIDs.includes(projectID)) {
    projectIDs.push(projectID);
  }
  await AsyncStorage.setItem('@projectIDs', JSON.stringify(projectIDs));
};

export const createDummyData = async () => {
  const sampleProjects = [
    { projectIcon: 'tools', projectTitle: 'Rustic Wooden Coffee Table', projectContents: 'This DIY project involves building a rustic wooden coffee table, perfect for adding a cozy touch to your living room. Currently, the tabletop has been assembled and sanded, with the next steps being staining and attaching the legs. The goal is to create a sturdy, charming centerpiece for the room.', photos: [], completed: false },
    { projectIcon: 'leaf', projectTitle: 'Urban Herb Garden', projectContents: 'This project focuses on creating a small herb garden for your kitchen or balcony. Using recycled containers, the garden is halfway complete, with basil, mint, and cilantro thriving. The next step is to add parsley and thyme, aiming for a variety of flavors to enhance your cooking', photos: [], completed: true },
    { projectIcon: 'light-bulb', projectTitle: 'Homemade Solar Lamp', projectContents: 'The project involves making a solar-powered lamp for outdoor lighting. The lamp is in its initial stages, with the solar panel and LED light sourced. Upcoming steps include assembling the circuit and creating a waterproof housing. The goal is to have sustainable and efficient lighting for your garden.', photos: [], completed: false },
    { projectIcon: 'paint-palette', projectTitle: 'Custom Mural Wall Painting', projectContents: 'This creative endeavor is about transforming a plain wall into a vibrant mural. The design sketch is complete, and the painting process has just begun, starting with the background colors. The project aims to create a personal and inspiring space in your home.', photos: [], completed: true },
    { projectIcon: 'globe', projectTitle: 'Recycled World Map Cork Board', projectContents: 'This project involves making a world map corkboard using recycled materials. The corkboard has been cut out, and the map outline is drawn. The next steps include painting the continents and adding a frame. The goal is to create an eco-friendly organizational tool for your study area, perfect for pinning travel plans and photos.', photos: [], completed: false },
  ];

  for (const project of sampleProjects) {
    const projectID = uuidv4();
    const createdDate = getRandomDate(new Date(2020, 0, 1), new Date());
    const lastEditedDate = getRandomDate(new Date(createdDate), new Date());
    const lastMarkedProgressDate = getRandomDate(new Date(createdDate), new Date());

    await DummyDataTemplate(
      projectID,
      project.projectIcon,
      project.projectTitle,
      project.projectContents,
      JSON.stringify(project.photos),
      createdDate,
      lastEditedDate,
      lastMarkedProgressDate,
      project.completed
    );
  }
};
