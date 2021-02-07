import styled from '@emotion/styled'
import LoadingDots from '../LoadingDots';


export const Loading = () => {
  const Co = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: 'Source Sans Pro';
      font-size: 30px;
      font-weight: bold;
  `;
  return (
    <Co>Loading<LoadingDots /></Co>
  );
}