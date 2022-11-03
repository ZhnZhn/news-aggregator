import PoweredBy from './PoweredBy';

const fPoweredBy = CompLink => ({
  style
}) => (
  <PoweredBy style={style}>
    <CompLink />
  </PoweredBy>
);

export default fPoweredBy
