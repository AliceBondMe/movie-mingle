import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main, Wrap } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUpButton } from 'components/ScrollUpButton/ScrollUpButton';

const Layout = () => {
  return (
    <Wrap>
      <Header />

      <Main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
        <ScrollUpButton />
      </Main>

      <Footer />
    </Wrap>
  );
};

export default Layout;
