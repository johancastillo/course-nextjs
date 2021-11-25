import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

const User = () => {
    const router = useRouter();

    console.log(router.query.user);

    return(
        <Layout>
            <Title>User Details</Title>

            <p>User ID: {router.query.id}</p>
        </Layout>
    )
}


export default User;
