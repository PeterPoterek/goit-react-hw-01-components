import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  Label,
  Percentage,
} from './StatisticsStyles';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatisticsListItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
