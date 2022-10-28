import { useEffect, useState } from 'react';

import clsx from 'clsx';
import useSWR from 'swr';

import instanceAxios from '~/api/axios';
import WordList from '~/components/WordList';
import { getWordResponse, Word } from '~/types/word';

import { WordSearchListStyled } from './styled';

interface WordListProps {
  className?: string;
  searchField?: string;
  searchKeyword?: string;
  startDay?: number;
  endDay?: number;
}

const WordSearchList = ({ className, startDay, endDay }: WordListProps) => {
  const { data, error } = useSWR(startDay && endDay ? 'get-word' : null, (key: string) =>
    instanceAxios.get<getWordResponse>(`?start_day=${startDay}&end_day=${endDay}`),
  );
  const [wordList, setWordList] = useState<Word[]>([]);

  useEffect(() => {
    if (data) {
      const wordData: Word[] = data
        ? data.data.results.map(result => ({
            day: result.day,
            audioLink: result.audioLink,
            english: result.english,
            korean: result.korean,
          }))
        : [];
      setWordList(wordList => [...wordList, ...wordData]);
    }
  }, [data]);

  return (
    <WordSearchListStyled className={clsx('WordSearchList', className)}>
      <WordList words={wordList} />
    </WordSearchListStyled>
  );
};

export default WordSearchList;
