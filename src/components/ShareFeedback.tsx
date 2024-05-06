import React, { useState } from "react";
import Sharefeedback2 from "./ShareFeedback2";

export default function ShareFeedback() {
    const [showFeedback2, setShowFeedback2] = useState(false);
    const handleFeedbackClick = () => {
        setShowFeedback2(true);
      };
  return (
    <>
    {showFeedback2 ? (
        <Sharefeedback2/>
      ) : (
        
      <div className="div-001">
        <div className="div-002">
       
          <div className="div-003">
            <div className="div-004">Share Your Feedback</div>
            <div className="div-005">
              Could you please share your experience using the Landlord Portal
              today?
            </div>
            <div className="div-006">
              <div className="div-007">
                <div className="column">
                  <div className="div-008">
                    <div className="div-009">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19637e8dc39f5f4adb283b9aa174721701fffa8132d499cfc23589c159ce2c70?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-02"
                      />
                    </div>
                    <div className="div-0010">Bad</div>
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-0011">
                    <div className="div-0012">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fae794beacc01af9dd794503fd629139b97096f2ac6720e6e729eac1aff5a0e?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-03"
                      />
                    </div>
                    <div className="div-0013">Okay</div>
                  </div>
                </div>
                <div className="column-3">
                  <div className="div-0014">
                    <div className="div-0015">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/447885c74bf51b28d5e710174d51487e9a51dd987bc29cb8202488fc39f50b0b?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img04"
                      />
                    </div>
                    <div className="div-0016">Happy</div> 
                  </div>
                </div>
                <div className="column-4">
                  <div className="div-0017">
                    <div className="div-0018" onClick={handleFeedbackClick}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7720a40ca2c976d8fb65879ff7008f390b859c8c4fc5969fd0c0803f724d78e7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-05"
                      />
                    </div>
                    <div className="div-0019">Excellent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    
      <style >{`
    
        .div-001 {
          border-radius: 8px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          max-width: 656px;
          flex-direction: column;
          justify-content: center;
        }
        .div-002 {
          border-radius: 8px;
          display: flex;
     
          flex-direction: column;
          padding: 14px 0 48px;
        }
        @media (max-width: 991px) {
          .div-002 {
            max-width: 100%;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
        }
        @media (max-width: 991px) {
          .img {
            margin-right: 10px;
          }
        }
        .div-003 {
          display: flex;
          margin-top: 14px;
          flex-direction: column;
          padding: 0 24px 0 24px;
        }
        @media (max-width: 991px) {
          .div-003 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-004 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-right: 34px;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-004 {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .div-005 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          margin: 24px 34px 0 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-005 {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .div-006 {
          margin-top: 30px;
        }
        @media (max-width: 991px) {
          .div-006 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-007 {
          gap: 10px;
          display: flex;
          width: 499px;
        }
        @media (max-width: 991px) {
          .div-007 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-008 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-008 {
            margin-top: 40px;
          }
        }
        .div-009 {
          align-items: center;
          border-radius: 62px;
          background-color: rgba(207, 207, 207, 0);
          display: flex;
          justify-content: center;
          width: 90px;
          height: 90px;
          padding: 0 6px;
        }
        .img-02 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
         
          fill: #000;
          height: 50px;
          width: 50px;
        }
        .div-0010 {
          color: #000;
          letter-spacing: 0.5px;
          align-self: center;
          margin-top: 7px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-0011 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-0011 {
            margin-top: 40px;
          }
        }
        .div-0012 {
          align-items: center;
          border-radius: 62px;
          background-color: rgba(207, 207, 207, 0);
          display: flex;
          justify-content: center;
          width: 90px;
          height: 90px;
          padding: 0 20px;
        }
        .img-03 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: #000;
          height: 50px;
          width: 50px;
        }
        .div-0013 {
          color: #000;
          letter-spacing: 0.5px;
          align-self: center;
          margin-top: 7px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-0014 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-0014 {
            margin-top: 40px;
          }
        }
        .div-0015 {
          align-items: center;
          border-radius: 62px;
          background-color: rgba(207, 207, 207, 0);
          display: flex;
          justify-content: center;
          width: 90px;
          height: 90px;
          padding: 0 20px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: #000;
          height: 50px;
          width: 50px;
        }
        .div-0016 {
          color: #000;
          letter-spacing: 0.5px;
          align-self: center;
          margin-top: 7px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-0017 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .div-0017 {
            margin-top: 40px;
          }
        }
        .div-0018 {
          align-items: center;
          border-radius: 62px;
          background-color: rgba(207, 207, 207, 0);
          display: flex;
          justify-content: center;
          width: 90px;
          height: 90px;
          padding: 0 20px;
        }
        .img-05 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: #000;
          position: relative;
    height: 50px;
    width: 50px;
      
               
        }
        .div-0019 {
          color: #000;
          text-align: center;
          letter-spacing: 0.5px;
          margin-top: 7px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
    </>
  );
}


