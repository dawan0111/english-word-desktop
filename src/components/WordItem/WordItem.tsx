import { Button } from 'antd';
import clsx from 'clsx';

import useAudio from '~/hooks/useAudio';
import { Word } from '~/types/word';

import { KoreanText, WordItemStyled } from './styled';

export interface WordItemProps extends Word {
  className?: string;
  hiddenKorean?: boolean;
}

const WordItem = ({ className, english, korean, day, audioLink, hiddenKorean }: WordItemProps) => {
  const { toggle } = useAudio(audioLink);
  return (
    <WordItemStyled className={clsx('WordItem', className)}>
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
    </WordItemStyled>
  );
};

export default WordItem;
