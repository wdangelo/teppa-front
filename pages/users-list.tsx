import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useRouter } from "next/router";
import api from "../services/axios"

interface IUsers {
    id: string;
    name: string;
    email: string;
}

export default function ListUser () {
    
        const [name, setName] = useState('')
        const [users, setUsers] = useState<IUsers[]>([])

        //const router = useRouter()

        try {
            useEffect(() => {
                api.get('/users', {
                    headers: {
                        Autozation: name
                    }
                }).then( res => {
                    setUsers(res.data)
                    console.log(res.data)
                })
            }, [name])
            
            
        } catch (err) {
            console.log(err)
        }

        async function handleRegister(e: any) {
            e.preventDefault();
            
        }
        return(

                <div>

                    
            <Card style={{ width: '72rem', height: '32rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '12rem' }}>
                <h1>Usuários</h1>
                <Table striped bordered hover style={{ width: '48rem'}}>

                <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            </>
                        ) )}
                    </tbody>

                </Table>  

            </Card>
                    



                </div>
        )
    
}