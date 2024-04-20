import * as util from '../index';

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
const projectTitles = ["Build sawhorse", "Paint fence", "Renovate kitchen", "Repair bike", "Make pottery", "Sew curtains", "Plant garden", "Install solar panel", "Write novel", "Compose music"];
const ideaTitles = ["Learn JavaScript", "Explore React Native", "Study calculus", "Read history", "Practice guitar", "Exercise routine", "Meditation guide", "Travel plan", "Cooking recipes", "Photography skills"];

const projectContents = [
  "Need nails, glue, lumber drying",
  "Choose between latex or oil-based paint",
  "Consider marble countertops",
  "Check wheel alignment",
  "Buy clay and pottery wheel",
  "Measure windows for fabric",
  "Select seasonal plants",
  "Calculate required power output",
  "Outline chapters",
  "Arrange for studio time"
];

const icons = ["tool", "paint", "home", "cycle", "flower", "scissors", "leaf", "flash", "book", "music"];
export const insertDummyData = async () => {
  let projectIDs = [];
  let ideaIDs = [];

  for (let i = 0; i < 10; i++) {
    const now = new Date();
    const oneMonthAgo = new Date(new Date().setMonth(now.getMonth() - 1));
    const oneWeekAhead = new Date(new Date().setDate(now.getDate() + 7));

    const createdDate = getRandomDate(oneMonthAgo, now);
    const lastEditedDate = getRandomDate(createdDate, oneWeekAhead);
    const lastMarkedProgressDate = getRandomDate(createdDate, lastEditedDate);

    const projectID = util.uuidv4();
    const projectData = {
      projectID,
      projectIcon: icons[i],
      projectTitle: projectTitles[i],
      projectContents: projectContents[i],
      photos: [],
      createdDate,
      lastEditedDate,
      lastMarkedProgressDate,
      completed: false
    };
    await util.AsyncStorage.setItem(`@project_${projectID}`, JSON.stringify(projectData));
    projectIDs.push(projectID);

    const ideaID = util.uuidv4();
    const ideaData = {
      ideaID,
      ideaIcon: icons[i],
      ideaTitle: ideaTitles[i],
      createdDate,
      lastEditedDate
    };
    await util.AsyncStorage.setItem(`@idea_${ideaID}`, JSON.stringify(ideaData));
    ideaIDs.push(ideaID);
  }

  await util.AsyncStorage.setItem('@projectIDs', JSON.stringify(projectIDs));
  await util.AsyncStorage.setItem('@ideaIDs', JSON.stringify(ideaIDs));
};

export const clearAllData = async () => {
  try {
    await util.AsyncStorage.clear();
    console.log('All data cleared successfully!');
  } catch (error) {
    console.error('Failed to clear data: ', error);
  }
};