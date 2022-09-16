import Nav from 'react-bootstrap/Nav';
import { useRouter } from "next/router";
import { FiArrowLeftCircle } from "react-icons/fi"

function NavBar() {

  const router = useRouter();

  async function handleExit() {
    sessionStorage.clear()
    router.push('/');
  }

  async function handleUsersList() {
    router.push('/users-list');
  }

  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/users-list" onClick={ () => handleUsersList()} >Usuários</Nav.Link>
      </Nav.Item>
      <Nav.Item  className='justify-content-end'>
        <Nav.Link eventKey="link-2" onClick={ handleExit} > <FiArrowLeftCircle color='#4169E1' size={24}/></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;