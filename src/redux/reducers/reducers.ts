import ACTION_TYPES from "../const/actionTypes";
import { IState } from "../../types/types";

type TAction = {
  type: string;
  payload: any;
};

const initialState: IState = {
  boardsCreated: [],
  userProfile: null,
};

const reducer = (state = initialState, action: TAction): IState => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER: {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
    case ACTION_TYPES.GET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
