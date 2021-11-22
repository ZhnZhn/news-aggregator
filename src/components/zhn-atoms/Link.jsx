
const Link = ({ title, ...restProps }) => (
 <a className="link" {...restProps} target="_blank">
    {title}
 </a>
);

export default Link
