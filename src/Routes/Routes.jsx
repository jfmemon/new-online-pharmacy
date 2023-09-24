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
import ShowConditionalItems from "../Pages/ShowConditionalItems/ShowConditionalItems";
import CardDetails from "../Pages/CardDetails/CardDetails";

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
                path: "uploadPrescription",
                element: <UploadPrescription></UploadPrescription>
            },
            {
                path: "category/shopByCondition",
                element: <ShopByCondition></ShopByCondition>
            },
            {
                path: "category/shopByCondition/:content",
                element: <ShowConditionalItems></ShowConditionalItems>
            },
            {
                path: "category/cardDetails/:content",
                element: <CardDetails></CardDetails>
            },
            {
                path: "category/sexualWellness",
                element: <SexualWellness></SexualWellness>
            },
            {
                path: "category/birthControl",
                element: <BirthControl></BirthControl>
            },
            {
                path: "category/vitaminsAndSupplements",
                element: <VitaminsAndSupplements></VitaminsAndSupplements>
            },
            {
                path: "category/medicalDevices",
                element: <MedicalDevices></MedicalDevices>
            },
            {
                path: "category/personalCare",
                element: <PersonalCare></PersonalCare>
            },
            {
                path: "category/healthAndWellness",
                element: <HealthAndWellness></HealthAndWellness>
            },
            {
                path: "category/babyCare",
                element: <BabyCare></BabyCare>
            }
        ]
    }
])
