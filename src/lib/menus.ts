export interface IMenu {
  label: string;
  value: string;
}
export const menus: IMenu[] = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "JavaScript",
    value: "/javascript",
  },
  {
    label: "TypeScript",
    value: "/typescript",
  },
  {
    label: "React",
    value: "/react",
  },
];
