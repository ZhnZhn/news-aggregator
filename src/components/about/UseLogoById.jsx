const PATH_TO_SVG_SPRITE = './sprite.svg';

const UseLogoById = ({
  id,
  style
}) => (
  <use
     style={style}
     href={`${PATH_TO_SVG_SPRITE}#${id}Logo`}
  />
);

export default UseLogoById
