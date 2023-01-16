import { configureStore } from '@reduxjs/toolkit';

import Reducer from '../reducers/reducer';

const store = configureStore({ reducer: Reducer });

export default store;
