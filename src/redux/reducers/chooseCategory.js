import {CHOOSE_CATEGORY} from "../actions/chooseCategory"

export default function chooseCategory(state = {}, action) {
    switch (action.type) {
      case CHOOSE_CATEGORY:
        return {
          ...state,
          ...action.id,
        };
      default:
        return state;
    }
  }
  