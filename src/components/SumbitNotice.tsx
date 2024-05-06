import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitNotice() {
  const navigate = useNavigate();
  const handleSubmitNotice=()=>{
    navigate("/submitnotice");
  }
  const handleAddressForm=()=>{
    navigate("/changeaddressform");
  }
  const handleEmailAddress=()=>{
    navigate("/changeemailaddressform");
  }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b36f0dfd52b6ea0cbdf549c4688f16f9a9ef4af4b00422faba72395081b651f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img"
          />
          <div className="div-3">Residential</div>
          <div className="div-4">Business</div>
          <div className="div-5">Wireless</div>
        </div>
        <div className="div-6">
          <div className="div-7">
            <div className="div-8">Home</div>
            <div className="div-9" style={{cursor:"pointer"}} onClick={handleSubmitNotice}>Submit a Notice</div>
            <div className="div-10">Submit a Bill </div>
            <div className="div-11">Request a Copy of Contract</div>
            <div className="div-12">
              Request a Copy of Liability Certificate
            </div>
            <div className="div-13">My Files</div>
            <div className="div-14">Customer Support</div>
          </div>
        </div>
        <div className="div-15">Home &gt; Submit a Notice</div>
        <div className="div-16">
          <div className="div-17">
            <div className="div-18">Submit a Notice</div>
            <div className="div-19">
              <div className="div-20" style={{cursor:"pointer"}} onClick={handleAddressForm}>
                <div className="div-21">
                  <div className="div-22">Change Address Form</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/828a7a4ca057baa612bb401d4ae93d6036f1b0ca301c17119a57ef0bdf5afd8c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-2"
                  />
                </div>
                <div className="div-23" />
              </div>
              <div className="div-24" style={{cursor:"pointer"}} onClick={handleEmailAddress}>
                <div className="div-25">
                  <div className="div-26">Change Email Address</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/828a7a4ca057baa612bb401d4ae93d6036f1b0ca301c17119a57ef0bdf5afd8c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-3"
                  />
                </div>
                <div className="div-27" />
              </div>
              <div className="div-28">
                <div className="div-29">
                  <div className="div-30">Change of Ownership</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/828a7a4ca057baa612bb401d4ae93d6036f1b0ca301c17119a57ef0bdf5afd8c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-4"
                  />
                </div>
                <div className="div-31" />
              </div>
            </div>
            <div className="div-32">
              <div className="div-33">
                <div className="div-34">
                  <div className="div-35">Electronic Fund Transfer</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/828a7a4ca057baa612bb401d4ae93d6036f1b0ca301c17119a57ef0bdf5afd8c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-5"
                  />
                </div>
                <div className="div-36" />
              </div>
              <div className="div-37">
                <div className="div-38">
                  <div className="div-39">W9 Form</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/828a7a4ca057baa612bb401d4ae93d6036f1b0ca301c17119a57ef0bdf5afd8c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-6"
                  />
                </div>
                <div className="div-40" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-41">
          <div className="div-42">
            <div className="div-43">Copyright 2018</div>
            <div className="div-44">Privacy Policy</div>
            <div className="div-45">Sitemap</div>
            <div className="div-46">Home</div>
          </div>
        </div>
      </div>
      <style>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          color: #000;
          font-weight: 700;
        }
        .div-2 {
          align-self: center;
          display: flex;
          justify-content: center;

          gap: 16px;
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-2 {
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 2.7;
          object-fit: auto;
          object-position: center;
          width: 195px;
          align-self: stretch;
          max-width: 100%;
        }
        .div-3 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          margin-top: 44px;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-top: 40px;
          }
        }
        .div-4 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          margin-top: 44px;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 40px;
          }
        }
        .div-5 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          margin-top: 44px;
        }
        @media (max-width: 991px) {
          .div-5 {
            margin-top: 40px;
          }
        }
        .div-6 {
          background-color: #000;
          display: flex;
          margin-top: 7px;
          align-items: center;
          font-size: 16px;
          color: #fff;
          justify-content: center;
          padding: 33px 60px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-7 {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-wrap: wrap;
          }
        }
        .div-8 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-9 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-11 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-12 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-14 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-15 {
          font-size: 24px;
          font-family: "VerizonNHGDS-Bold";
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin: 27px 0 0 0;
          width: 1090px;
          text-align: left;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-left: 10px;
          }
        }
        .div-16 {
          background-color: #f6f6f6;
          display: flex;
          margin-top: 14px;
          align-items: center;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          justify-content: center;
          padding: 28px 60px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-17 {
          display: flex;
          width: 1094px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-18 {
          text-align: left;
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-size: 24px;
          font-family: "VerizonNHGDS-Bold";
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
          }
        }
        .div-19 {
          display: flex;
          margin-top: 49px;
          align-items: stretch;
          gap: 50px;
          letter-spacing: 0.5px;
          justify-content: flex-start;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .div-19 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-20 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }
        .div-21 {
          display: flex;
          gap: 4px;
          padding: 0 1px;
        }
        .div-22 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
        .div-23 {
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          margin-top: 20px;
          height: 1px;
        }
        .div-24 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-25 {
          display: flex;
          gap: 4px;
        }
        .div-26 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
        .div-27 {
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          margin-top: 20px;
          height: 1px;
        }
        .div-28 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-29 {
          display: flex;
          gap: 4px;
        }
        .div-30 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
        .div-31 {
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          margin-top: 20px;
          height: 1px;
        }
        .div-32 {
          align-self: start;
          display: flex;
          margin-top: 48px;
          gap: 34px;
          letter-spacing: 0.5px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-32 {
            margin-top: 40px;
          }
        }
        .div-33 {
          display: flex;
          flex-direction: column;
        }
        .div-34 {
          display: flex;
          gap: 4px;
        }
        .div-35 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
        .div-36 {
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          margin-top: 20px;
          height: 1px;
        }
        .div-37 {
          display: flex;
          flex-direction: column;
        }
        .div-38 {
          display: flex;
          gap: 4px;
        }
        .div-39 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
        .div-40 {
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          margin-top: 20px;
          height: 1px;
        }
        .div-41 {
          background-color: #d9d9d9;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          justify-content: center;
          padding: 31px 60px;
          margin-top: 222px;
        }
        @media (max-width: 991px) {
          .div-41 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-42 {
          display: flex;
          gap: 16px;
        }
        .div-43 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-44 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-45 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-46 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
}
