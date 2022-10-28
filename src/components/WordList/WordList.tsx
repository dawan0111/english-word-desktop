import { useState } from 'react';

import { Switch } from 'antd';
import clsx from 'clsx';

import { Word } from '~/types/word';

import WordItem from '../WordItem';
import { WordListStyled } from './styled';

export interface WordListProps {
  className?: string;
  words: Word[];
}

const WordList = ({ className, words }: WordListProps) => {
  const [hiddenKorean, setHiddenKorean] = useState(false);
  return (
    <WordListStyled className={clsx('WordList', className)}>
      <div>
        정답 숨기기 <Switch onChange={checked => setHiddenKorean(checked)} />
      </div>
      {words.map(word => (
        <WordItem key={word.english} {...word} hiddenKorean={hiddenKorean} />
      ))}
    </WordListStyled>
  );
};

export default WordList;
