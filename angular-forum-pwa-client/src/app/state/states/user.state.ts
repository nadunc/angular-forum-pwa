export interface IUserState {
  username: string;
  fname: string;
  lname: string;
  token: string;
  isLoggedIn: boolean;
}

export const initialSate: IUserState = {
  username: '',
  fname: '',
  lname: '',
  token: '',
  isLoggedIn: false
};
