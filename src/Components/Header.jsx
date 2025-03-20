import { NavLink } from "react-router-dom"
function Header(){
    return <div className="flex justify-between px-[50px] bg-green-300  py-[13px]">
    <h1 className="text-[30px] font-bold">Abdul</h1>
    <ul className="flex justify-center gap-11 text-[20px]  ">
        <NavLink to ="/"> <li>Home</li></NavLink>
        <NavLink to ="/Service"> <li>Service</li></NavLink>
        <NavLink to ="/Contact"> <li>Contact</li></NavLink>
        <NavLink to ="/Form"> <li>Form</li></NavLink>
    </ul>
    <div>

    <button className="border-none px-[15px] text-[22px]">Sin in </button>
    <button className="border-green-500 border-[3px] bg-white px-[15px] text-[22px]">Sin up </button>
    </div>
    </div>
}
export default Header