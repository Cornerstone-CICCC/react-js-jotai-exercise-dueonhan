import { atom } from "jotai";

const firstNameAtom = atom<string>("");
const lastNameAtom = atom<string>("");
const ageAtom = atom<number>(18);
const hobbiesAtom = atom<string[]>([]);

export { firstNameAtom, lastNameAtom, ageAtom, hobbiesAtom };
