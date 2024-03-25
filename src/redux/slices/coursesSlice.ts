import { createSlice } from '@reduxjs/toolkit';
import { ICourse } from 'types/Course';

type TInitialState = {
  courses: ICourse[];
  filteredCourses: ICourse[];
};

export const initialState: TInitialState = {
  courses: [],
  filteredCourses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    setFilteredCourses(state, action) {
      state.filteredCourses = action.payload;
    },
  },
});

export const { setCourses, setFilteredCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
