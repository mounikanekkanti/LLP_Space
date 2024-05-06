import React, { useState } from "react";
import ShareFeedback4 from "./ShareFeedback4";

export default function ShareFeedback3() {
  const [showFeedback2, setShowFeedback2] = useState(false);
  const handleFeedbackClick = () => {
    setShowFeedback2(true);
  };
  return (
    <>
      {showFeedback2 ? (
        <ShareFeedback4 />
      ) : (
        <div className="div">
          <div className="div-0000002">
            <div className="div-0000003">
              <div className="div-0000004">
                <div className="div-0000005">Share Your Feedback</div>
                <div className="div-0000006">
                  <div className="div-0000007">1</div>
                  <div className="div-0000008" />
                  <div className="div-0000009">2</div>
                  <div className="div-00000010" />
                  <div className="div-00000011">3</div>
                  <div className="div-00000012" />
                  <div className="div-00000013">4</div>
                  <div className="div-00000014" />
                  <div className="div-00000015">5</div>
                </div>
                <div className="div-00000016">
                  Question: Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et ?
                </div>
                <div className="div-00000017">
                  Option 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. 
                </div>
                <div
                  className="div-00000018"
                  onClick={handleFeedbackClick}
                  style={{ cursor: "pointer" }}
                >
                  <div className="div-00000019">
                    Option 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25f21d0c74503c72e54cc3a7d0dc5481577f109a4ada9ff55d4d3b0182628df9?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-2"
                  />
                </div>
                <div className="div-00000020">
                  Option 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut{" "}
                </div>
                <div className="div-00000021">
                  Option 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut{" "}
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
          font-size: 16px;
          color: #000;
          font-weight: 400;
          justify-content: center;
        }
        .div-0000002 {
        
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
       
        }
        @media (max-width: 991px) {
          .div-0000002 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-0000003 {
          border-radius: 8px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          width: 1000px;
          max-width: 100%;
          flex-direction: column;
       
        }
        @media (max-width: 991px) {
          .div-0000003 {
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
        .div-0000004 {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 14px 0 6px;
          padding: 0 14px 0 48px;
        }
        @media (max-width: 991px) {
          .div-0000004 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-0000005 {
          align-self: stretch;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-0000005 {
            max-width: 100%;
          }
        }
        .div-0000006 {
          align-self: start;
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: var(--whitelffffffd-000000, #fff);
          white-space: nowrap;
          text-align: center;
          line-height: 100%;
          margin: 30px 0 0 29px;
        }
        @media (max-width: 991px) {
          .div-0000006 {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-0000007 {
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
          padding: 4px 4px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000007 {
            white-space: initial;
          }
        }
        .div-0000008 {
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--gray-85-ld-8-dadad-333333, #d8dada);
          width: 109px;
          height: 0px;
          margin: auto 0;
        }
        .div-0000009 {
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
          padding: 4px 4px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-0000009 {
            white-space: initial;
          }
        }
        .div-00000010 {
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--gray-85-ld-8-dadad-333333, #d8dada);
          width: 109px;
          height: 0px;
          margin: auto 0;
        }
        .div-00000011 {
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
          padding: 4px 4px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-00000011 {
            white-space: initial;
          }
        }
        .div-00000012 {
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--gray-85-ld-8-dadad-333333, #d8dada);
          width: 109px;
          height: 0px;
          margin: auto 0;
        }
        .div-00000013 {
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
          padding: 4px 4px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-00000013 {
            white-space: initial;
          }
        }
        .div-00000014 {
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--gray-85-ld-8-dadad-333333, #d8dada);
          width: 109px;
          height: 0px;
          margin: auto 0;
        }
        .div-00000015 {
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
          padding: 4px 4px;
          align-items: center;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-00000015 {
            white-space: initial;
          }
        }
        .div-00000016 {
          align-self: start;
          margin: 56px 100px 0 32px;
          font-size: 24px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-00000016 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-00000017 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          width: 840px;
          max-width: 100%;
          align-items: start;
          letter-spacing: 0.5px;
          line-height: 20px;
          justify-content: center;
          margin: 35px 0 0 17px;
          padding: 17px 15px;
        }
        @media (max-width: 991px) {
          .div-00000017 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-00000018 {
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #f6f6f6;
          display: flex;
          width: 840px;
          max-width: 100%;
          gap: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 0 17px;
          padding: 11px 15px;
        }
        @media (max-width: 991px) {
          .div-00000018 {
            flex-wrap: wrap;
          }
        }
        .div-00000019 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-00000019 {
            max-width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-00000020 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          width: 840px;
          max-width: 100%;
          align-items: start;
          letter-spacing: 0.5px;
          justify-content: center;
          margin: 20px 0 0 17px;
          padding: 16px 15px;
        }
        @media (max-width: 991px) {
          .div-00000020 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-00000021 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 6px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          width: 840px;
          max-width: 100%;
          align-items: start;
          letter-spacing: 0.5px;
          justify-content: center;
          margin: 20px 0 0 17px;
          padding: 16px 15px;
        }
        @media (max-width: 991px) {
          .div-00000021 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
      `}</style>
    </>
  );
}
