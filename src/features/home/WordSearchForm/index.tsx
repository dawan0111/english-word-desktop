import { Button, Input, Popover } from 'antd';
import clsx from 'clsx';
import { useFormik } from 'formik';

import DaySelector from '~/components/DaySelector';

import { WordSearchFormStyled } from './styled';

interface WordSearchFormProps {
  className?: string;
  formik: ReturnType<typeof useFormik<InitialValues>>;
}

export interface InitialValues {
  keyword: string;
  startDay: null | number;
  endDay: null | number;
}

const WordSearchForm = ({ className, formik }: WordSearchFormProps) => {
  return (
    <WordSearchFormStyled className={clsx('WordSearchForm', className)}>
      <div className="left">
        <h1 className="title">{formik.values.startDay} ~ {formik.values.endDay}Days 토익 영단어</h1>
      </div>

      <form className="right" onSubmit={formik.handleSubmit}>
        <Popover
          content={(
            <Input
              name="keyword"
              placeholder="키워드를 입력해주세요"
              value={formik.values.keyword}
              onChange={formik.handleChange}
              autoFocus
            />
          )}
          placement="bottomLeft"
          trigger="click"
          destroyTooltipOnHide
        >
          <Button htmlType="button" className="item">
            <i className="bx bx-search" />
            키워드 검색
          </Button>
        </Popover>

        <Popover
          content={<DaySelector start={formik.values.startDay} end={formik.values.endDay} onChange={(start, end) => {
            formik.setValues({ ...formik.values, startDay: start, endDay: end });
          }} />}
          placement="bottomLeft"
          trigger="click"
          destroyTooltipOnHide
        >
          <Button htmlType="button" className="item">
            <i className="bx bx-calendar" />
            날짜선택
          </Button>
        </Popover>
      </form>
    </WordSearchFormStyled>
  );
};

export default WordSearchForm;
