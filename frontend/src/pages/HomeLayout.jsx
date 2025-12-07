import { Outlet } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop, PageLoader } from '../components';
import { usePageLoader } from '../hooks/usePageLoader';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  animation: contentFadeIn 0.6s ease-out;

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function HomeLayout() {
  const isLoading = usePageLoader();

  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <ContentWrapper>
          <Navbar />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </ContentWrapper>
      )}
    </>
  );
}
