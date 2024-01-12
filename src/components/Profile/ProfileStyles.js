import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 400px;
  background-color: gray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
`;

export const Tag = styled.p`
  color: gray;
  margin: 5px 0;
`;

export const Location = styled.p`
  margin: 5px 0;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-size: 1.2em;
`;
