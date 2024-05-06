import * as React from "react";
import { useNavigate } from "react-router-dom";
import AutoComplete from "../common/AutoComplete";
import Breadcrumb from "../common/Breadcrumb";
import SearchInput from "../common/SearchInput";
import AccordionComponent from "../common/Accordion";

export default function LeaseDocumentGridView() {
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
  const [selectedValue, setSelectedValue] = React.useState("");
  const options = [
    { value: "1", label: "201897465 - North Reese Avenue" },
    { value: "2", label: "301897465 - North Reese Avenue" },
    { value: "3", label: "401897465 - North Reese Avenue" },
  ];

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Document Center", href: "/documentcenter" },
    { label: "Lease Documents" },
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91c0af30c05bad717a3003da0fa390eaeb2695b7a8241d4c08bc18b3952da043?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5180cacd29c09f08340af054f88d4b5a75dfc20f3c47ce4bfc58f3f14f0050a?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-7"
                style={{ cursor: "pointer" }}
                onClick={handleLeaseList}
              />
            </div>
          </div>
          <div className="div-34" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82915d3f66220340dd71c77dace84d55cac98033828b22f8f70d46157de9670b?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img-17"
          />
          <div className="accordion-wrapper">
            <AccordionComponent title="Lease Agreements" defaultExpanded={true}>
              <div className="div-37">
                <div className="div-38">
                  <div className="div-39">
                    <div className="div-43">2018895746</div>
                    <div className="div-44">November 14, 2016</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d0486ea93061517e6b626d27a828d210fa577cee93ab93658ca9853c4d1ba3?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-9"
                    />
                    <div style={{ display: "inline", margin: "0 auto" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8d7d45b85e4d46b2f472a0f3f61ad0c537d5758e6222351c4d1002fdae856c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-10"
                      />
                      <img
                        className="img-10"
                        style={{ height: "20px", width: "20px" }}
                        src={"/images/Vector.png"}
                      />
                    </div>
                  </div>
                  <div className="div-42">
                    <div className="div-43">2018895746</div>
                    <div className="div-44">November 14, 2016</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b223fbaf79d886f3a4a3495cd5f4164621445d8c20e33dd899945fedf42f03cd?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-11"
                    />
                    <div style={{ display: "inline", margin: "0 auto" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daff2ac3439184486b4a97f2d5954ab57770aeed8ecb4b4617bc4ffb4f3df35?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-12"
                      />
                      <img
                        className="img-10"
                        style={{ height: "20px", width: "20px" }}
                        src={"/images/Vector.png"}
                      />
                    </div>
                  </div>
                  <div className="div-45">
                    <div className="div-46">201897465</div>
                    <div className="div-47">December 14, 2018</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3133a15253e45b2c69147e8d3c9d920ad3de7b08bcde7ba25cb4bce2435c927?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-13"
                    />
                    <div style={{ display: "inline", margin: "0 auto" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a255140fb85b8757d998750bd3ba92d8002add3014a8550850fb026842a9be2?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-14"
                      />
                      <img
                        className="img-10"
                        style={{ height: "20px", width: "20px" }}
                        src={"/images/Vector.png"}
                      />
                    </div>
                  </div>
                  <div className="div-48">
                    <div className="div-49">201897465</div>
                    <div className="div-50">September 14, 2016</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e1436e24da67c65995b66908b3ba40d31c3356aeed1c489da0813a5ccb7a05?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-15"
                    />
                    <div style={{ display: "inline", margin: "0 auto" }}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4eb351d9115db67079d45f54b8ee1020b4d5fdff39d70438c6cc80af3b38d83?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-16"
                      />
                      <img
                        className="img-10"
                        style={{ height: "20px", width: "20px" }}
                        src={"/images/Vector.png"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionComponent>
          </div>
          <div className="accordion-wrapper">
            <AccordionComponent title="Lease Amendments" defaultExpanded={true}>
              <div className="div-38">
                <div className="div-42">
                  <div className="div-40">201897465</div>
                  <div className="div-41">September 14, 2016</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d0486ea93061517e6b626d27a828d210fa577cee93ab93658ca9853c4d1ba3?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-9"
                  />
                  <div style={{ display: "inline", margin: "0 auto" }}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8d7d45b85e4d46b2f472a0f3f61ad0c537d5758e6222351c4d1002fdae856c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-10"
                    />
                    <img
                      className="img-10"
                      style={{ height: "20px", width: "20px" }}
                      src={"/images/Vector.png"}
                    />
                  </div>
                </div>
                <div className="div-42">
                  <div className="div-43">2018895746</div>
                  <div className="div-44">November 14, 2016</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b223fbaf79d886f3a4a3495cd5f4164621445d8c20e33dd899945fedf42f03cd?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-11"
                  />
                  <div style={{ display: "inline", margin: "0 auto" }}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daff2ac3439184486b4a97f2d5954ab57770aeed8ecb4b4617bc4ffb4f3df35?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-12"
                    />
                    <img
                      className="img-10"
                      style={{ height: "20px", width: "20px" }}
                      src={"/images/Vector.png"}
                    />
                  </div>
                </div>
                <div className="div-45">
                  <div className="div-46">201897465</div>
                  <div className="div-47">December 14, 2018</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3133a15253e45b2c69147e8d3c9d920ad3de7b08bcde7ba25cb4bce2435c927?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-13"
                  />
                  <div style={{ display: "inline", margin: "0 auto" }}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a255140fb85b8757d998750bd3ba92d8002add3014a8550850fb026842a9be2?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-14"
                    />
                    <img
                      className="img-10"
                      style={{ height: "20px", width: "20px" }}
                      src={"/images/Vector.png"}
                    />
                  </div>
                </div>
                <div className="div-48">
                  <div className="div-49">201897465</div>
                  <div className="div-50">September 14, 2016</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e1436e24da67c65995b66908b3ba40d31c3356aeed1c489da0813a5ccb7a05?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-15"
                  />
                  <div style={{ display: "inline", margin: "0 auto" }}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4eb351d9115db67079d45f54b8ee1020b4d5fdff39d70438c6cc80af3b38d83?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-16"
                    />
                    <img
                      className="img-10"
                      style={{ height: "20px", width: "20px" }}
                      src={"/images/Vector.png"}
                    />
                  </div>
                </div>
              </div>
            </AccordionComponent>
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
          gap: 20px;
          overflow-x: hidden;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          align-self: start;
          display: flex;
          margin-left: 110px;
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
          gap: 0px;
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
          gap: 0px;
        }
        .div-5 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-6 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-7 {
          background-color: #000;
          display: flex;
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
          margin-top: 0;
          width: 100%;
          max-width: 1684px;
          flex-direction: column;
          align-items: start;
          gap: 4px;
          margin-left: 182px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          display: flex;
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          gap: 0px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-24 {
          display: flex;
          color: #000;
          align-self: stretch;
          margin-top: 24px;
          margin-bottom: 24px;
          gap: 0px;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-25 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 29px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-26 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 328px;
          max-width: 100%;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-27 {
          justify-content: flex-end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          width: 330px;
          padding-left: 12px;
          gap: 20px;
        }
        .div-28 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          gap: 0px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          width: 100%;
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
          gap: 0px;
          margin: auto 0;
        }
        .div-30 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 12px;
          height: 42px;
          gap: 0px;
        }
        .div-31 {
          display: flex;
          margin-top: 29px;
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
          display: flex;
          color: #000;
          gap: 0px;
          flex-grow: 1;
          flex-basis: auto;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
            flex-wrap: wrap;
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
          gap: 0px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
        }
        .div-34 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--blackl-000000-dffffff, #000);
          align-self: stretch;
          margin-top: 23px;
          height: 1px;
          gap: 0px;
          width: 1170px;
        }
        @media (max-width: 991px) {
          .div-34 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-35 {
          width: 1162px;
          display: flex;
          margin-top: 40px;
          gap: 536px;
          font-size: 20px;
          color: var(--blackl-000000-dffffff, #000);
          font-weight: 400;
          line-height: 120%;
          justify-content: space-between;
          padding: 2px;
          border-bottom: 1px solid;
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
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
          margin-top: 5px;
          gap: 0px;
        }
        .div-37 {
          align-self: stretch;
          display: flex;
          margin-top: 0px;
          width: 100%;
          gap: 20px;
          color: var(--blackl-000000-dffffff, #000);
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-38 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          width: 1162px;
        }
        @media (max-width: 991px) {
          .div-38 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-39 {
            height: 238px;
          width: 242px;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 16px 0 16px 24px;
        }
        .div-40 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-41 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-9 {
          height: 114px;
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
        }
        .img-10 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;

          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
          height: 20px;
          width: 28px;
        }
        .div-42 {
            height: 238px;
            width: 242px;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 16px 0 16px 24px;
        }
        .div-43 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-44 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-11 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
          height: 114px;
        }
        .img-12 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;

          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
          height: 20px;
          width: 28px;
        }
        .div-45 {
            width: 242px;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 16px 0 16px 24px;
        }
        .div-46 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-47 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-13 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
          height: 114px;
        }
        .img-14 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;

          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
          height: 20px;
          width: 28px;
        }
        .div-48 {
            width: 242px;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 16px 0 16px 24px;
        }
        .div-49 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-50 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-15 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
          height: 114px;
        }
        .img-16 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;

          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
          height: 20px;
          width: 28px;
        }
        .img-17 {
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
        .div-51 {
            width:1152px;
          display: flex;
          margin-top: 40px;
          gap: 536px;
          font-size: 20px;
          color: var(--blackl-000000-dffffff, #000);
          font-weight: 400;
          line-height: 120%;
          justify-content: space-between;
          padding: 2px;
          border-bottom: 1px solid;
        }
        @media (max-width: 991px) {
          .div-51 {
            flex-wrap: wrap;
          }
        }
        .div-52 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-52 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-18 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: start;
          margin-top: 5px;
          gap: 0px;
        }
        .div-53 {
          display: flex;
          margin-top: 40px;
          width: 1040px;
          max-width: 100%;
          gap: 20px;
          color: var(--blackl-000000-dffffff, #000);
        }
        @media (max-width: 991px) {
          .div-53 {
            flex-wrap: wrap;
          }
        }
        .div-54 {
          align-items: start;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 16px 0 16px 24px;
        }
        .div-55 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-56 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-19 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
        }
        .img-20 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
        }
        .div-57 {
          align-items: start;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 16px 0 16px 24px;
        }
        .div-58 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-59 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-21 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
        }
        .img-22 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
        }
        .div-60 {
          align-items: start;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 16px 0 16px 24px;
        }
        .div-61 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-62 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-23 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
        }
        .img-24 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
        }
        .div-63 {
          align-items: start;
          border-radius: 12px;
          box-shadow: 0px 24px 16px 0px rgba(0, 0, 0, 0.02);
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 16px 0 16px 24px;
        }
        .div-64 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-65 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-25 {
          aspect-ratio: 1.14;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 16px;
          gap: 0px;
        }
        .img-26 {
          aspect-ratio: 1.85;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: center;
          gap: 0px;
          margin: 28px 0 0 28px;
        }
        .div-66 {
          background-color: #d9d9d9;
          display: flex;
          margin-top: 40px;
          width: 100%;
          align-items: center;
          gap: 0px;
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
            flex-wrap: wrap;
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
          gap: 0px;
          flex-grow: 1;
        }
        .div-69 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-70 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
      `}</style>
    </>
  );
}
