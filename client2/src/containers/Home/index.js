import { useNavigate } from "react-router-dom";
const URL = 'http://localhost:3001/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDQzMTI3NywiZXhwIjoxNjg0NTE3Njc3fQ.MP1aWFKi2-01l2AtN8iOZfXK2JdK-bW_aU1knZ1-kLU'

export default function Home(){
    const navigate = useNavigate()
    fetch(URL,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
    }).then(res =>{
        if(res.status === 200){
            navigate('/main')
        }else{
            navigate('/login')
        }
    })

}