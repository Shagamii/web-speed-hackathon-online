import { ACTION_COMMENT_LIST_FETCHED } from './comment_list_actions';

export function commentListReducer(state = [], action) {
  switch (action.type) {
    case ACTION_COMMENT_LIST_FETCHED: {
      return action.data.comments.slice(0);
    }

    default: {
      return state;
    }
  }
}
