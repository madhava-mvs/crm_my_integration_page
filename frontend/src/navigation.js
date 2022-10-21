import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Test from "./Login";
import Admin from "./AdminDashboard";
export default function Nav(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Test/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
        <Route path={"/admin"} element={<Admin/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>)
}