import Nav from 'react-bootstrap/Nav';


function NavBar() {

  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Usuários</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Sair X</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;