import Layout from "../../components/Layout/Layout"
import RegisterUI from "./RegisterUI"

export default function Register(){
    return(
        <Layout navbarOff={false}>
            <RegisterUI/>
        </Layout>
    )
}