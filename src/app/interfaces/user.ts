export interface User {
  id?: string;
  username?: string;
  fullName?: string;
  nsid?: string;
  api: string;
  token():string;
}
