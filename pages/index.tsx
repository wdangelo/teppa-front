import type { NextPage } from 'next'
import Login from './login';

interface IUsers {
  id: string;
  name: string;
  email: string;
}

const Home: NextPage = () => {

  return (
    <Login />
  )
}

export default Home
