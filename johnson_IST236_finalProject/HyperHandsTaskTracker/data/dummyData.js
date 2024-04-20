import * as util from '../index';

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
const projectTitles = [
  "Build sawhorse", "Paint fence", "Renovate kitchen", "Repair bike", "Make pottery",
  "Sew curtains", "Plant garden", "Install solar panel", "Write novel", "Compose music",
  "Design website", "Organize garage", "Create board game", "Develop mobile app", "Brew coffee"
];
const ideaTitles = [
  "Learn JavaScript", "Explore React Native", "Study calculus", "Read history", "Practice guitar",
  "Exercise routine", "Meditation guide", "Travel plan", "Cooking recipes", "Photography skills",
  "Web development basics", "Effective storage solutions", "Game design principles", "App programming", "Mastering coffee art"
];

const projectContents = [
  "Need nails, glue, lumber drying", "Choose between latex or oil-based paint", "Consider marble countertops",
  "Check wheel alignment", "Buy clay and pottery wheel", "Measure windows for fabric", "Select seasonal plants",
  "Calculate required power output", "Outline chapters", "Arrange for studio time",
  "Select a theme and CMS for portfolio", "Buy storage bins and label makers", "Sketch concepts and find manufacturers",
  "Setup development environment and choose a framework", "Research and test various beans and techniques"
];

const icons = [
  { name: "tools", library: "Entypo" },
  { name: "format-paint", library: "MaterialIcons" },
  { name: "home-modern", library: "MaterialCommunityIcons" },
  { name: "pedal-bike", library: "MaterialIcons" },
  { name: "flower-tulip", library: "MaterialCommunityIcons" },
  { name: "scissors-cutting", library: "MaterialCommunityIcons" },
  { name: "leaf", library: "MaterialCommunityIcons" },
  { name: "solar-panel-large", library: "MaterialCommunityIcons" },
  { name: "notebook", library: "MaterialCommunityIcons" },
  { name: "music", library: "Entypo" },
  { name: "web", library: "MaterialCommunityIcons" },
  { name: "archive", library: "MaterialCommunityIcons" },
  { name: "dice-multiple", library: "MaterialCommunityIcons" },
  { name: "cellphone", library: "MaterialCommunityIcons" },
  { name: "coffee", library: "MaterialIcons" }
];
const ideaIcons = [
  { name: "code", library: "Entypo" },
  { name: "cellphone", library: "MaterialCommunityIcons" },
  { name: "calculator", library: "MaterialCommunityIcons" },
  { name: "book-open-page-variant", library: "MaterialCommunityIcons" },
  { name: "guitar-acoustic", library: "MaterialCommunityIcons" },
  { name: "directions-run", library: "MaterialIcons" },
  { name: "self-improvement", library: "MaterialIcons" },
  { name: "airplanemode-active", library: "MaterialIcons" },
  { name: "food-fork-drink", library: "MaterialCommunityIcons" },
  { name: "camera-alt", library: "MaterialIcons" },
  { name: "codesquare", library: "AntDesign" },
  { name: "toolbox", library: "MaterialCommunityIcons" },
  { name: "cards-playing-outline", library: "MaterialCommunityIcons" },
  { name: "code", library: "Entypo" },
  { name: "coffee-maker", library: "MaterialIcons" }
];
export const insertDummyData = async () => {
  let projectIDs = [];
  let ideaIDs = [];

  for (let i = 0; i < 15; i++) {
    const now = new Date();
    const monthsBack = i < 10 ? 1 : 6;
    const daysAhead = i < 10 ? 7 : 30;

    const oneMonthAgo = new Date(new Date().setMonth(now.getMonth() - monthsBack));
    const oneWeekAhead = new Date(new Date().setDate(now.getDate() + daysAhead));

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
      ideaIcon: ideaIcons[i],
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