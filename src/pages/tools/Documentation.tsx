import styled from 'styled-components';
import Sidebar from '../../components/Documents/Sidebar';
import MainContent from '../../components/Documents/MainContent';

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
