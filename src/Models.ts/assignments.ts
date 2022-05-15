export type Assignment = {
  id: number;
  title: string;
  due_date: string;
  updated_at: string;
  submissions:[
      {
  submission_link: string,
      }
  ]
};
