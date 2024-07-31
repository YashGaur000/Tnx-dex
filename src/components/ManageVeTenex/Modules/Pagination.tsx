import styled from 'styled-components';

const PaginationStyle = styled.div``;
const Pagination = () => {
  return (
    <PaginationStyle>
      <button>Prev</button>
      <p>{1}</p>
      <button>Next</button>
    </PaginationStyle>
  );
};

export default Pagination;
