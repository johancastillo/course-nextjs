import {useRouter} from 'next/router';
import Navigation from '../../widgets/Navigation';


const Post = () => {

    const router = useRouter();

    return(
        <div>
            <Navigation />
            <h1>Post Details</h1>
            
            <p>Post ID: {router.query.id} </p>
        </div>
    )
}

export default Post;
