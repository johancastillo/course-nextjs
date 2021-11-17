import Link from 'next/link';


const Navigation = () => {
    return(
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>

            <Link href="/users">
                <a>Users</a>
            </Link>

            <Link href="/posts">
                <a>Posts</a>
            </Link>

            <Link href="/posts/[id]" as={`/posts/${1}`}>
                <a>Post #1</a>
            </Link>

        </nav>
    )
}


export default Navigation;
