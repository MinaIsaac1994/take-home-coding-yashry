import {CHOOSE_CATEGORY} from "../actions/chooseCategory"

export default function chooseCategory(state =null, action) {
    switch (action.type) {
      case CHOOSE_CATEGORY:
        return action.id
        
      default:
        return state;
    }
  }
  