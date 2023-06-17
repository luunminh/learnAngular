export interface User {
  name: string;
  email: string;
  password: string;
  certificates?: { language: 'string'; certificate: 'string' }[];
}
