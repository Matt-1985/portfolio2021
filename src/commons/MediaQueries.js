export const breakpoints = {
  sm: 43,
  md: 62,
  lg: 82,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}em) { ${style} }`;
};
