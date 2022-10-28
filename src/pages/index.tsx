import LayoutConfig from '~/components/LayoutConfig';
import WordSearchForm from '~/features/home/WordSearchForm';
import { IndexPageStyled } from '~/styles/pageStyled/indexPageStyled';

const Index = () => {
  return (
    <IndexPageStyled>
      <LayoutConfig breadcrumbs={['메인페이지']} />
      <WordSearchForm />
    </IndexPageStyled>
  );
};

export default Index;
