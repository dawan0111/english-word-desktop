import styled from 'styled-components';

export const WordItemStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.colors.contentBG};
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-shadow: 0 0 10px ${props => props.theme.colors.borderColor};

  .english {
    width: 350px;
    margin-right: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .volume {
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  &:hover {
    .korean > div:before {
      backdrop-filter: blur(0px);
    }
  }
`;

export const KoreanText = styled.div<{
  hiddenText: boolean;
}>`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0.25rem;

  ${props =>
    props.hiddenText &&
    `
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    transition: 300ms ease;
    content: '';
  }
  `}
`;
