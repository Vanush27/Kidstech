import React from 'react';
import styles from './AllTopic.module.scss';
import { LIST_TOPICS } from '../../utils/list';

interface IAllTopicProps {
  handelfilterCourses: (item: string) => void;
}
const AllTopic = ({ handelfilterCourses }: IAllTopicProps) => {
  return (
    <div className={styles.topic}>
      {LIST_TOPICS.map((item, index) => {
        return (
          <div
            className={styles.topic__container}
            key={index}
            onClick={() => handelfilterCourses(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default AllTopic;
