import React, { ReactNode } from "react";
import theme from "../../theme";
import styled from "styled-components";

const StyledHeading = styled.div`
  font-family: ${theme.fonts.display};
`;

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Heading Properties
 */
interface HeadingProps {
  /** Semantic heading level (e.g. h1, h2...) of the Heading. Also dictates size.*/
  level: HeadingLevel;
  /** Override for rendering the component at a different size than the semantic level */
  size?: HeadingLevel;
  children?: ReactNode;
}

/**
 *  Component to be used as HTML headings.
 */
const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  return <StyledHeading as={props.level}>{props.children}</StyledHeading>;
};

export default Heading;
