import { CL_MENU_MORE_ITEM } from '../styles/CL';

const crModelMore = ({
  onRemoveBadges
}) => ({
  titleCl: CL_MENU_MORE_ITEM,
  pageWidth: 186,
  maxPages: 1,
  p0: [{
    cn: CL_MENU_MORE_ITEM,
    name: 'Remove All Badges',
    onClick: onRemoveBadges,
    isClose: true
  }]
})

export default crModelMore
