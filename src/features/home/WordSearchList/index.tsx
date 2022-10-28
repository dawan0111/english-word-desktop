import clsx from 'clsx';

import WordList from '~/components/WordList';

import { WordSearchListStyled } from './styled';

interface WordListProps {
  className?: string;
  searchField?: string;
  searchKeyword?: string;
  startDay?: number;
  endDay?: number;
}

const WordSearchList = ({ className }: WordListProps) => {
  return (
    <WordSearchListStyled className={clsx('WordSearchList', className)}>
      <WordList />
    </WordSearchListStyled>
  );
};

export default WordSearchList;
