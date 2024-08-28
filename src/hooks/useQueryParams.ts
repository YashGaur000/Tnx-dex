import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const getParam = (param: string) => queryParams.get(param);

  return getParam;
};

export default useQueryParams;
