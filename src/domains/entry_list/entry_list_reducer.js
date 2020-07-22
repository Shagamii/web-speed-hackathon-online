import { ACTION_ENTRY_LIST_FETCHED } from './entry_list_actions';

export function entryListReducer(state = [], action) {
  switch (action.type) {
    case ACTION_ENTRY_LIST_FETCHED: {
      return action.data.entries.slice(0);
    }

    default: {
      return state;
    }
  }
}
