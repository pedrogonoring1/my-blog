import { HeaderContainer } from "../styles/HeaderContainer";
import { HeaderInfo } from "./HeaderInfo";
import { Menu } from "./Menu";

export const Header = () => {

    return (
        <HeaderContainer>
            <Menu></Menu>
            <HeaderInfo></HeaderInfo>
        </HeaderContainer>
    );
}