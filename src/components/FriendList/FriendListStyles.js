import styled from 'styled-components';

export const FriendListContainer = styled.div`
  max-width: 400px;
  margin: auto;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

export const FriendListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FriendListItem = styled.li`
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
