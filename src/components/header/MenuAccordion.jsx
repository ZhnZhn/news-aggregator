import useToggleAccordion from '../hooks/useToggleAccordion';

import Menu from './Menu';

const MenuAccordion = (props) => {
  const _onToggleTopic = useToggleAccordion();
  return (
    <Menu
      {...props}
      onToggle={_onToggleTopic}
    />
  );
};

export default MenuAccordion
