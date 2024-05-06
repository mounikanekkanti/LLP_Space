import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import Breadcrumb from "../common/Breadcrumb";
import AutoComplete from "../common/AutoComplete";
import AccordionComponent from "../common/Accordion";

export default function LeaseDocumentListView() {
  const navigate = useNavigate();
  const handleLeaseGrid = () => {
    navigate("/leasedocumentgridview");
  };
  const handleLeaseList = () => {
    navigate("/leasedocumentlistview");
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
  const handleHome = () => {
    navigate("/");
  };
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Document Center", href: "/documentcenter" },
    { label: "Lease Documents" },
  ];
  const [selectedValue, setSelectedValue] = React.useState("");
  const options = [
    { value: "1", label: "201897465 - North Reese Avenue" },
    { value: "2", label: "301897465 - North Reese Avenue" },
    { value: "3", label: "401897465 - North Reese Avenue" },
  ];

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efc51911c85474e1b3cc1a78091651ab3eb930057570269a53a3c37a1fc0620?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
          <div className="div-24">Lease Documents</div>
          <AutoComplete
            options={options}
            onChange={handleChange}
            value={selectedValue}
            label="Please select the Contract ID"
          />
          <div className="div-31">
            <div className="div-32">
              Contract ID: 201897465 - North Reese Avenue
            </div>
            <div className="div-33">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c80fe5ed092605637b90cf56874175fc5004c921b7f520945aa636df379eba10?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-6"
                style={{ cursor: "pointer" }}
                onClick={handleLeaseGrid}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c592c2bcbe0ecb79ac584f0cb6bd3092558eccc4293050384048d7435804e85?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-7"
                style={{ cursor: "pointer" }}
                onClick={handleLeaseList}
              />
            </div>
          </div>
          <div className="div-34" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9cc801910f295cfee2b7e80d506624c5bb9bf47dbcdaca05869ac5f1ab8ea5d?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img-14"
          />
          <div className="accordion-wrapper">
            <AccordionComponent title="Lease Agreements" defaultExpanded={true}>
              <div className="div-37">
                <div className="div-38">
                  <div className="div-39">
                    <div className="div-40">Document</div>
                    <div className="div-41">Date Added</div>
                    <div className="div-42">Size</div>
                    <div className="div-43">Type</div>
                    <div className="div-44">Action</div>
                  </div>
                  <div className="div-45">
                    <div className="div-46">201897465_Name</div>
                    <div className="div-47">09/14/2016</div>
                    <div className="div-48">20 MB</div>
                    <div className="div-49">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/697152f83965618dbe69b809d170625261fa74f0d5bbb87a9109d4aff27301a1?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-9"
                    />
                  </div>
                  <div className="div-50">
                    <div className="div-51">201897465_Name</div>
                    <div className="div-52">09/14/2016</div>
                    <div className="div-53">25 MB</div>
                    <div className="div-54">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0bde9bfcfa55cbfcdeeefcf637aa8ed56e3d0371a77dea8f5838155e2e5212b?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-10"
                    />
                  </div>
                  <div className="div-55">
                    <div className="div-56">201897465_Name</div>
                    <div className="div-57">09/14/2016</div>
                    <div className="div-58">15 MB</div>
                    <div className="div-59">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/767c3accee899b7e314a9823fba1e8155f7621a794b01392e9e61ef46d29ae80?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-11"
                    />
                  </div>
                  <div className="div-60">
                    <div className="div-61">201897465_Name</div>
                    <div className="div-62">09/14/2016</div>
                    <div className="div-63">10 MB</div>
                    <div className="div-64">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5671cabc3d87890405d65ab9544811ea8a16c81a587445feb387aba332edbf72?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-12"
                    />
                  </div>
                  <div className="div-65">
                    <div className="div-66">201897465_Name</div>
                    <div className="div-67">09/14/2016</div>
                    <div className="div-68">35 MB</div>
                    <div className="div-69">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/54d31e33c8d76d8d52867fb4a79aeb51caee4a0febaedbfde41796bda2029845?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-13"
                    />
                  </div>
                </div>
              </div>
            </AccordionComponent>
          </div>
          <div className="accordion-wrapper">
            <AccordionComponent title="Lease Amendments" defaultExpanded={true}>
              <div className="div-37">
                <div className="div-38">
                  <div className="div-72">
                    <div className="div-73">Document</div>
                    <div className="div-74">Date Added</div>
                    <div className="div-75">Size</div>
                    <div className="div-76">Type</div>
                    <div className="div-77">Action</div>
                  </div>
                  <div className="div-78">
                    <div className="div-79">201897465_Name</div>
                    <div className="div-80">09/14/2016</div>
                    <div className="div-81">20 MB</div>
                    <div className="div-82">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc1282f424a8772f90efdb0aa1feed38cb681d9848f5fb89aa3b8b78580d90a?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-16"
                    />
                  </div>
                  <div className="div-83">
                    <div className="div-84">201897465_Name</div>
                    <div className="div-85">09/14/2016</div>
                    <div className="div-86">25 MB</div>
                    <div className="div-87">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/519ab7840ceeb4a6b5cac1e031b2a4f0f44d1ed98f5f6a7edc2130f816f70deb?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-17"
                    />
                  </div>
                  <div className="div-88">
                    <div className="div-89">201897465_Name</div>
                    <div className="div-90">09/14/2016</div>
                    <div className="div-91">15 MB</div>
                    <div className="div-92">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/26ffe51b9c8b28bdd40a14d1877580cf0074e9e706b6e4cfc032ae9cdfaf72ea?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-18"
                    />
                  </div>
                  <div className="div-93">
                    <div className="div-94">201897465_Name</div>
                    <div className="div-95">09/14/2016</div>
                    <div className="div-96">10 MB</div>
                    <div className="div-97">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a6ceccc21d566d6dc43327ad93281dd39932e736a0be64a55f0246cbb5a592?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-19"
                    />
                  </div>
                  <div className="div-98">
                    <div className="div-99">201897465_Name</div>
                    <div className="div-100">09/14/2016</div>
                    <div className="div-101">35 MB</div>
                    <div className="div-102">PDF</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443fad8d8d18e4d8e18cd1c016386dbaca7d826c602b104ab8f626f67ee503d?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-20"
                    />
                  </div>
                </div>
              </div>
            </AccordionComponent>
          </div>
        </div>
        <div className="div-103">
          <div className="div-104">
            <div className="div-105">Copyright 2018</div>
            <div className="div-106">Privacy Policy</div>
            <div className="div-107">Sitemap</div>
            <div className="div-108">Home</div>
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
          align-self: start;
          display: flex;
          margin-left: 115px;
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
          justify-content: center;
          padding: 18px 60px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
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
        }
        .div-11 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-12 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
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
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
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
          margin: auto 0;
        }
        .div-21 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
        .div-22 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1500px;
          flex-direction: column;
          gap: 0px;
          padding: 20px;
          text-align: left;
          margin: auto;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
          }
        }
        .div-23 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
          }
        }
        .div-24 {
          color: #000;
          align-self: stretch;
          margin-top: 24px;
          margin-bottom: 24px;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
          }
        }
        .div-25 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 24px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-26 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 348px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-27 {
          justify-content: flex-end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          padding-left: 12px;
          gap: 20px;
        }
        .div-28 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-29 {
          justify-content: end;
          border-radius: 0px 4px 4px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          gap: 0px;
          width: 44px;
          height: 44px;
          padding: 1px 1px 1px 12px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .div-30 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 12px;
          height: 42px;
        }
        .div-31 {
          display: flex;
          margin-top: 27px;
          width: 1162px;
          max-width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-31 {
            flex-wrap: wrap;
          }
        }
        .div-32 {
          color: #000;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
          }
        }
        .div-33 {
          display: flex;
          gap: 20px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-34 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--blackl-000000-dffffff, #000);
          align-self: stretch;
          margin-top: 25px;
          height: 0px;
          width: 1162px;
        }
        @media (max-width: 991px) {
          .div-34 {
            max-width: 100%;
          }
        }
        .div-35 {
          display: flex;
          margin-top: 40px;
          gap: 12px;
          font-size: 20px;
          color: var(--blackl-000000-dffffff, #000);
          font-weight: 400;
          line-height: 120%;
          justify-content: space-between;
          padding: 2px 2px 12px 2px;
          width: 1162px;
          border-bottom: 1px solid #e3e5e5;
        }
        @media (max-width: 991px) {
          .div-35 {
            flex-wrap: wrap;
          }
        }
        .div-36 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
          margin-top: 5px;
        }
        .div-37 {
          align-self: stretch;
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          justify-content: space-between;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-38 {
          display: flex;
          flex-direction: column;
          width: 1182px;
        }
        @media (max-width: 991px) {
          .div-38 {
            max-width: 100%;
          }
        }
        .div-39 {
          width: 1150px;
          display: flex;
          gap: 20px;
          font-size: 20px;
          font-weight: 700;
          line-height: 120%;
          justify-content: space-between;
          padding: 16px 80px 16px 16px;
        }
        @media (max-width: 991px) {
          .div-39 {
            flex-wrap: wrap;
            padding-right: 20px;
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
        }
        .div-42 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-43 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-44 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-45 {
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-45 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-46 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-47 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-48 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-49 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-9 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .div-50 {
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          gap: 20px;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-50 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-51 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-52 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-53 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-54 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-10 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          margin: auto 0;
        }
        .div-55 {
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-55 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-56 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-57 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-58 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-59 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-11 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .div-60 {
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          gap: 20px;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-60 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-61 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-62 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-63 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-64 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-12 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          margin: auto 0;
        }
        .div-65 {
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-65 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-66 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-67 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-68 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-69 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-13 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .img-14 {
          position: fixed;
          top: 80%;
          right: 20px;
          transform: translateY(-80%);
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 72px;
          gap: 0px;
          margin: auto 0;
          position: absolute;
        }
        .div-70 {
          display: flex;
          margin-top: 82px;
          gap: 12px;
          font-size: 20px;
          color: var(--blackl-000000-dffffff, #000);
          font-weight: 400;
          line-height: 120%;
          justify-content: space-between;
          padding: 2px 2px 12px 2px;
          width: 1162px;
          border-bottom: 1px solid #e3e5e5;
        }
        @media (max-width: 991px) {
          .div-70 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-71 {
            max-width: 100%;
          }
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
          margin-top: 5px;
        }
        .div-72 {
          display: flex;
          gap: 20px;
          font-size: 20px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 700;
          line-height: 120%;
          justify-content: space-between;
          padding: 16px 80px 16px 16px;
          width: 1162px;
        }
        @media (max-width: 991px) {
          .div-72 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-73 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-74 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-75 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-76 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-77 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-78 {
          width: 1162px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-78 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-79 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-80 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-81 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-82 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-16 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .div-83 {
          width: 1162px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-83 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-84 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-85 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-86 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-87 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-17 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          margin: auto 0;
        }
        .div-88 {
          width: 1162px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-88 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-89 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-90 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-91 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-92 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-18 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .div-93 {
          width: 1162px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-93 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-94 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-95 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-96 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-97 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-19 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          margin: auto 0;
        }
        .div-98 {
          width: 1162px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          padding: 16px 16px 16px 16px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-98 {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-99 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 150%;
        }
        .div-100 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-101 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .div-102 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          letter-spacing: 0.5px;
        }
        .img-20 {
          aspect-ratio: 3.57;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
        }
        .div-103 {
          background-color: #d9d9d9;
          display: flex;
          margin-top: 40px;
          align-items: center;
          font-size: 14px;
          color: #000;
          font-weight: 400;
          justify-content: center;
          padding: 31px 60px;
        }
        @media (max-width: 991px) {
          .div-103 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-104 {
          display: flex;
          gap: 16px;
        }
        .div-105 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-106 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-107 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-108 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .accordion-wrapper {
          width: 1162px;
        }
      `}</style>
    </>
  );
}
