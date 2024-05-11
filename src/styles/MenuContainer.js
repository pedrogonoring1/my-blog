import styled from "styled-components";

export const MenuContainer = styled.nav `
    text-align: center;

    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin-right: 30px;
            font-size: 18px;
        }
    }

    a {
        color: white;
        text-decoration: none;
    }
`