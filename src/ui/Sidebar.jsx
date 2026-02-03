import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/3;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    width: 26rem;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${(props) =>
      props.$isOpen ? "0 0 20px rgba(0,0,0,0.2)" : "none"};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
  display: ${(props) => (props.$isOpen ? "block" : "none")};

  @media (min-width: 1200px) {
    display: none;
  }
`;

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={closeSidebar} />
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
