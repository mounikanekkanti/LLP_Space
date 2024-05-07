import * as React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../common/TextField";
import PageButton from "../common/Button";
import Breadcrumb from "../common/Breadcrumb";
import AccordionComponent from "../common/Accordion";
import SearchInput from "../common/SearchInput";
export default function LoginAndSecurity() {
  const navigate = useNavigate();
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
    { label: "My Account", href: "/myaccount" },
    { label: "Login & Security" },
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
              <SearchInput placeholder="Search"></SearchInput>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f4134542f3a372da03fcb26803131ed8dae2a18bde3b5f4f34321852eb44509?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
                <div className="div-26">
                  <div className="div-27">
                    <div className="div-28" />
                  </div>
                  <div className="div-29">
                    <div className="div-30">First Name:</div>
                    <div className="div-31">John</div>
                  </div>
                  <div className="div-32">
                    <div className="div-33">Last Name:</div>
                    <div className="div-34">Doe</div>
                  </div>
                  <div className="div-35">
                    <div className="div-36">
                      <div className="div-37">Phone :</div>
                      <div className="div-38">Email:</div>
                    </div>
                    <div className="div-39">
                      <div className="div-40">XXX-XXX-XXXX</div>
                      <div className="div-41">john.doe@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <div className="div-42">
                  <div className="div-43">
                    <AccordionComponent
                      title="Change Password"
                      defaultExpanded={true}
                    >
                      <InputField label="Old Password" inputType="password" />
                      <InputField label="New Password" inputType="password" />
                      <InputField
                        label="Re-Enter New Password"
                        inputType="password"
                      />
                      <div className="div-57">
                        <div className="feedback">
                          <PageButton buttonType="primary">Submit</PageButton>
                          <PageButton buttonType="secondary">Clear</PageButton>
                        </div>
                      </div>
                    </AccordionComponent>
                  </div>
                  <div className="div-43">
                    <AccordionComponent title="Security">
                      Security Content
                    </AccordionComponent>
                  </div>
                  <div className="div-43">
                    <AccordionComponent title="Change Contact Details">
                      Change Contact Details Content
                    </AccordionComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-66">
          <div className="div-67">
            <div className="div-68">Copyright 2018</div>
            <div className="div-69">Privacy Policy</div>
            <div className="div-70">Sitemap</div>
            <div className="div-71">Home</div>
          </div>
        </div>
      </div>
      <style>{`
        .div {
          background-color: #fff;
          display: flex;
          padding-top: 20px;
          flex-direction: column;
        }
        .div-2 {
          display: flex;
          margin-left: 62px;
          width: 406px;
          max-width: 100%;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          justify-content: space-between;
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
          width: -webkit-fill-available;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          margin: 20px 0 0 40px;
          padding: 0 20px;
        }
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
          }
        }
        .div-23 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font: 700 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
          }
        }
        .div-24 {
          margin-top: 24px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
          }
        }
        .div-25 {
          gap: 20px;
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
          width: 18%;
          margin-left: 0px;
          height: 416px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-26 {
          border-radius: 10px;
          background-color: #000;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          padding: 32px 34px;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 16px;
            padding: 0 20px;
          }
        }
        .div-27 {
          border-radius: 50%;
          background-color: #f2f2f2;
          display: flex;
          width: 158px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 158px;
          align-self: center;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-left: 10px;
          }
        }
        .div-28 {
          border-radius: 50%;
          background-color: #fff;
          width: 100%;
          height: 138px;
        }
        .div-29 {
          display: flex;
          margin-top: 24px;
          gap: 20px;
          font-size: 16px;
          color: #fff;
        }
        .div-30 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
        }
        .div-31 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-32 {
          display: flex;
          margin-top: 24px;
          gap: 20px;
          font-size: 16px;
          color: #fff;
        }
        .div-33 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
        }
        .div-34 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-35 {
          display: flex;
          margin-top: 24px;
          gap: 20px;
          font-size: 16px;
          color: #fff;
        }
        @media (max-width: 991px) {
          .div-35 {
            padding-right: 20px;
          }
        }
        .div-36 {
          align-self: start;
          display: flex;
          flex-direction: column;
          font-weight: 700;
        }
        .div-37 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-38 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 24px;
        }
        .div-39 {
          display: flex;
          flex-direction: column;
          font-weight: 400;
          white-space: nowrap;
          margin-left: 26px;
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
        }
        .div-41 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 24px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 74%;
          margin-left: 74px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-42 {
          display: flex;
          margin-top: 0px;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .div-42 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-43 {
          width: 71%;
          display: flex;
          gap: 470px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 700;
          line-height: 120%;
          justify-content: space-between;
          padding: 0 12px 24px 0;
        }
        @media (max-width: 991px) {
          .div-43 {
            flex-wrap: wrap;
          }
        }
        .div-44 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-family: "VerizonNHGDS-Bold";
        }
        @media (max-width: 991px) {
          .div-44 {
            max-width: 100%;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
        }
        .div-45 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 26px;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-45 {
            max-width: 100%;
          }
        }
        .div-46 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 328px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-47 {
          justify-content: center;
          align-items: end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-47 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-48 {
          border-radius: 0px 3px 3px 0px;
          width: 360px;
          max-width: 100%;
          height: 42px;
        }
        .div-49 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-49 {
            max-width: 100%;
          }
        }
        .div-50 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 328px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-51 {
          justify-content: center;
          align-items: end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          padding: 1px 60px;
        }
        @media (max-width: 991px) {
          .div-51 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-52 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 360px;
          max-width: 100%;
          height: 42px;
        }
        .div-53 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-53 {
            max-width: 100%;
          }
        }
        .div-54 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 677px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-55 {
          justify-content: center;
          align-items: end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          padding: 1px 60px;
          width: 208px;
        }
        @media (max-width: 991px) {
          .div-55 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-56 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 360px;
          max-width: 100%;
          height: 42px;
        }
        .div-57 {
          display: flex;
          margin-top: 34px;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }
        @media (max-width: 991px) {
          .div-57 {
            white-space: initial;
          }
        }
        .div-58 {
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
          .div-58 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-59 {
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
          .div-59 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-60 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1345px;
          align-items: flex-start;
          gap: 20px;
          font-size: 24px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 700;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-60 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-61 {
          align-self: end;
          display: flex;
          margin-top: 23px;
          flex-direction: column;
          justify-content: center;
          margin-left: 230px;
        }
        @media (max-width: 991px) {
          .div-61 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-62 {
          display: flex;
          gap: 545px;
          padding: 32px 2px;
          border-bottom: 1px solid #dddfdf;
        }
        @media (max-width: 991px) {
          .div-62 {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-63 {
          font-family: "VerizonNHGDS-Bold";
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex: 1;
        }
        @media (max-width: 991px) {
          .div-63 {
            max-width: 100%;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .img-7 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
          position: absolute;
          right: 20px;
        }
        .div-64 {
          border-bottom: 1px solid #dddfdf;
          align-self: center;
          display: flex;
          gap: 387px;
          font-size: 24px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 700;
          padding: 32px 2px;
     
        }
        @media (max-width: 991px) {
          .div-64 {
            flex-wrap: wrap;
          }
        }
        .div-65 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex: 1;
        }
        @media (max-width: 991px) {
          .div-65 {
            max-width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .div-66 {
          background-color: #d9d9d9;
          display: flex;
          margin-top: 78px;
          align-items: center;
          font-size: 14px;
          color: #000;
          font-weight: 400;
          justify-content: center;
          padding: 31px 60px;
        }
        @media (max-width: 991px) {
          .div-66 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-67 {
          display: flex;
          gap: 16px;
        }
        .div-68 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-69 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-70 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .contact {
          gap: 372px;
        }
      `}</style>
    </>
  );
}
