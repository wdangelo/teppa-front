import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../services/axios"

import swal from "sweetalert";
import { Button, Card, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";

interface IUsers {
    id: string;
    name: string;
    email: string;
}

export default function CreateUser () {
    
        const [name, setName] = useState('')
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState('')
        const [users, setUsers] = useState<IUsers[]>([])

        const router = useRouter()


             useEffect(() => {
                api.get(`/users/${email}`, {
                    headers: {
                        Autozation: email
                    }
                }).then( res => {
                    setUsers(res.data)
                    
                })
            }, [])
            

        async function handleRegister(e: any) {
            e.preventDefault();
            
            const data = { name, email, password }

                const userMail = users.filter(item => item.email === email)
                console.log(userMail.length)

                if (userMail.length == 0) {
                    await api.post('/users', data)
                    swal({
                        title: "Cadastrado com sucesso!",
                        icon: "success"
                    })
                    router.push("/")
                } else if (userMail.length > 0) {
                    swal({
                        title: "Erro",
                        text: "Usuário ja cadastrado",
                        icon: "error"
                    })

                    router.push("/")


                } else if(!data.name || !data.email || !data.password) {
                    swal({
                        title: "Erro ao cadastrar!",
                        text: "verifique o preenchimento dos campos",
                        icon: "error"
                    })
                } 

            
        }
        return(
                <>
                <NavBar />
                <Card style={{ width: '72rem', height: '32rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '12rem' }}>

                    <h1>Cadastro de Usuários</h1>
                    <Form method="POST" encType="multipart/form-data" onSubmit={handleRegister} >

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '48rem'}}>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="name" placeholder="Nome completo" value={name} onChange={e => setName(e.target.value)}  />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                    Cadastrar
                    </Button>

                </Form>
                    
                </Card>
                </>
        )
    
}