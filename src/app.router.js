
import { Route,Routes } from "react-router-dom";
import {LoginComponent} from "./logincomponent/login.component";
import {SignupComponent} from "./signupcomponent/signup.component";
import { HeaderComponent } from "./headercomponent/header.component";
import { ServiceImage } from "./services/serviceimage";
import { ReviewRatings } from "./reviewrating/reviewrating";


export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<HeaderComponent></HeaderComponent>}></Route>
           
            <Route path="/signup" element={<SignupComponent></SignupComponent>}></Route>
<Route path ="/login" element={<LoginComponent></LoginComponent>}></Route>
<Route path="/serviceimages" element={<ServiceImage></ServiceImage>}></Route>
        <Route path="/services" element={<ReviewRatings></ReviewRatings>}></Route>



</Routes>
    )
}