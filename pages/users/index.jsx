import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Link from "next/link";

const Users = ({users}) => {
    return(
        <Layout>

            <Title>Users Page</Title>

            {
                users.map((user) => {
                    return(
                        <Link href="/users/[id]" as={`/users/${user.id}`} key={user.id}>
                            <a>
                                <div>
                                    <h4>{user.name}</h4>
                                    <p>Email: {user.email}</p>
                                    <p>Address: {user.address.street}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Website: {user.website}</p>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }

        </Layout>
    )
};



export async function getStaticProps(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();


    return {
        props: {
            users
        }
    }

}



export default Users;
