import { crId } from '../../utils';
import useRefInit from './useRefInit';

const useId = (id) => useRefInit(() => id || crId())

export default useId
