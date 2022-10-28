import { useEffect, useState } from 'react';

import clsx from 'clsx';
import _ from 'lodash';
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
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const { data, error } = useSWR(
    startDay && endDay ? `?start_day=${startDay}&end_day=${endDay}` : null,
    (key: string) => instanceAxios.get<getWordResponse>(key),
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
      setWordList(wordData);
      setNextCursor(data.data.next_cursor);
    }
  }, [data]);

  useEffect(() => {
    const element = document.getElementById('content');
    let sendRequest = false;
    const scrollEvent = async () => {
      if (element) {
        if (element.scrollTop >= (element.scrollHeight - element.offsetHeight) * 0.9) {
          if (nextCursor && !sendRequest) {
            sendRequest = true;
            const response = await instanceAxios.get<getWordResponse>(
              `?start_day=${startDay}&end_day=${endDay}&start_cursor=${nextCursor}`,
            );
            const wordData: Word[] = data
              ? response.data.results.map(result => ({
                  day: result.day,
                  audioLink: result.audioLink,
                  english: result.english,
                  korean: result.korean,
                }))
              : [];

            setNextCursor(response.data.next_cursor);
            setWordList(wordList => [...wordList, ...wordData]);
          }
        }
      }
    };
    if (element) {
      element.addEventListener('scroll', scrollEvent);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', scrollEvent);
      }
    };
  }, [startDay, endDay, nextCursor]);

  return (
    <WordSearchListStyled className={clsx('WordSearchList', className)}>
      <WordList words={wordList} />
    </WordSearchListStyled>
  );
};

export default WordSearchList;
