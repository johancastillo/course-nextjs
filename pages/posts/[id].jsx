import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import axios from 'axios';
import Image from 'next/image';
import Title from '../../components/Title';
import { Container } from 'react-bootstrap';

const Post = () => {
    const [data, setData] = useState();

    const router = useRouter();
    const getId = router.query.id;


    useEffect(() => {
        axios.get(`http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/${getId}`)
        .then(respose => {
            setData(respose.data);
            console.log(respose.data);
        })
        .catch(error => console.error(error));
    }, [])



    return(
        <Layout>
            


        <Container>
            <br />
            <h1>Post Details</h1>
            
            <p>Post ID: {router.query.id} </p>

            <br />

            <Title>{data ? data["dcterms:title"][0]["@value"] : ""}</Title>

            <span><b>Autor:</b> {data ? data["dcterms:creator"][0]["@value"] : ""}</span>

            <br />
            <br />

            <p>
                {data ? data["dcterms:description"][0]["@value"] : ""}
            </p>
        </Container>


        </Layout>
    )
}

export default Post;
