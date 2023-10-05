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
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import MyCart from "../Pages/UserDashboard/MyCart";
import OrderList from "../Pages/UserDashboard/OrderList";
import PaymentHistory from "../Pages/UserDashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import SexualWellnessProductDetails from "../Pages/Home/SexualWellness/SexualWellnessProductDetails";
import BirthControlProductDetails from "../Pages/Home/BirthControl/BirthControlProductDetails";
import VitaminsAndSupplementsProductDetails from "../Pages/Home/VitaminsAndSupplements/VitaminsAndSupplementsProductDetails";
import MedicalDevicesProductDetails from "../Pages/Home/MedicalDevices/MedicalDevicesProductDetails";
import PersonalCareProductDetails from "../Pages/Home/PersonalCare/PersonalCareProductDetails";

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
                element: <PrivateRoute><UploadPrescription></UploadPrescription></PrivateRoute>
            },
            {
                path: "category/shopByCondition",
                element: <ShopByCondition></ShopByCondition>
            },
            {
                path: "category/shopByCondition/:id",
                element: <ShowConditionalItems></ShowConditionalItems>,
                loader: ({params}) => fetch(`http://localhost:5000/shopByCondition/${params.id}`)
            },
            {
                path: "medicineDetails/:content",
                element: <CardDetails></CardDetails>
            },
            {
                path: "category/sexualWellness",
                element: <SexualWellness></SexualWellness>
            },
            {
                path: "category/sexualWellness/:id",
                element: <SexualWellnessProductDetails></SexualWellnessProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/sexualWellness/${params.id}`)
            },
            {
                path: "category/birthControl",
                element: <BirthControl></BirthControl>
            },
            {
                path: "category/birthControl/:id",
                element: <BirthControlProductDetails></BirthControlProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/birthControl/${params.id}`)
            },
            {
                path: "category/vitaminsAndSupplements",
                element: <VitaminsAndSupplements></VitaminsAndSupplements>
            },
            {
                path: "category/vitaminsAndSupplements/:id",
                element: <VitaminsAndSupplementsProductDetails></VitaminsAndSupplementsProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/vitaminsAndSupplements/${params.id}`)
            },
            {
                path: "category/medicalDevices",
                element: <MedicalDevices></MedicalDevices>
            },
            {
                path: "category/medicalDevices/:id",
                element: <MedicalDevicesProductDetails></MedicalDevicesProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/medicalDevices/${params.id}`)
            },
            {
                path: "category/personalCare",
                element: <PersonalCare></PersonalCare>
            },
            {
                path: "category/personalCare/:id",
                element: <PersonalCareProductDetails></PersonalCareProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/personalCare/${params.id}`)
            },
            {
                path: "category/healthAndWellness",
                element: <HealthAndWellness></HealthAndWellness>
            },
            {
                path: "category/babyCare",
                element: <BabyCare></BabyCare>
            },
            {
                path: "userDashboard",
                element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
                children: [
                    {
                        path: 'myCart',
                        element: <MyCart></MyCart>
                    },
                    {
                        path: 'orderList',
                        element: <OrderList></OrderList>
                    },
                    {
                        path: 'paymentHistory',
                        element: <PaymentHistory></PaymentHistory>
                    }
                ]
            }
        ]
    }
])
