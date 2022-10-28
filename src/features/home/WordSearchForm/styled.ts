import styled from 'styled-components';

export const WordSearchFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .left {
    .title {
      margin: 0;
    }
    .total {
      opacity: 0.7;
    }
  }

  > .right {
    display: flex;

    > .item {
      display: flex;
      align-items: center;
      border-radius: 8px;
      height: 3rem;
      padding: 0 1.5rem;
      cursor: pointer;
      transition: 500ms all;

      + .item {
        margin-left: 1.5rem;
      }

      > .bx {
        margin-right: 0.5rem;
        margin-left: -0.3rem;
      }
    }
  }
`;
