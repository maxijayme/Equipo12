import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import 'bootstrap/dist/css/bootstrap.css';

export default function MainUI(){
    return(
        <body>
            <header>
                <Navbar />
            </header>
            <main className="container-fluid h-auto">
                
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}