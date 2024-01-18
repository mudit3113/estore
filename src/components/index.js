import MainComponent from "./MainComponent"
import {Routes,Route} from "react-router-dom"


const LandingPage = () => {

    return(
        <div>
            <Routes>
                <Route path="/" Component={MainComponent}/>
            </Routes>
        </div>
    )
}

export default LandingPage;