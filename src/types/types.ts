export interface IUserProfile {
  id: number;
  email: string;
  password: string;
  isSignedUp: boolean;
}

// State types

export interface IState {
  boardsCreated: [];
  userProfile: null | IUserProfile;
  isSignedIn: boolean;
}

// Actions

export type TSetUser = {
  type: string;
  payload: IUserProfile;
};

export type TGetUser = {
  type: string;
  payload: IUserProfile;
};

export type TIsSignedIn = {
  type: string;
  payload: boolean;
};

export type TLoginSuccessAction = {
  type: string;
  payload: IUserProfile;
};

export type TActions = TSetUser | TGetUser | TIsSignedIn | TLoginSuccessAction;
