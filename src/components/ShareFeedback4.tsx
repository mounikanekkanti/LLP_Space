import React, { useState } from "react";
import ShareFeedback5 from "./ShareFeedback5";

export default function ShareFeedback4() {
  const [showFeedback2, setShowFeedback2] = useState(false);
  const handleFeedbackClick = () => {
    setShowFeedback2(true);
  };
  return (
    <>
      {showFeedback2 ? (
        <ShareFeedback5 />
      ) : (
        <div className="div">
          <div className="div-000000002">
            <div className="div-000000003">
              <div className="div-000000004">
                <div className="div-000000005">Share Your Feedback</div>
                <div className="div-000000006">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-002"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-003"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150c768092e56e939a74163c9789440dbf3c6beebf7128f6ad6f891c764dfeb0?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-004"
                  />
                  <div className="div-000000007">4</div>
                  <div className="div-000000008" />
                  <div className="div-000000009">5</div>
                </div>
                <div className="div-0000000010">
                  Question: Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et ?
                </div>
                <div className="div-0000000011">
                  <div className="div-0000000012">
                    <div className="div-0000000013">
                      <div className="div-0000000014">1</div>
                      <div className="div-0000000015">2</div>
                      <div className="div-0000000016">3</div>
                      <div className="div-0000000017">4</div>
                    </div>
                    <div className="div-0000000018">
                      Extremely <br />
                      Dissatisfied
                    </div>
                  </div>
                  <div
                    className="div-0000000019"
                    onClick={handleFeedbackClick}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="div-0000000020">5</div>
                    <div className="div-0000000021">
                      Extremely
                      <br />
                      Satisfied
                    </div>
                  </div>
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
          color: #000;
          justify-content: center;
        }
        .div-000000002 {
      
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        
        }
        @media (max-width: 991px) {
          .div-000000002 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-000000003 {
          border-radius: 8px;
         
          display: flex;
          width: 1000px;
          max-width: 100%;
          flex-direction: column;
        
        }
        @media (max-width: 991px) {
          .div-000000003 {
            margin: 40px 0;
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
        .div-000000004 {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 0 14px 0 24px;
        }
        @media (max-width: 991px) {
          .div-000000004 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-000000005 {
          align-self: stretch;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
            font-size: 32px;
            font-family: "VerizonNHGDS-Bold";
            font-weight: 700;  
        }
        @media (max-width: 991px) {
          .div-000000005 {
            max-width: 100%;
          }
        }
        .div-000000006 {
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
          .div-000000006 {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .img-002 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .img-003 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .img-004 {
          aspect-ratio: 5.88;
          object-fit: auto;
          object-position: center;
          width: 143px;
          max-width: 100%;
        }
        .div-000000007 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--blue-460089-ec, #0089ec);
          width: 24px;
          height: 24px;
          padding: 0px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-000000007 {
            white-space: initial;
          }
        }
        .div-000000008 {
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--gray-85-ld-8-dadad-333333, #d8dada);
          width: 109px;
          height: 0px;
          margin: auto 0;
        }
        .div-000000009 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--DISABLE-TEXT, #a7a7a7);
          width: 24px;
          height: 24px;
          padding: 0px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-000000009 {
            white-space: initial;
          }
        }
        .div-0000000010 {
          margin: 56px 140px 0 24px;
          font-size: 24px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-0000000010 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-0000000011 {
          display: flex;
          gap: 6px;
          font-size: 16px;
          letter-spacing: 0.5px;
          margin: 53px 0 0 33px;
        }
        @media (max-width: 991px) {
          .div-0000000011 {
            margin: 40px 0 0 10px;
          }
        }
        .div-0000000012 {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        .div-0000000013 {
          display: flex;
          gap: 20px;
          font-weight: 700;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-0000000013 {
            white-space: initial;
          }
        }
        .div-0000000014 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          align-items: start;
          justify-content: center;
          width: 37px;
          height: 46px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000000014 {
            white-space: initial;
          }
        }
        .div-0000000015 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          justify-content: center;
          width: 37px;
          height: 46px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000000015 {
            white-space: initial;
          }
        }
        .div-0000000016 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          justify-content: center;
          width: 37px;
          height: 46px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000000016 {
            white-space: initial;
          }
        }
        .div-0000000017 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          align-items: start;
          justify-content: center;
          width: 37px;
          height: 46px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000000017 {
            white-space: initial;
          }
        }
        .div-0000000018 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          line-height: 20px;
          margin-top: 33px;
        }
        .div-0000000019 {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-0000000019 {
            white-space: initial;
          }
        }
        .div-0000000020 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #f6f6f6;
          align-self: end;
          font-weight: 700;
          justify-content: center;
          width: 37px;
          height: 46px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000000020 {
            white-space: initial;
          }
        }
        .div-0000000021 {
          text-align: right;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          line-height: 20px;
          margin-top: 33px;
        }
      `}</style>
    </>
  );
}
