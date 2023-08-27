import ACTION_TYPES from "../const/actionTypes";
import { IUserProfile, TSetUser, TGetUser } from "../../types/types";

// Users actions________________________________________________________________________________________________

export const setUser = (payload: any): TSetUser => {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: payload,
  };
};

export const getUserProfile = (payload: IUserProfile): TGetUser => {
  return {
    type: ACTION_TYPES.GET_USER_PROFILE,
    payload: { ...payload },
  };
};
