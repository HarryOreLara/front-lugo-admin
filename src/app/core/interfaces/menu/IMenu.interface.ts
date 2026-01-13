
export interface IMenu {
  id: number;
  name: string;
  node: string;
  code: string;
  typeMenu: string;
  route: string;
  icon: string;
  children: Array<IMenu>;
}