import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UploadPrescription from "../Pages/UploadPrescription/UploadPrescription";
import ShopByCondition from "../Pages/ShopByCondition/ShopByCondition";
import SexualWellness from "../Pages/SexualWellness/SexualWellness";
import BirthControl from "../Pages/BirthControl/BirthControl";
import VitaminsAndSupplements from "../Pages/VitaminsAndSupplements/VitaminsAndSupplements";
import MedicalDevices from "../Pages/MedicalDevices/MedicalDevices";
import PersonalCare from "../Pages/PersonalCare/PersonalCare";
import HealthAndWellness from "../Pages/HealthAndWellness/HealthAndWellness";
import BabyCare from "../Pages/BabyCare/BabyCare";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "prescription",
                element: <UploadPrescription></UploadPrescription>
            },
            {
                path: "shopByCondition",
                element: <ShopByCondition></ShopByCondition>
            },
            {
                path: "sexualWellness",
                element: <SexualWellness></SexualWellness>
            },
            {
                path: "birthControl",
                element: <BirthControl></BirthControl>
            },
            {
                path: "vitaminsAndSupplements",
                element: <VitaminsAndSupplements></VitaminsAndSupplements>
            },
            {
                path: "medicalDevices",
                element: <MedicalDevices></MedicalDevices>
            },
            {
                path: "personalCare",
                element: <PersonalCare></PersonalCare>
            },
            {
                path: "healthAndWellness",
                element: <HealthAndWellness></HealthAndWellness>
            },
            {
                path: "babyCare",
                element: <BabyCare></BabyCare>
            }
        ]
    }
])
