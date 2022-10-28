import { Button, Input, Popover } from 'antd';
import clsx from 'clsx';
import { useFormik } from 'formik';

import DaySelector from '~/components/DaySelector';

import { WordSearchFormStyled } from './styled';

interface WordSearchFormProps {
  className?: string;
}

interface InitialValues {
  keyword: string;
  startDay: null | number;
  endDay: null | number;
}

const _initialValues: InitialValues = {
  keyword: '',
  startDay: null,
  endDay: null,
};

const WordSearchForm = ({ className }: WordSearchFormProps) => {
  const formik = useFormik({
    initialValues: _initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <WordSearchFormStyled className={clsx('WordSearchForm', className)}>
      <div className="left">
        <h1 className="title">토익 영단어 목록</h1>
        <div className="total">2,400개의 결과 찾음</div>
      </div>

      <form className="right" onSubmit={formik.handleSubmit}>
        <Popover
          content={<Input placeholder="키워드를 입력해주세요" autoFocus />}
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
          content={<DaySelector />}
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
