import {useRouter} from 'next/router';
import Navigation from '../../widgets/Navigation';

const User = () => {
    const router = useRouter();

    console.log(router.query.user);

    return(
        <div>
            <Navigation />
            <h1>User Details</h1>

            <p>User ID: {router.query.id}</p>
        </div>
    )
}


export default User;
