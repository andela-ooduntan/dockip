import * as actionTypes from '../actions/actionType.js';
import {userDocs} from './initialState';

export default function userReducer(state = userDocs, action) {
  switch (action.type) {
    case actionTypes.CHECK_USER_DOCS:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.CHANGE_CONTENT:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.GETTING_USER_DOCS:
      return Object.assign({}, state);
      break;
    case actionTypes.USER_DOCS_SUCCESS:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.SHARED_DOCUMENTS:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.CREATING_DOC:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.CREATE_DOC_SUCCESS:
      return Object.assign({}, state, action.data);
      break;
    case actionTypes.UPDATE_STORE_WITH_NEW_DOC:
      return Object.assign({}, state,
        {
          docs: [...action.data.newDoc, ...state.docs]
        }, {
          success: action.data.successState
        }
      );
      break;
    default:
      return state;
  }
}