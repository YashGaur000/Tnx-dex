import Pool from './Pool';
import styled from 'styled-components';

const P = styled.p`
  font-size: 17px;
  margin-top: 30px;
`;

const AvailablePool = () => {
  return (
    <section>
      <P>Available Pools</P>
      <div>
        <Pool />
      </div>
    </section>
  );
};

export default AvailablePool;
