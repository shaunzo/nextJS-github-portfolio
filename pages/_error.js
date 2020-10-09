import Layout from "../components/layout";

const Error = ({ statusCode }) => (
    <Layout title="Error!!!">
       <p>{statusCode ? `Could not load your user data: Status Code: ${statusCode}` : `Couldn't get that page, sorry!`}</p>
    </Layout>
)
export default Error;