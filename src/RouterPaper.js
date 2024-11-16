import { Route, Routes } from "react-router-dom";
import Home from "./routes/client/Home/Home";
import AboutUs from "./routes/client/AboutUs/AboutUs";
import Policy from "./routes/client/Policy/Policy";
import Features from "./routes/client/Features/Features";

export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<AboutUs/>}/>
            <Route path="/politica" element={<Policy/>}/>
            <Route path="/funcionalidades" element={<Features/>}/>
        </Routes>
    )
}