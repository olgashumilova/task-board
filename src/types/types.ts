export interface IUserProfile {
  id: number;
  email: string;
  password: string;
  isSignedUp: boolean;
}

// State types

export interface IState {
  boardsCreated: [];
  userProfile: IUserProfile | null;
}

// Actions

export type TSetUser = {
  type: string;
  payload: IUserProfile | null;
};

export type TGetUser = {
  type: string;
  payload: IUserProfile;
};

export type TRemoveUserProfile = {
  type: string;
  payload: IUserProfile;
};

export type TActions = TSetUser | TGetUser | TRemoveUserProfile;
