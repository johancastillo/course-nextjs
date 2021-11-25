import {useState, useEffect} from "react"
import Link from "next/link";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import { Col, Container, Row } from "react-bootstrap";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const newPosts = await response.json();
            console.log(newPosts);
            setPosts(newPosts);
        }

        fetchPosts();
    }, [])

    return(
        <Layout>

            <Container>
                <Row>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>

            <Title>Posts</Title>
            <p>All fine!</p>
            
            <div>
                {
                    posts.map((posts) => {
                        return(
                            <div key={posts.id}>
                                
                                <Link href="/posts/[id]" as={`/posts/${posts.id}`}>
                                    <h2>{posts.title}</h2>
                                </Link>

                                <p>{posts.body}</p>
                            </div>
                        )
                    })
                }
            </div>
            
        </Layout>
    )
}


export default Posts;

