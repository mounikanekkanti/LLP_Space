import React, { useState } from "react";
import ShareFeedback3 from "./ShareFeedback3";

export default function Sharefeedback2() {
  const [showFeedback2, setShowFeedback2] = useState(false);
  const handleFeedbackClick = () => {
    setShowFeedback2(true);
  };
  return (
    <>
    {showFeedback2 ? (
      <ShareFeedback3/>
    ) : (
      <div className="div-00001">
        <div className="div-00002">
        
          <div className="div-00003">
            <div className="div-00004">Share Your Feedback</div>
            <div className="div-00005">
              Could you please share your experience using the Landlord Portal
              today?
            </div>
            <div className="div-00006">
              <div className="div-00007">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9157bebc58b078298d853d4fffad7aaf7b87ca550fc5d420dceded2adbf76bb?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-02"
                />
                <div className="div-00008">Bad</div>
              </div>
              <div className="div-00009">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebf7fa241eec919cac34f8bd85d0753e67be61602caf3cd05783a4b98af5f24?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-03"
                />
                <div className="div-000010">Okay</div>
              </div>
              <div className="div-000011">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e38259d7e7fe6c3c3bcd9ff1557f7d8d0fdf3346cd7337e0a2c3814a406b30c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-04"
                />
                <div className="div-000012">Happy</div>
              </div>
              <div className="div-000013">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7720a40ca2c976d8fb65879ff7008f390b859c8c4fc5969fd0c0803f724d78e7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-05"
                />
                <div className="div-000014">Excellent</div>
              </div>
            </div>
            <div className="div-000015"> Thank you!</div>
            <div className="div-000016">
              Would you be interested in participating in a brief survey now to
              help us enhance your experience?
            </div>
            <div className="div-000017">
              <div className="div-000018" onClick={handleFeedbackClick} style={{cursor:"pointer"}}>Yes</div>
              <div className="div-000019">May be Later</div>
            </div>
          </div>
        </div>
      </div>
    )}
      <style >{`
        .div-00001 {
          border-radius: 8px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          max-width: 656px;
          flex-direction: column;
          font-size: 16px;
          font-weight: 700;
          justify-content: center;
        }
        .div-00002 {
          border-radius: 8px;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 14px 0 48px;
        }
        @media (max-width: 991px) {
          .div-00002 {
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
        .div-00003 {
          display: flex;   
          flex-direction: column;
          margin: 14px 0 9px;
          padding: 0 14px 0 4px;
        }
        @media (max-width: 991px) {
          .div-00003 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-00004 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin: 0 34px 0 19px;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-00004 {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .div-00005 {
          color: rgba(0, 0, 0, 0.4);
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 32px 34px 0 19px;
        }
        @media (max-width: 991px) {
          .div-00005 {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .div-00006 {
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 100%;
          max-width: 511px;
          gap: 20px;
          color: rgba(0, 0, 0, 0.4);
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-00006 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-00007 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-00007 {
            white-space: initial;
          }
        }
        .img-02 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: rgba(0, 0, 0, 0.4);
          align-self: center;
        }
        .div-00008 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 27px;
        }
        .div-00009 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-00009 {
            white-space: initial;
          }
        }
        .img-03 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: rgba(0, 0, 0, 0.4);
          align-self: center;
        }
        .div-000010 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 27px;
        }
        .div-000011 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-000011 {
            white-space: initial;
          }
        }
        .img-04 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
          fill: rgba(0, 0, 0, 0.4);
          align-self: center;
        }
        .div-000012 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 27px;
        }
        .div-000013 {
          align-self: start;
          display: flex;
          flex-direction: column;
          color: #000;
          text-align: center;
        }
        @media (max-width: 991px) {
          .div-000013 {
            white-space: initial;
          }
        }
        .img-05 {
          aspect-ratio: 1.3;
          object-fit: auto;
          object-position: center;
          width: 65px;
          fill: #000;
          align-self: center;
        }
        .div-000014 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 27px;
        }
        .div-000015 {
          color: #000;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
          margin-top: 45px;
          padding-left: 19px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-000015 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-000016 {
          color: #000;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin-top: 40px;
          padding-left: 19px;
        }
        @media (max-width: 991px) {
          .div-000016 {
            max-width: 100%;
          }
        }
        .div-000017 {
          justify-content: center;
          align-self: start;
          display: flex;
          margin-top: 36px;
          gap: 12px;
          text-align: center;
          letter-spacing: 0.5px;
          padding-left: 19px;
        }
        .div-000018 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          border-radius: 24px;
          background-color: var(--vds-background-primary-dark, #000);
          color: var(--vds-elements-text-icons-borders-primary-ondark, #fff);
          white-space: nowrap;
          padding: 12px 24px;
        }
        @media (max-width: 991px) {
          .div-000018 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-000019 {
          font-feature-settings: "clig" off, "liga" off;
          justify-content: center;
          border-radius: 24px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          padding: 12px 24px;
          font-family: "VerizonNHGDS-Bold";
        }
        @media (max-width: 991px) {
          .div-000019 {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


