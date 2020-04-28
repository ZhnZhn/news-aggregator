const CL_ROW = 'menu-more__item not-selected';

const crModelMore = ({
  onRemoveBadges
}) => ({
  baseTitleCl: CL_ROW,
  pageWidth: 186,
  maxPages: 1,
  p0: [{
    cn: CL_ROW,
    name: 'Remove All Badges',
    onClick: onRemoveBadges,
    isClose: true
  }]
})

export default crModelMore
