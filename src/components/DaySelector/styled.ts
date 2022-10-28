import { rgba } from 'polished';
import styled from 'styled-components';

export const DaySelectorStyled = styled.div`
  .items {
    display: flex;
    flex-wrap: wrap;
    width: calc(3rem * 5);

    .item {
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      cursor: pointer;
      position: relative;
      outline: none;
      border: none;
      background-color: transparent;
      transition: 250ms all;

      &.active {
        background-color: ${props => props.theme.colors.primary};
        transform: scale(1.05);
      }

      &.between {
        background-color: ${props => rgba(props.theme.colors.primary, 0.2)};
        border-radius: 0;
      }

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.colors.contentBG}55;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        z-index: 1;
      }

      span {
        position: relative;
        z-index: 2;
      }
    }
  }
`;
