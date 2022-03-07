import { Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import {useRouter} from "next/router"

const User = ({user}) => {
    const router = useRouter();
    

    if(router.isFallback){
        return <div>CARGANDO...</div>
    }

    console.log(user);

    return(
        <Layout>

            <Container>

                <Title>User Details</Title>

                <p>User ID: {user.id}</p>

                <h4>{user.name}</h4>
                <span>{user.email}</span>
                <p>{user.address.street}</p>

            </Container>


        </Layout>
    )
}

export async function getStaticPaths(user) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // const paths = [
    //     {params: {id: "1"}},
    //     {params: {id: "2"}},
    //     {params: {id: "3"}},
    //     {params: {id: "4"}},
    // ]

    const paths = users.map(user => {
        return {
            params: {id: `${user.id}`}
        }
    })

    return {
        paths: paths,
        fallback: true
    }

}

export async function getStaticProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {
            user
        }
    }

}


export default User;
