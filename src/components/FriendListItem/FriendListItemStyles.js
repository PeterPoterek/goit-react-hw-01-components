import styled from 'styled-components';

export const FriendListLI = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 3px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const Name = styled.span`
  font-weight: bold;
`;
