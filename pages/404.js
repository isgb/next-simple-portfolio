import Link from "next/link";
import Layout from "../components/Layouts";

export default function Custom404() {
    return <Layout>
    <div className="text-center">
    <h1>404</h1>
     <p>This page does not exits. Please return to</p>
     <Link href='/'>Home</Link>
    </div>
 </Layout>
  }