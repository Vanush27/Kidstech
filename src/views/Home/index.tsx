import React from 'react';
import ItemCourse from '../../ui-module/ItemCourse';
import AllTopic from '../../ui-module/AllTopic';
import { useCourses } from '../../hooks/useCourses';
import { ICourse } from '../../types/Course';

import styles from './Home.module.scss';

const Home = () => {
  const { courses, dispatchSetFilteredCourses } = useCourses();

  const handelfilterCourses = (selectedTopic: string) => {
    if (selectedTopic.includes('Все темы')) {
      dispatchSetFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course: ICourse) => course.tags.includes(selectedTopic));
      dispatchSetFilteredCourses(filtered);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__topic}>
        <AllTopic handelfilterCourses={handelfilterCourses} />
      </div>
      <div className={styles.wrapper__container}>{<ItemCourse />}</div>
    </div>
  );
};

export default Home;
