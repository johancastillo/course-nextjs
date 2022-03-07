import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Title from "../components/Title";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";

export default function Home ({posts}){
  // const [data, setData] = useState(false);
  // const [filterTitle, setFilterTitle] = useState(false);
  // const [filterAuthor, setFilterAuthor] = useState(false);
  // const [filterContent, setFilterContent] = useState(false);

  // const getAllItems = () => {
  //   axios
  //     .get("http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/")
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   getAllItems()
  // }, []);


  // const changeFilterTitle = (text) => {
  //   if(text){
  //     const newData = data.filter(post => post["dcterms:title"][0]["@value"].includes(text));
  //     setData(newData);
  //   }else{
  //     getAllItems()

  //     console.log("Filter for Title");
  //   }
  // }

  // const changeFilterAuthor = (text) => {
  //   if(text){
  //     const newData = data.filter(post => post["dcterms:creator"][0]["@value"].includes(text));
  //     setData(newData);

  //   }else{
  //     getAllItems()

  //     console.log("Filter for Author");
  //   }
  // }

  // const changeFilterContent = (text) => {

  //   if(text){
  //     const newData = data.filter(post => post["dcterms:description"][0]["@value"].includes(text))
  //     setData(newData);

  //   }else{
  //     getAllItems()
  //   }
    

  //   console.log("Filter for Content");
  // }

  return (
    <Layout>
            <Head>
                <title>Holaaa</title>
                
            </Head>

      <Image
        src="/banner.jpg"
        layout="responsive"
        width={700}
        height={475}
        priority="true"
      />

      <br />

      <Container>
        <FormControl
          type="search"
          placeholder="Buscar por titulo"
          className="me-2"
          aria-label="Search"
        />

        <br />

        <FormControl
          type="search"
          placeholder="Buscar por autor"
          className="me-2"
          aria-label="Search"
        />

        <br />

        <FormControl
          type="search"
          placeholder="Buscar en el contenido"
          className="me-2"
          aria-label="Search"
        />

        <br />
        <br />

        <div className={styles.gallery}>
          {posts
            ? posts.map((post) => {
                return (
                  <div className="card" key={post["o:id"]}>
                    <Link href="/posts/[id]" as={`/posts/${post["o:id"]}`}>
                      <a>
                        <Image
                          src="/banner.jpg"
                          layout="responsive"
                          width={700}
                          height={475}
                        />
                      </a>
                    </Link>
                    <div className={styles.content}>
                      <Link href="/posts/[id]" as={`/posts/${post["o:id"]}`}>
                        <a>
                          <Title>{post["dcterms:title"][0]["@value"]}</Title>
                        </a>
                      </Link>

                      <p>Autor: {post["dcterms:creator"][0]["@value"]}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </Container>

      <br />
      <br />
    </Layout>
  );
};

export async function getServerSideProps(){
  const response = await fetch("http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/");
  const posts = await response.json();

  return {
    props: {
      posts
    }

  }

}
