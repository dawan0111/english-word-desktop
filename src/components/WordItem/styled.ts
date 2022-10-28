import styled from 'styled-components';

export const WordItemStyled = styled.div<{
  playing: boolean;
}>`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.colors.contentBG};
  border: 1px solid ${props => props.theme.colors.borderColor};

  overflow: hidden;

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

  ${props =>
    props.playing &&
    `
    background: ${props.theme.colors.contentBG};
    border: 1px solid ${props.theme.colors.primary};
  `}
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

export const BackgroundWave = styled.div<{
  playing: boolean;
}>`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 300ms ease;

  ${props =>
    props.playing &&
    `
    opacity: 1;
  `}
`;
