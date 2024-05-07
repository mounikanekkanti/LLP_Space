import * as React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

export default function MyAccount() {
  const navigate = useNavigate();
  const handleTransactionHistory = () => {
    navigate("/transactionhistory");
  };
  const handleLogin = () => {
    navigate("/loginandsecurity");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handlePortal = () => {
    navigate("/portalsupport");
  };
  const handlePayment = () => {
    navigate("/paymentinformation");
  };
  const handleDocument = () => {
    navigate("/documentcenter");
  };
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "My Account" },
  ];
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2371a812a3045ccd9b601552ba384efcf6763751af6f0d8eec5e0726caa4a36?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img"
          />
          <div className="div-3">
            <div className="div-4">Residential</div>
            <div className="div-5">Business</div>
            <div className="div-6">Wireless</div>
          </div>
        </div>
        <div className="div-7">
          <div className="div-8">
            <div className="div-9">
              <div
                className="div-10"
                style={{ cursor: "pointer" }}
                onClick={handleHome}
              >
                Home
              </div>
              <div className="div-11">Submit a Bill </div>
              <div
                className="div-12"
                style={{ cursor: "pointer" }}
                onClick={handleDocument}
              >
                Document Center
              </div>
              <div className="div-13">Request Liability Certificate</div>
              <div
                className="div-14"
                style={{ cursor: "pointer" }}
                onClick={handlePortal}
              >
                Portal Support
              </div>
              <div
                className="div-15"
                style={{ cursor: "pointer" }}
                onClick={handlePayment}
              >
                Payment Information
              </div>
            </div>
            <div className="div-16">
              <div className="div-17">
                <div className="div-18">
                  <div className="div-19">Search</div>
                  <div className="div-20">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a091f1ffad69cb4b881772f1877971aa0cec9282087b56d76a1119ecae6ce06?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-2"
                    />
                    <div className="div-21" />
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/95daa1f4abb841f6893f97ec0d9a163b45de0f93a9756d83056976087c82d401?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-3"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81fe85ea734e845547329ffcf0a060431beb6606c79049eafc748d9c54c90dbb?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-4"
              />
            </div>
          </div>
        </div>
        <div className="div-22">
          <Breadcrumb items={breadcrumbItems} />
          <div className="div-24">
            <div className="div-25">
              <div className="column">
                <div
                  className="div-26"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogin}
                >
                  <div className="div-27">Login & Security</div>
                  <div className="div-28">
                    Change Password, Security, and Contact Details
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65bd51141f7fcb0ec7e54ef4d9de5734cb37a8b7ed53204d45956827e394947f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-5"
                  />
                </div>
              </div>
              <div className="column-2">
                <div className="div-29">
                  <div className="div-30">My Addresses</div>
                  <div className="div-31">Add or Edit Address</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65bd51141f7fcb0ec7e54ef4d9de5734cb37a8b7ed53204d45956827e394947f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-6"
                  />
                </div>
              </div>
              <div className="column-3">
                <div className="div-32">
                  <div className="div-33">My Files</div>
                  <div className="div-34">Add documents</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65bd51141f7fcb0ec7e54ef4d9de5734cb37a8b7ed53204d45956827e394947f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-7"
                  />
                </div>
              </div>
              <div className="column-4">
                <div
                  className="div-35"
                  style={{ cursor: "pointer" }}
                  onClick={handleTransactionHistory}
                >
                  <div className="div-36">Transaction History</div>
                  <div className="div-37">Track Status, Get Notifications</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65bd51141f7fcb0ec7e54ef4d9de5734cb37a8b7ed53204d45956827e394947f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49617f9ef509e7ca8152f92885ed16a1dff8fa9a4853c9749c1ed10e5acd29a6?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img-9"
          />
        </div>
        <div className="div-38">
          <div className="div-39">
            <div className="div-40">Copyright 2018</div>
            <div className="div-41">Privacy Policy</div>
            <div className="div-42">Sitemap</div>
            <div className="div-43">Home</div>
          </div>
        </div>
      </div>
      <style>{`
        .div {
          background-color: #fff;
          display: flex;
          padding-top: 20px;
          flex-direction: column;
          overflow-x: hidden;
        }
        .div-2 {
          display: flex;
          margin-left: 120px;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 128px;
          max-width: 100%;
        }
        .div-3 {
          align-self: end;
          display: flex;
          margin-top: 24px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
          }
        }
        .div-4 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-5 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-6 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-7 {
          background-color: #000;
          display: flex;
          margin-top: 24px;
          align-items: center;
          gap: 0px;
          justify-content: center;
          padding: 18px 60px;
          padding-left: 55px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-8 {
          display: flex;
          width: 100%;
          max-width: 1506px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-9 {
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-9 {
            flex-wrap: wrap;
          }
        }
        .div-10 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-11 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-12 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-14 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-16 {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .div-17 {
          align-self: stretch;
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-18 {
          justify-content: flex-end;
          border-radius: 4px;
          width: 328px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        .div-19 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          gap: 0px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          width: 260px;
          display: flex;
        }
        .div-20 {
          display: flex;
          gap: 0px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          z-index: 10;
          gap: 0px;
          margin: auto 0;
        }
        .div-21 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
          gap: 0px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-22 {
          align-self: center;
          display: flex;
          margin-top: 23px;
          width: 100%;
          max-width: 1684px;
          flex-direction: column;
          margin-left: 167px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
          }
        }
        .div-23 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-size: 12px;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
          }
        }
        .div-24 {
          margin-top: 24px;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-25 {
          gap: 40px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-25 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 15%;
          margin-right: 24px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-26 {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          width: 100%;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-26 {
            margin-top: 24px;
            padding: 0 20px;
          }
        }
        .div-27 {
          font-feature-settings: "clig" off, "liga" off;
          font-size: 20px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-28 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/16px Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
          margin-top: 16px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 15%;
          margin-right: 24px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-29 {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          width: 100%;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-29 {
            margin-top: 24px;
            padding: 0 20px;
          }
        }
        .div-30 {
          font-feature-settings: "clig" off, "liga" off;
          font-size: 20px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-31 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
          margin-top: 32px;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 15%;
          margin-right: 24px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-32 {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          width: 100%;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-32 {
            margin-top: 24px;
            padding: 0 20px;
          }
        }
        .div-33 {
          font-feature-settings: "clig" off, "liga" off;
          font-size: 20px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-34 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
          margin-top: 32px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 15%;
          margin-right: 24px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-35 {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          width: 100%;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-35 {
            margin-top: 24px;
            padding: 0 20px;
          }
        }
        .div-36 {
          font-feature-settings: "clig" off, "liga" off;
          font-size: 20px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-37 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
          margin-top: 32px;
        }
        .img-9 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: end;
          margin-top: 268px;
          position: absolute;
          right: 20px;
        }
        @media (max-width: 991px) {
          .img-9 {
            margin-top: 40px;
          }
        }
        .div-38 {
          margin-top: 345px;
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
          .div-38 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-39 {
          display: flex;
          gap: 16px;
        }
        .div-40 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-41 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-42 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-43 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
}
