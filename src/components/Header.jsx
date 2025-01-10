import styled from 'styled-components';
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  align-items: center;
  gap: 10%;
`;
const LoginButton= styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
`

function Header() {
  return (
    <div className="container">
      <div className="logo">      {/* company Logo */}
        <a href="#">
          <img
            src="https://img.freepik.com/premium-vector/gob-logo-design-initial-letter-gob-monogram-logo-using-hexagon-shape_1101554-23167.jpg"
            alt="logoPic"
          />
          <h1>GOBs Quiz</h1>
        </a>
      </div>
      < div className="navigation">   {/* Navigation Links */}
        <NavList>
          <a className="linkTemp" href="/">
            Home
          </a>
          <a className="linkTemp" href="/#tempCont">
            Templates
          </a>
          <a className="linkTemp" href="/#mainTesti">
            Testimonials
          </a>
        </NavList>
      </div>
      <LoginButton>
        <button id="signIn">LogIn</button>
        <button id="signUp">Sign Up</button>
      </LoginButton>
    </div>
  );
}

export default Header;
