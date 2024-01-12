import styled, { css } from 'styled-components';

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (randomColor.length < 7) {
    return '#dc2626';
  }
  return randomColor;
};

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StatisticsTitle = styled.h2`
  text-align: center;

  font-size: 24px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 75px;

  ${props => css`
    background-color: ${getRandomColor()};
  `}
`;

export const Label = styled.span`
  color: #fff;
  font-size: 16px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
