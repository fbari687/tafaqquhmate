import Layout from "@/Layouts/Layout";
import Hero from "./Hero";
import { Feature } from "./Feature";
import Article from "./Article";

export default function Home({ materials }) {
    return (
        <Layout>
            <Hero />
            <Feature />
            <Article materials={materials} />
        </Layout>
    );
}
