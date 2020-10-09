import Layout from "../components/layout";
import Component from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends React.Component {

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/shaunzo");
        const data = await res.json();
        const statusCode = res.status > 200 ? res.status : false;

        return { user: data, statusCode };
    }

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }
        
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alet={user.name} height="200px"/>
            </Layout>
        )
    }
}