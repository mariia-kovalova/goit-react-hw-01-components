import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const statusColor = ({ isOnline }) => (isOnline ? 'green' : 'red');

export const StatusCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${statusColor};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
