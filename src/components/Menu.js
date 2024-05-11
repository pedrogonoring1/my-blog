import { Link } from "react-router-dom";
import { MenuContainer } from "../styles/MenuContainer";

export const Menu = () => (
    <MenuContainer>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Description</li>
        </ul>
    </MenuContainer>
);