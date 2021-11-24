import { SHOW_HIDE } from "../constants/ActionTypes";
  
  const initialState = {
  show:false,
   
  }
  
  export default function showhide  (state = initialState, action) {
    switch (action.type) {
      case SHOW_HIDE:
        return {
          ...state,
          show: action.payload,
        };
    }
}