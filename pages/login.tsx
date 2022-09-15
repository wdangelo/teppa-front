import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { Button, Card, Form } from "react-bootstrap";
import swal from "sweetalert";
import api from "../services/axios";

interface IUsers {
    id: string;
    name: string;
    email: string;
}

export default function Login () {
    
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  async function login(e: any) {
    e.preventDefault();
    try {

        const session = await api.post('/session', {
            email,
            password
        })

        

        if (session.data.token) {
            sessionStorage.setItem('token', session.data.token)
            router.push('users-create')
        }
        

    } catch (err) {

        swal({
            title: "Login invalido",
            text: "Usuário ou senha incorretos",
            icon: "error"
        })
    }

  }

  return (
    <div>
    <Card style={{ width: '24rem', height: '24rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '12rem' }}>
    <Card.Body>
        <Form method="POST" encType="multipart/form-data" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        Não compartilhamos seus dados com nuinguém.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
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