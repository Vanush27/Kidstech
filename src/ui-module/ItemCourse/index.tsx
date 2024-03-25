import React from 'react';
import { useCourses } from '../../hooks/useCourses';
import { ICourse } from '../../types/Course';

import styles from './ItemCourse.module.scss';

const ItemCourse = () => {
  const { filteredCourses } = useCourses();

  return (
    <div className={styles.container}>
      {filteredCourses?.map((course: ICourse) => (
        <div key={course.id} className={styles.container__course_item}>
          <div style={{ background: course.bgColor }} className={styles.container__box}>
            <img src={course.image} alt='Course' className={styles.container__image} />
          </div>
          <div className={styles.container__name}>
            <div>{course.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCourse;
