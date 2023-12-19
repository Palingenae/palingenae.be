export interface Navigation {
  id: string;
  Routes: {
    Name: string;
    URL: string;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
