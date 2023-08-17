import { fakeMenu1, fakeMenu2 } from "../assets/fakeData/fakeMenu";


const listFusion = [...fakeMenu1, ...fakeMenu2];
export const globalList = listFusion.flat();