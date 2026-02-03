import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMenu } from "react-icons/hi";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    justify-content: space-between;
    padding: 1.2rem 2.4rem;
  }
`;

const MobileMenuButton = styled(ButtonIcon)`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <MobileMenuButton onClick={toggleSidebar}>
        <HiOutlineMenu />
      </MobileMenuButton>

      <HeaderRight>
        <UserAvatar />
        <HeaderMenu />
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
