import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    ${({ theme })=> css`
        h1{
            color: ${theme.colors.green};
        }
    `}
`;