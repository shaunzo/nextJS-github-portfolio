import Layout from "../components/layout";
import Component from "react";
import fetch from "isomorphic-unfetch";

export default class About extends React.Component {

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/shaunzo");
        const data = await res.json();

        return { user: data };
    }

    render() {
        const { user } = this.props;
        
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alet={user.name} height="200px"/>
            </Layout>
        )
    }
}