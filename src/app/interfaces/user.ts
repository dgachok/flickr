export interface User {
  id?: string;
  username?: string;
  fullName?: string;
  nsid?: string;
  api: string;
  frob: string;
  token():string;
}
