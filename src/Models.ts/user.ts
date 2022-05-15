export type User = {
  name: { title: string; first: string; last: string };
  email: string;
  dob: { age: number };
  picture:{
      large:string;
  }
};
