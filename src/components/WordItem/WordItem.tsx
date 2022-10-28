import Wave from 'react-wavify';

import { Button } from 'antd';
import clsx from 'clsx';
import { useTheme } from 'styled-components';

import useAudio from '~/hooks/useAudio';
import { Word } from '~/types/word';

import { BackgroundWave, KoreanText, WordItemStyled } from './styled';

export interface WordItemProps extends Word {
  className?: string;
  hiddenKorean?: boolean;
}

const WordItem = ({ className, english, korean, day, audioLink, hiddenKorean }: WordItemProps) => {
  const { playing, toggle } = useAudio(audioLink);
  const theme = useTheme();
  return (
    <WordItemStyled className={clsx('WordItem', className)} playing={playing}>
      <div className="volume">
        <Button
          onClick={() => {
            toggle();
          }}
        >
          <i className="bx bxs-volume-full"></i>
        </Button>
      </div>
      <div className="english">{english}</div>
      <div className="korean">
        <KoreanText hiddenText={Boolean(hiddenKorean)}>{korean}</KoreanText>
      </div>
      <BackgroundWave playing={playing}>
        <Wave
          mask="url(#mask)"
          fill={theme.colors.primary}
          paused={!playing}
          options={{
            height: 30,
            amplitude: 10,
            speed: 0.5,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
            </mask>
          </defs>
        </Wave>
      </BackgroundWave>
    </WordItemStyled>
  );
};

export default WordItem;
