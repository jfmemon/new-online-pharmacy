import React from "react";
import img1 from "../../../assets/Category-logos/sexualWellness.png";
import img2 from "../../../assets/Category-logos/birthControl.png";
import img3 from "../../../assets/Category-logos/vitaminsSupplement.png";
import img4 from "../../../assets/Category-logos/medicalDevice.png";
import img5 from "../../../assets/Category-logos/personalCare.png";
import img6 from "../../../assets/Category-logos/healthAndWellness.png";
import img7 from "../../../assets/Category-logos/babyCare.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="my-16 p-8">
      <div className="flex justify-center pb-5">
        <div className="divider md:w-[300px] w-60 mb-5 text-indigo-500 font-semibold">
          Category
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        <div>
          <Link to="/category/sexualWellness">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img1} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">Sexual Wellness</h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/birthControl">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img2} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">Birth Control</h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/vitaminsAndSupplements">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img3} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">
                  Vitamins and supplements
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/medicalDevices">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img4} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">Medical Devices</h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/personalCare">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img5} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">Personal Care</h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/healthAndWellness">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img6} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">
                  Health and wellness
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/babyCare">
            <div className="mx-auto p-5 border shadow-2xl bg-white rounded-lg">
              <img className="w-20 mx-auto" src={img7} alt="" />
              <div>
                <h3 className="text-sm text-center pt-2">Baby care</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;