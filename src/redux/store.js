import { configureStore } from '@reduxjs/toolkit';
import ProjectsReducer from '../components/Project';

const store = configureStore({
  reducer: {
    Projects: ProjectsReducer,
  },
});

export default store;
