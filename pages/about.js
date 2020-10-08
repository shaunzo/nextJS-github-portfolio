import Link from "next/link";

const About = () => (
    <div>
        <h1>About</h1>
        
        <Link href="/">
            <a>Go to home</a>
        </Link>

        <p>A Javascript Programmer</p>
        <img src="/static/js-logo.png" alet="Javascript" height="200px"/>
    </div>
);

export default About;