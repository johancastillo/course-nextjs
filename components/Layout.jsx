import Navigation from "../widgets/Navigation"
import Head from "next/head"



const Layout = ({children}) => {
    return(
        <div>
           <Head>
                <title>Origami Express - Bienvenidos</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"></link>
                
            </Head>

            <Navigation />

            <main>
                {children}
            </main>

        </div>
    )
}



export default Layout;

