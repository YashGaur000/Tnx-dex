import styled from 'styled-components';
import Sidebar from '../../components/Documents/Sidebar';
import MainContent from '../../components/Documents/MainContent';
import { Separator } from '../../components/common/index';
import { useEffect } from 'react';

const DocumentSectionContainer = styled.section`
  display: flex;
`;

function Documentation() {
  useEffect(() => {
    document.title = 'Tenex-Documentation';
  }, []);
  return (
    <DocumentSectionContainer>
      <Sidebar />
      <Separator
        top="1vm"
        left="18%"
        width="1px"
        height="80%"
        leftLarge="25%"
        leftMedium="26%"
        displaySmall="none"
      />
      <MainContent />
    </DocumentSectionContainer>
  );
}

export default Documentation;
