import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

const PaginationStyle = styled.div<{ theme: DefaultTheme; fontSize: number }>`
  display: flex;
  align-items: center;

  gap: 10px;
  width: 120px;
  height: 40px;
  margin-right: 30px;
  float: right;
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
  padding: 6px;

  border: 5px solid transparent;
  border-image-source: ${({ theme }) => theme.colors.bordercolor};
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;

  width: 15px;
  height: 15px;
`;
const Pagination = () => {
  return (
    <PaginationStyle fontSize={13}>
      <label>Prev</label>
      <PageNuberShower>{1}</PageNuberShower>
      <label>Next</label>
    </PaginationStyle>
  );
};

export default Pagination;
