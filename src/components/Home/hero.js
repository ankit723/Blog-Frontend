import React from "react";

export function Hero(props) {
    return (
        <div className="App">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={props.headImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 main-tag">{props.headTitle}</h1>
                        <p className="lead">{props.headPara}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{borderRadius: "5px", background: "linear-gradient(95.63deg, #554CB9 -16.09%, #4AC4F7 124.47%)", boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px"}}>
                        Get Started
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Hero;