import React, { useState } from "react";
import ShareFeedback6 from "./ShareFeedback6";

export default function ShareFeedback5() {
    const [showFeedback2, setShowFeedback2] = useState(false);
    const handleFeedbackClick = () => {
      setShowFeedback2(true);
    };
  return (
    <>
       {showFeedback2 ? (
      <ShareFeedback6/>
    ) : (
      <div className="div">
        <div className="div-00000000002">
          <div className="div-00000000003">
        
            <div className="div-00000000004">
              <div className="div-00000000005">Share Your Feedback</div>
              <div className="div-00000000006">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-000002"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-000003"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-000004"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eee3f5e3114aa59e1fba4b20123c17f0b8a29c40ab00d074a42d7026246a1e3?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-000005"
                />
                <div className="div-00000000007">5</div>
              </div>
              <div className="div-00000000008">Let us know more </div>
              <div className="div-00000000009">Comment</div>
              <div className="div-000000000010">
                <div className="div-000000000011">
                  <div className="div-000000000012" />
                </div>
              </div>
              <div className="div-000000000013">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e042686ffea7af8dc971b3474d00a625d3a55650c2b83e095cd4597a4a481ea?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-000006"
                />
                <div className="div-000000000014">
                  I may be contacted about this feedback.
                </div>
                <div className="div-000000000015">Privacy policy</div>
              </div>
              <div className="div-000000000016">
                <div className="div-000000000017" onClick={handleFeedbackClick} style={{cursor:"pointer"}}>Submit</div>
                <div className="div-000000000018">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
      <style>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-00000000002 {
         
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
         
        }
        @media (max-width: 991px) {
          .div-00000000002 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-00000000003 {
          border-radius: 8px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          width: 1000px;
          max-width: 100%;
          flex-direction: column;
        
        }
        @media (max-width: 991px) {
          .div-00000000003 {
            margin: 40px 0;
          }
        }
        .img-000001{
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
        }
        @media (max-width: 991px) {
          .img-000001 {
            margin-right: 10px;
          }
        }
        .div-00000000004 {
          display: flex;
          margin-top: 14px;
          flex-direction: column;
          align-items: start;
          padding: 0 14px 0 24px;
        }
        @media (max-width: 991px) {
          .div-00000000004 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-00000000005 {
          align-self: stretch;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-00000000005 {
            max-width: 100%;
          }
        }
        .div-00000000006 {
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: var(--whitelffffffd-000000, #fff);
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          line-height: 100%;
          margin: 30px 0 0 29px;
        }
        @media (max-width: 991px) {
          .div-00000000006 {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .img-000002 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .img-000003 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .img-000004 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .img-000005 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .div-00000000007 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--blue-460089-ec, #0089ec);
          width: 24px;
          height: 24px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-00000000007 {
            white-space: initial;
          }
        }
        .div-00000000008 {
          color: #000;
          margin: 44px 0 0 32px;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-00000000008 {
            margin: 40px 0 0 10px;
          }
        }
        .div-00000000009 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin: 21px 0 0 33px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-00000000009 {
            max-width: 100%;
          }
        }
        .div-000000000010 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          width: 660px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
          margin: 4px 0 0 33px;
        }
        .div-000000000011 {
          justify-content: center;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          padding: 76px 1px 1px;
        }
        @media (max-width: 991px) {
          .div-000000000011 {
            max-width: 100%;
          }
        }
        .div-000000000012 {
          border-radius: 0px 0px 3px 3px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          height: 11px;
        }
        @media (max-width: 991px) {
          .div-000000000012 {
            max-width: 100%;
          }
        }
        .div-000000000013 {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 16px;
          color: #000;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 30px 0 0 34px;
        }
        @media (max-width: 991px) {
          .div-000000000013 {
            flex-wrap: wrap;
          }
        }
        .img-000006 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: stretch;
        }
        .div-000000000014 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-000000000015 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          align-self: stretch;
          margin: auto 0;
        }
        .div-000000000016 {
          justify-content: center;
          display: flex;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.5px;
          margin: 66px 0 0 34px;
        }
        @media (max-width: 991px) {
          .div-000000000016 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-000000000017 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          border-radius: 24px;
          background-color: var(--vds-background-primary-dark, #000);
          color: var(--vds-elements-text-icons-borders-primary-ondark, #fff);
          padding: 12px 24px;
        }
        @media (max-width: 991px) {
          .div-000000000017 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-000000000018 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          border-radius: 24px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          padding: 12px 24px;
        }
        @media (max-width: 991px) {
          .div-000000000018 {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


