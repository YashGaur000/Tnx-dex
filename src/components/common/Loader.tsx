import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div<{ height?: string; width?: string }>`
  border-width: 0.5rem;
  border-style: solid;
  border-color: white white white white;
  width: ${({ width }) => (width ? width : '3.625rem')};
  height: ${({ height }) => (height ? height : '3.625rem')};
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: purple;
    border-radius: 50%;
    position: absolute;
    left: 0.125rem;
    top: 0.125rem; /* Adjust the position as needed */
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

//Create functional component
export const LoadingSpinner = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <Container>
      <Loader width={width} height={height} />
    </Container>
  );
};
