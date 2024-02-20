import { Route, Routes } from "react-router-dom";
import CrossBar from "./MenuBar/CrossBar";
import Document from "./Compoment/Document.jsx";
import SignIn from "./Compoment/SignIn.jsx";
import MainPage from "./Compoment/PageMain.jsx";

export default function HomePage() {
  return (
    <div>
      <div className="fixed w-full">
        <CrossBar/>
      </div>
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Document" element={<Document/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </div>
    </div>
  )
}
