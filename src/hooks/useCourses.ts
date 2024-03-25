import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, setFilteredCourses } from '../redux/slices/coursesSlice';
import { baseUrl } from '../api/baseUrl';
import { RootState } from '../redux/store';
import { ICourse } from '../types/Course';

export const useCourses = () => {
  const dispatch = useDispatch();

  const { courses, filteredCourses } = useSelector((state: RootState) => state.courses);

  const fetchCourses = async () => {
    try {
      const { data } = await baseUrl.get('');
      dispatch(setCourses(data));
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const dispatchSetFilteredCourses = (filterCourse: ICourse[]) => {
    dispatch(setFilteredCourses(filterCourse));
  };

  const dispatchSetCourses = (course: ICourse) => {
    dispatch(setCourses(course));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    filteredCourses,

    dispatchSetCourses,
    dispatchSetFilteredCourses,
  };
};
