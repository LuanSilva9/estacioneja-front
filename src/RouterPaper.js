import { Route, Routes } from "react-router-dom";
import Home from "./routes/client/Home/Home";
import AboutUs from "./routes/client/AboutUs/AboutUs";

export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-nos" element={<AboutUs/>}/>
        </Routes>
    )
}