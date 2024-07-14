import Layout from "../components/Layouts"
import _error from "./_error"

const Github = ({user,statusCode}) => {
    // console.log(props.user);

    if(statusCode){
        return <Error statusCode={statusCode}/>
    }

    return (
    <Layout footer={false} dark> 
        <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center">
                <h1>{user.name}</h1>
                <img src={user.avatar_url} alt=""/>
                <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
                <a href={user.html_user} target="_blank" className="btn btn-outline-secondary">
                    Go to Github
                </a>
            </div>
        </div>
    </Layout>
)}

export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/fazttech')
    const data = await res.json();

    // console.log(res.status);
    const statusCode = res.status > 200 ? res.status : false;

    // console.log(data);
    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github