import Link from "next/link";
import Layout from '../components/layout';

const Index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to About</a>
        </Link>
       <p>Welcome to the homepage</p>
    </Layout>
);

export default Index;