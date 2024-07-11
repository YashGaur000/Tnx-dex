import styled from 'styled-components';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DocumentSectionContainer = styled.section`
  display: flex;
`;

function Documentation() {
  return (
    <DocumentSectionContainer>
      <Sidebar />
      <MainContent />
    </DocumentSectionContainer>
  );
}

export default Documentation;
