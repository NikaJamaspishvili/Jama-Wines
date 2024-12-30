import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react";

const LandingPage = lazy(() => import("../Components/LandingPage/LandingPage.jsx"));

function App(){
return <div className="w-[95%] md:w-[90%] max-w-[1300px] mx-auto overflow-x-hidden">
<Router>

<Suspense fallback={<div>Loading</div>}>
<Routes>

<Route path="/" element={<LandingPage />} />

</Routes>
</Suspense>

</Router>
</div>
}

export default App;
