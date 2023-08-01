import ACTION_TYPES from "../const/actionTypes";
import { IState } from "../../types/types";

export const initialState: IState = {
  boardsCreated: [],
  userProfile: [],
  authUser: null,
  isSignedIn: false,
};

console.log(initialState);

type TAction = {
  type: string;
  payload: any;
};

const reducer = (state = initialState, action: TAction): IState => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER: {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case ACTION_TYPES.GET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
    case ACTION_TYPES.IS_SIGNED_IN: {
      return {
        ...state,
        isSignedIn: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
