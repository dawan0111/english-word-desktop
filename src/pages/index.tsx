import { useFormik } from 'formik';

import LayoutConfig from '~/components/LayoutConfig';
import WordSearchForm, { InitialValues } from '~/features/home/WordSearchForm';
import WordSearchList from '~/features/home/WordSearchList';
import { IndexPageStyled } from '~/styles/pageStyled/indexPageStyled';

const Index = () => {
  const formik = useFormik<InitialValues>({
    initialValues: {
      keyword: '',
      startDay: null,
      endDay: null,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

  return (
    <IndexPageStyled>
      <LayoutConfig breadcrumbs={['메인페이지']} />

      <WordSearchForm formik={formik} />
      <WordSearchList startDay={15} endDay={15} />
    </IndexPageStyled>
  );
};

export default Index;
