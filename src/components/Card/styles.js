import styled from '@emotion/styled'


export const Container = styled.div`
    background: white;
    width: 100%;
    max-width: ${(props) => props.width || '0px'};
    height: ${(props) => props.height || '0px'};
    border-radius: ${(props) => props.radius || '0px'};
    display: flex;
    flex-direction: column;
    flex:1 1 auto;
    margin:5px;
  `;

export const HeadSection = styled.div`
    margin: 4% ;
    > h1 {
      margin: 0;
      color: black;
    };
    > span {
      color: gray;
    }
  `;

export const HeartSection = styled.div`
  padding: 0 20px;
  transition: 0.8s;
  opacity: 1;
  & span {
    color: gray;
    font-weight: bold;
  }
    & span:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `;

export const BodySection = styled.div`
  transition: 0.8s;
  opacity: 1;
    & img:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  > div {
    padding: 20px;
  }
  `;

export const SharedSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
  `;