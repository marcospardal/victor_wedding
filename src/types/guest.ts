export enum CompanionType {
  CHILD = "Filho",
  SPOUSE = "Cônjuge",
  PARENT = "Pai/Mãe",
  FAMILY = "Família",
}

export type Companions = {
  name: string;
  type: string;
};