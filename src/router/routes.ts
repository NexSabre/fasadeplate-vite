type CardRoutes = {
  iconName: string;
  title: string;
  description: string;
  uri: string;
  pictureName: string;
};

type NavigationItems = {
  iconName: string;
  title: string;
  uri: string;
};

export const navigationItems: NavigationItems[] = [
  {
    iconName: "mdi-home-minus-outline",
    title: "Home",
    uri: "/",
  },
];

export const navigationItemCalculators: NavigationItems[] = [
  {
    iconName: "mdi-format-columns",
    title: "Board on board calc",
    uri: "/boardonboard",
  },

  {
    iconName: "mdi-arrow-split-vertical",
    title: "Vertical calc",
    uri: "/vertical",
  },
  {
    iconName: "mdi-arrow-split-horizontal",
    title: "Horizontal calc",
    uri: "/horizontal",
  },

  {
    iconName: "mdi-pillar",
    title: "Linear meter desk calc",
    uri: "/runningmeter",
  },
  {
    iconName: "mdi-arrow-top-left-bottom-right",
    title: "Diagonal calc",
    uri: "/diagonal",
  },
];

const cardRoutes: CardRoutes[] = [
  {
    iconName: "mdi-format-columns",
    title: "Board-on-board",
    description:
      "Calculate positions if you want to lay a plank facade where one row overlaps the other.",
    uri: "/boardonboard",
    pictureName: "board_on_board.webp",
  },
  {
    iconName: "mdi-arrow-split-vertical",
    title: "Vertical desk calculator",
    description: "Calculate how many desk you need for wall.",
    uri: "/vertical",
    pictureName: "vertical_desk.webp",
  },
  {
    iconName: "mdi-arrow-split-horizontal",
    title: "Horizontal desk calculator",
    description:
      "Base on the heigth calculate how many baord you need to cover wall.",
    uri: "/horizontal",
    pictureName: "horizontal.webp",
  },
  {
    iconName: "mdi-pillar",
    title: "Linear meter calculator",
    description: "Calculate how many desk in currect meter you need.",
    uri: "/runningmeter",
    pictureName: "vertical_desk_2.webp",
  },
  {
    iconName: "mdi-arrow-top-left-bottom-right",
    title: "Diagonal calculator",
    description: "Calculate diagonal base on the short and long edge.",
    uri: "/diagonal",
    pictureName: "diagonal.webp",
  },
];

export default cardRoutes;
