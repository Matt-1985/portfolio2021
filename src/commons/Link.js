import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const InternalOrExternalLink = ({ to, children, ...props }) =>
  to.startsWith("http") || to.startsWith("www.") ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  );

export default styled(InternalOrExternalLink)`
  font-size: 2rem;
  text-align: center;
  color: var(--primary-color);
`;

InternalOrExternalLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};
