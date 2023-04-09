import { createSlice } from '@reduxjs/toolkit';
import Project from '../components/Project';

const initialState = Project;

const ProjectSLice = createSlice({
  name: 'Projects',
  initialState,

  reducers: {
    getProject: (state) => {
      state;
    },
  },

});
export default ProjectSLice.reducer;
