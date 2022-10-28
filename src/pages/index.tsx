import { useFormik } from 'formik';

import LayoutConfig from '~/components/LayoutConfig';
import WordSearchForm, { InitialValues } from '~/features/home/WordSearchForm';
import WordSearchList from '~/features/home/WordSearchList';
import { IndexPageStyled } from '~/styles/pageStyled/indexPageStyled';

const Index = () => {
  const formik = useFormik<InitialValues>({
    initialValues: {
      keyword: '',
      startDay: 1,
      endDay: 3,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <IndexPageStyled>
      <LayoutConfig breadcrumbs={['메인페이지']} />

      <WordSearchForm formik={formik} />
      <WordSearchList startDay={formik.values.startDay || 1} endDay={formik.values.endDay || 1} />
    </IndexPageStyled>
  );
};

export default Index;
