import { crId } from '../../utils/crId';
import useRefInit from './useRefInit';

const useId = (id) => useRefInit(() => id || crId())

export default useId
