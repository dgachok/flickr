export interface User {
  token: any;
  id?: string;
  username?: string;
  fullName?: string;
  api: string;
  nsid: string;
  (): any;
}
