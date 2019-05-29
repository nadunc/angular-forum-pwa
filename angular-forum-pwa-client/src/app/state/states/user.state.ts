export interface IUserState {
  username: string;
  fname: string;
  lname: string;
  token: string;
  userRole: string;
  isLoggedIn: boolean;
}

export const initialSate: IUserState = {
  username: '',
  fname: '',
  lname: '',
  token: '',
  userRole: '',
  isLoggedIn: false
};
