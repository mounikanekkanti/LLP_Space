import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ChangeEmailAdressForm() {
  const navigate = useNavigate();
  const handleSubmitNotice=()=>{
    navigate("/submitnotice");
  }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ffb81d40188b604196cdb03942b75f042d8bf5f3fc53cce2403d37f8f7125e?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
        <div className="div-15">
          <div className="div-16">
            <div className="div-17">
              <div className="column">
                <div className="div-18">
                  <div className="div-19">
                    Submit a Notice &gt; Change Email Address{" "}
                  </div>
                  <div className="div-20">Change of Email Address Form</div>
                  <div className="div-21">Please select the Contract ID</div>
                  <div className="div-22">
                    <div className="div-23">
                      <div className="div-24">
                        201897465 - North Reese Avenue
                      </div>
                      <div className="div-25">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c581d527eb2e9409fdb20f0eb49d81e15c88a891740f50d6169398f5056264c7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                          className="img-2"
                        />
                        <div className="div-26" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <div className="div-27">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d490b21e5738ae35a65db171303b4cf69a246493ae5c12667fc7d0ee393c89ce?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-3"
                  />
                  <div className="div-28">
                    <div className="div-29">Success!</div>
                    <div className="div-30">
                      Your New Email Address is Updated With Verizon.
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/098cc1cfe0cdceccf37fe9e88a790964aec71e51aec67636e29bbb659b17f8ca?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-31">Existing Address Details</div>
          <div className="div-32">Name of the Landlord</div>
          <div className="div-33">
            <div className="div-34">
              <div className="div-35">John</div>
              <div className="div-36" />
            </div>
          </div>
          <div className="div-37">Site Name</div>
          <div className="div-38">
            <div className="div-39">
              <div className="div-40">TX6843567</div>
              <div className="div-41" />
            </div>
          </div>
          <div className="div-42">Contract Number</div>
          <div className="div-43">
            <div className="div-44">
              <div className="div-45">201887465012</div>
              <div className="div-46" />
            </div>
          </div>
          <div className="div-47">Email Address</div>
          <div className="div-48">
            <div className="div-49">
              <div className="div-50">john.D@hotmail.com</div>
              <div className="div-51" />
            </div>
          </div>
          <div className="div-52">New Email Address </div>
          <div className="div-53">
            <div className="div-54">
              <div className="div-55">Email Address</div>
              <div className="div-56">
                <div className="div-57">
                  <div className="div-58">John_Daniel@hotmail.com</div>
                  <div className="div-59" />
                </div>
              </div>
            </div>
            <div className="div-60">Security Code Sent to Email</div>
          </div>
          <div className="div-61">
            <div className="div-62">Security Code</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/973b9439177e8c4231772aa33786bf369fe670a9adef00978a7388653adb0055?apiKey=a938513dc279413eaac5ce0f8c637f66&"
              className="img-5"
            />
          </div>
          <div className="div-63">
            <div className="div-64">
              <div className="div-65">ABC-XXXX-DFES</div>
              <div className="div-66">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec5c25f197d870adc65b06080d8d18dd629c668ec941915e171a7e9efea6e53?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-6"
                />
                <div className="div-67" />
              </div>
            </div>
          </div>
          <div className="div-68">Authentication Successful!</div>
          <div className="div-69">
            <div className="div-70">Submit</div>
            <div className="div-71">Clear</div>
          </div>
        </div>
        <div className="div-72">
          <div className="div-73">
            <div className="div-74">Copyright 2018</div>
            <div className="div-75">Privacy Policy</div>
            <div className="div-76">Sitemap</div>
            <div className="div-77">Home</div>
          </div>
        </div>
      </div>
      <style>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          align-self: center;
          display: flex;
     
          gap: 16px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
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
          font-weight: 700;
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
          align-self: center;
          display: flex;
          width: 1206px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          margin: 20px 0 0 127px;
          padding: 0 20px;
        }
        .div-16 {
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .div-17 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-17 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 30%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-18 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
          }
        }
        .div-19 {
          font-family: "VerizonNHGDS-Bold";
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-weight: 700px;
        }
        .div-20 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 27px;
          font-size: 24px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-21 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 25px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-22 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-23 {
       
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 41px;
          padding: 1px 1px 1px 13px;
        }
        .div-24 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-25 {
          display: flex;
          gap: 0px;
          padding: 0 2px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .div-26 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 12px;
          height: 42px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 70%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-27 {
          align-items: start;
          align-self: stretch;
          border-radius: 4px;
          background-color: var(--green-94-ldcf-5-e-6-d-003514, #dcf5e6);
          display: flex;
          gap: 12px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          letter-spacing: 0.5px;
          width: 100%;
          padding: 20px;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-28 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        @media (max-width: 991px) {
          .div-28 {
            max-width: 100%;
          }
        }
        .div-29 {
          font-family: "VerizonNHGDS-Bold";
          font-feature-settings: "clig" off, "liga" off;
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 100%;
          }
        }
        .div-30 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 4px;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-31 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          margin-top: 29px;
          font-size: 16px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
        }
        @media (max-width: 991px) {
          .div-31 {
            max-width: 100%;
          }
        }
        .div-32 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-33 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 299px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-33 {
            white-space: initial;
          }
        }
        .div-34 {
            width: 338px;
          border-radius: 4px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-34 {
            white-space: initial;
          }
        }
        .div-35 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-36 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-37 {
           
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-38 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 299px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-38 {
            white-space: initial;
          }
        }
        .div-39 {
            width: 338px;
          border-radius: 4px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-39 {
            white-space: initial;
          }
        }
        .div-40 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-41 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-42 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-43 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 299px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-43 {
            white-space: initial;
          }
        }
        .div-44 {
            width: 338px;
          border-radius: 4px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-44 {
            white-space: initial;
          }
        }
        .div-45 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-46 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-47 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-47 {
            max-width: 100%;
          }
        }
        .div-48 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 547px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-48 {
            white-space: initial;
          }
        }
        .div-49 {
            width: 338px;
          border-radius: 4px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-49 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-50 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-51 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-52 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          margin-top: 29px;
          font-size: 16px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
        }
        @media (max-width: 991px) {
          .div-52 {
            max-width: 100%;
          }
        }
        .div-53 {
       
          display: flex;
          margin-top: 27px;
          gap: 12px;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-53 {
            flex-wrap: wrap;
          }
        }
        .div-54 {
          display: flex;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          flex: 1;
        }
        @media (max-width: 991px) {
          .div-54 {
            max-width: 100%;
          }
        }
        .div-55 {
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-55 {
            max-width: 100%;
          }
        }
        .div-56 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          font-size: 16px;
          white-space: nowrap;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-56 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-57 {
            width: 338px;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-57 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-58 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-59 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-60 {
          color: var(
            --vds-elements-text-icons-borders-secondary-onlight,
            var(--gray-44-l-6-f-7171-da-7-a-7-a-7, #6f7171)
          );
          font-feature-settings: "clig" off, "liga" off;
          flex: 1;
          margin: auto 0;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-60 {
            max-width: 100%;
          }
        }
        .div-61 {
          display: flex;
          margin-top: 24px;
          padding-right: 80px;
          gap: 4px;
          font-size: 12px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          line-height: 133%;
        }
        @media (max-width: 991px) {
          .div-61 {
            padding-right: 20px;
          }
        }
        .div-62 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .div-63 {
          border-radius: 4px;
          background-color: var(--green-94-ldcf-5-e-6-d-003514, #dcf5e6);
          display: flex;
          margin-top: 4px;
          width: 328px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-64 {
         
          border-radius: 4px;
          border-color: rgba(0, 131, 49, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          width: 100%;
          padding-left: 12px;
          gap: 135px;
        }
        .div-65 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-66 {
          justify-content: end;
          border-radius: 0px 4px 4px 0px;
          background-color: var(--green-94-ldcf-5-e-6-d-003514, #dcf5e6);
          display: flex;
          gap: 0px;
          width: 44px;
          height: 44px;
          padding: 1px 1px 1px 12px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .div-67 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--green-94-ldcf-5-e-6-d-003514, #dcf5e6);
          width: 11px;
          height: 42px;
        }
        .div-68 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-69 {
          display: flex;
          margin-top: 24px;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.5px;
        }
        @media (max-width: 991px) {
          .div-69 {
            white-space: initial;
          }
        }
        .div-70 {
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
          .div-70 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-71 {
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
          .div-71 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-72 {
          margin-top: 40px;
          background-color: #d9d9d9;
          display: flex;
         
          align-items: center;
          font-size: 14px;
          color: #000;
          font-weight: 400;
          justify-content: center;
          padding: 31px 60px;
        }
        @media (max-width: 991px) {
          .div-72 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-73 {
          display: flex;
          gap: 16px;
        }
        .div-74 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-75 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-76 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-77 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
}


