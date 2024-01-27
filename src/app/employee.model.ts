export interface Employee{
  id: number;
  name: string;
  designation: string;
  manager?: Employee; //This represents the manager relationship
}
