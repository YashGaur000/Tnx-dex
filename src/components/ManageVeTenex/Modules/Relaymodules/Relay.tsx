import { RelayScreenContainer } from '../../Styles/Relay.style';
import Pagination from '../Pagination';
import RelayCard from './RelayCard';

const Relay = () => {
  return (
    <RelayScreenContainer>
      <RelayCard />
      <RelayCard />
      <RelayCard />
      <RelayCard />

      <div>
        <Pagination />
      </div>
    </RelayScreenContainer>
  );
};

export default Relay;
