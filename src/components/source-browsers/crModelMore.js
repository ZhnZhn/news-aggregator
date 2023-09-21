import { CL_MENU_MORE_ITEM } from '../crStyle';

const crModelMore = ({
  onRemoveBadges
}) => ({
  titleCl: CL_MENU_MORE_ITEM,
  pageWidth: '11.625rem',
  maxPages: 1,
  p0: [{
    cn: CL_MENU_MORE_ITEM,
    name: 'Remove All Badges',
    onClick: onRemoveBadges,
    isClose: true
  }]
})

export default crModelMore
