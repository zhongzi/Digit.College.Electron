import type { Reducer } from 'redux';

import type { ActionOf } from '../../store/actions';
import { ROOT_WINDOW_ICON_CHANGED } from '../actions';
import type { RootWindowIcon } from '../common';

type RootWindowIconAction = ActionOf<typeof ROOT_WINDOW_ICON_CHANGED>;

export const rootWindowIcon: Reducer<
  RootWindowIcon | null,
  RootWindowIconAction
> = (state = null, action) => {
  switch (action.type) {
    case ROOT_WINDOW_ICON_CHANGED: {
      return action.payload;
    }

    default:
      return state;
  }
};
