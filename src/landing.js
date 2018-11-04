import React from "react";
import "./landing.css";
import FileUpload from "./fileUpload";

const LandingPage = () => {
    const renderFileUpload = () => {
        return <FileUpload />;
    }

    return (
        <div className="landingPage">
            <div className="overlay">
                <h1 className="title"><span className="titleTop">Find My</span> <span className="titleBottom">Getaway</span></h1>

                <p className="appDescription">Find My Getaway allows you to upload a photo that inspires you to travel. The app will then suggest a vacation package based off of your photo. We have packages from all seven continents. Whether you are looking for an active vacation, indulgent relaxation, or anything in between, we have you covered. Get started today and embrace your wanderlust.</p>
            </div>

            {renderFileUpload()}
        </div>
    );
};

export default LandingPage;
