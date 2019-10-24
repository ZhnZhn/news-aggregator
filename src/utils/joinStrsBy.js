
const joinStrsBy = (arr=[], delimeter=', ') => arr
  .filter(Boolean)
  .join(delimeter);

export default joinStrsBy
