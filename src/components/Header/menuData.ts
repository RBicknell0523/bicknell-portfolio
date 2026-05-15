export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

const menuData: Menu[] = [
  { id: 1, title: "About",    newTab: false, path: "#about"    },
  { id: 2, title: "Projects", newTab: false, path: "#projects" },
  { id: 3, title: "Contact",  newTab: false, path: "#contact"  },
];

export default menuData;
