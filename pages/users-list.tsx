import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";
import { FiXCircle, FiPlusSquare,FiEdit } from "react-icons/fi";
import swal from "sweetalert";
import Table from 'react-bootstrap/Table';
import { useRouter } from "next/router";
import api from "../services/axios"
import NavBar from "../components/NavBar";
import style from "../styles/usersList.module.css"
import Link from "next/link";

interface IUsers {
    id: string;
    name: string;
    email: string;
}

export default function ListUser () {
    
        const [name, setName] = useState('')
        const [users, setUsers] = useState<IUsers[]>([])

        const router = useRouter()

        try {
            useEffect(() => {
                api.get('/users', {
                    headers: {
                        Autozation: name
                    }
                }).then( res => {
                    setUsers(res.data)
                })
            }, [name])
            
            
        } catch (err) {
            console.log(err)
        }

        async function handleCreate() {
            router.push('/users-create')
        }

        async function handleUpdate(id: string) {
            router.push('/users-update')
        }

        async function handleDelete(id: string) {
            try {
                await api.delete(`/users/${id}`)
                swal({
                    title: "Sucesso",
                    text: "Usuário removido com sucesso!",
                    icon: "success"
                })

                router.push('/users-list')

            } catch (err) {
                swal({
                    title: "Erro",
                    text: `Erro ao remover usuário: ${err}`,
                    icon: "error"
                })
            }
            
        }
        
        
        return(
            
            <div>

            <NavBar />
            <Card style={{ width: '72rem', height: '32rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '12rem' }}>
                <h1>Usuários</h1>
                <p>
                    <button className={style.button} onClick={ () => handleCreate()}>
                        <FiPlusSquare color="#4169E1" size={36}/>
                    </button>
                    
                </p>
                <Table striped bordered hover style={{ width: '48rem'}}>

                <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className={style.button} onClick={ () => handleDelete(user.id)}>
                                            
                                            <FiXCircle color="red" />

                                        </button>

                                        <button className={style.button} >
                                            <Link href={`/users-update/${user.id}`} >
                                                <FiEdit color="#4F4F4F"/>
                                            </Link>
                                            
                                            
                                        </button>
                                        
                                    </td>
                                    
                                </tr>
                            </>
                        ) )}
                    </tbody>

                </Table>  

            </Card>
                    



                </div>
        )
    
}