import Layout from "../components/Layouts";

const _error = ({statusCode}) => {
    return (
        <Layout footer={false}>
            {
                statusCode ? (
                    <p className="text-center">Could not load your page: Status Code {statusCode}</p>
                ) : (
                    <p>Cound not get this page</p>
                )
            }
        </Layout>
    )
}

export default _error;