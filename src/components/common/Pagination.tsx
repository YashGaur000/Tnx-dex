import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface PaginationProps {
  handlePrevpage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}
const PaginationStyle = styled.div<{ theme: DefaultTheme; fontSize: number }>`
  display: flex;
  align-items: center;

  gap: 10px;
  width: 120px;
  height: 40px;
  margin-right: 0px;

  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;
const PageNuberShower = styled.p<{ theme: DefaultTheme }>`
  border: 1px solid;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 12px;

  background: ${({ theme }) => theme.colors.card},
    ${({ theme }) => theme.colors.bordercolor};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  width: 16px;
  height: 18px;
`;
const PageChenges = styled.button<{ theme: DefaultTheme }>`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  background: none;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 17.94px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.greyDark : theme.colors.whiteBorder};
  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
`;

const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Pagination: React.FC<PaginationProps> = ({
  handlePrevpage,
  handleNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <PaginationWrapper>
      <PaginationStyle fontSize={12}>
        <PageChenges onClick={handlePrevpage} disabled={currentPage === 1}>
          Prev
        </PageChenges>
        <PageNuberShower>{currentPage}</PageNuberShower>
        <PageChenges
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PageChenges>
      </PaginationStyle>
    </PaginationWrapper>
  );
};

export default Pagination;
