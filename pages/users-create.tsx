import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../services/axios"

import swal from "sweetalert";

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
                <div>
                    <h1>Cadastro de Usuários</h1>
                <form method="POST" encType="multipart/form-data" onSubmit={handleRegister} >
                    <p>nome</p>
                    <input type="text" name="name" id="name"  value={name} onChange={e => setName(e.target.value)} />
                    <p>email</p>
                    <input type="text" name="email" id="name" value={email} onChange={e => setEmail(e.target.value)} />
                    <p>password</p>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <p>
                    <button type="submit">Cadastrar</button>
                    </p>
                    
                </form>
            </div>
        )
    
}