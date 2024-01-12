import React from 'react';

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

export default Statistics;
