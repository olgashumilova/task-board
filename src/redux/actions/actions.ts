import ACTION_TYPES from "../const/actionTypes";
import {
  IUserProfile,
  TSetUser,
  TGetUser,
  TIsSignedIn,
} from "../../types/types";

// Users actions________________________________________________________________________________________________

export const setUser = (payload: IUserProfile): TSetUser => {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: { ...payload },
  };
};

export const getUserProfile = (payload: IUserProfile): TGetUser => {
  return {
    type: ACTION_TYPES.GET_USER_PROFILE,
    payload: { ...payload },
  };
};

export const isSignedIn = (payload: boolean): TIsSignedIn => ({
  type: ACTION_TYPES.IS_SIGNED_IN,
  payload: payload,
});
