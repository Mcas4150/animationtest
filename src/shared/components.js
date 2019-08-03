import styled from "@emotion/styled";

const breakpoints = [576, 768, 1000, 1200]

export const MediaQ = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)




export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;
