import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from "react-bootstrap";
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

const Home: NextPage = () => {

  const router = useRouter()

  async function handler() {
    router.push("users-create")
  }
  return (
    <div>
<Card style={{ width: '24rem', height: '24rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '12rem' }}>
  <Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      Não compartilhamos seus dados com nuinguém.
      </Form.Text>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Entrar
    </Button>
    </Form>

  </Card.Body>

</Card>
    </div>


  )
}

export default Home
