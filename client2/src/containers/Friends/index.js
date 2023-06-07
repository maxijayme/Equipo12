import FriendsUI from "./FriendsUI";
import Layout from "../../components/Layout/Layout";

import { useState } from "react";


export default function Friends() {
    const [stateFlag, setStateFlag] = useState('false')

    return(
        <Layout>
            <FriendsUI setStateFlag={setStateFlag} stateFlag={stateFlag}/>
        </Layout>
    )
}