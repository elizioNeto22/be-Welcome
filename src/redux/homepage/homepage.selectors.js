import { createSelector } from 'reselect'

const selectState = (state) => state.homepage

export const selectHomepage = createSelector(
  [selectState],
  (homepage) => homepage.homepage_data
)
