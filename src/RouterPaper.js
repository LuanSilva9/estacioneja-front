import { Route, Routes } from "react-router-dom";
import Home from "./routes/client/Home/Home";

export default function RouterPaper() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}