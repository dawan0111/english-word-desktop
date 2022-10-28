import { Button, Input, Select } from 'antd';
import clsx from 'clsx';

import { WordSearchFormStyled } from './styled';

const { Option } = Select;

interface WordSearchFormProps {
  className?: string;
}

const WordSearchForm = ({ className }: WordSearchFormProps) => {
  return (
    <WordSearchFormStyled className={clsx('WordSearchForm', className)}>
      <div className="searchInputWrap">
        <Select defaultValue="english">
          <Option value="english">영어</Option>
          <Option value="korean">한국어</Option>
        </Select>
        <Input placeholder="검색어를 입력해주세요." />
      </div>
      <div className="searchTermWrap">
        <Input placeholder="시작" type="number" />
        ~
        <Input placeholder="끝" type="number" />
      </div>
      <Button type="primary" className="submitButton">
        <i className="bx bx-search"></i>
        검색
      </Button>
    </WordSearchFormStyled>
  );
};

export default WordSearchForm;
