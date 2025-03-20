import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Form from "./pages/form";

function App(){
    return <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Service" element ={<Service/>} />
        <Route path="/Contact" element ={<Contact/>} />
        <Route path="/Form" element ={<Form/>} />
    </Routes>
}
export default App