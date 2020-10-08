import Link from "next/link";

const Index = () => (
    <div>
        <h1>Home</h1>
        <Link href="/about">
            <a>Go to About</a>
        </Link>
       <p>Welcome to the homepage</p>
    </div>
);

export default Index;