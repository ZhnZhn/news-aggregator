const PATH_TO_SVG_SPRITE = './sprite.svg';

const UseLogoById = (props) => (
  <use
     style={props.style}
     href={`${PATH_TO_SVG_SPRITE}#${props.id}Logo`}
  />
);

export default UseLogoById
