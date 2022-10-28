import LayoutConfig from '~/components/LayoutConfig';
import WordSearchForm from '~/features/home/WordSearchForm';
import WordSearchList from '~/features/home/WordSearchList';
import { IndexPageStyled } from '~/styles/pageStyled/indexPageStyled';

const Index = () => {
  return (
    <IndexPageStyled>
      <LayoutConfig breadcrumbs={['메인페이지']} />
      <WordSearchForm />
      <WordSearchList startDay={15} endDay={15} />
    </IndexPageStyled>
  );
};

export default Index;
