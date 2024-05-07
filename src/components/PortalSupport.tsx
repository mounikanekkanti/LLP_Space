import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import AccordionComponent from "../common/Accordion";
import PageButton from "../common/Button";
import Breadcrumb from "../common/Breadcrumb";

export default function PortalSupport() {
  const navigate = useNavigate();
  const handleLease = () => {
    navigate("/leasedocument");
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
    { label: "Portal Support",}
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
        <div className="div-07">
          <div className="div-08">
            <div className="div-09">
              <div
                className="div-010"
                style={{ cursor: "pointer" }}
                onClick={handleHome}
              >
                Home
              </div>
              <div className="div-011">Submit a Bill </div>
              <div
                className="div-012"
                style={{ cursor: "pointer" }}
                onClick={handleDocument}
              >
                Document Center
              </div>
              <div className="div-013">Request Liability Certificate</div>
              <div
                className="div-014"
                style={{ cursor: "pointer" }}
                onClick={handlePortal}
              >
                Portal Support
              </div>
              <div
                className="div-015"
                style={{ cursor: "pointer" }}
                onClick={handlePayment}
              >
                Payment Information
              </div>
            </div>
            <div className="div-016">
              <SearchInput placeholder="Search"></SearchInput>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91c0af30c05bad717a3003da0fa390eaeb2695b7a8241d4c08bc18b3952da043?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-03"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81fe85ea734e845547329ffcf0a060431beb6606c79049eafc748d9c54c90dbb?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-04"
              />
            </div>
          </div>
        </div>
        <div className="div-8">
        <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="div-9">
          <div className="div-10">
            <div className="div-11">
              <div className="div-12">
                <div className="div-13">Search</div>
                <SearchInput placeholder="What are you looking today?"></SearchInput>
              </div>
            </div>
            <div className="div-19">
            <PageButton buttonType="primary">Search</PageButton>
            </div>
          </div>
        </div>
        <div className="portal-container">
          <div className="portal-accordion">
          <AccordionComponent title="Categories" defaultExpanded={true}>
            <div className="div-22">
              <div className="div-28">
                <div className="div-29">
                  <div className="div-30">
                    <div className="div-31">Tax Bills</div>
                    <div className="div-32">2 Articles</div>
                  </div>
                  <div className="div-33">
                    <div className="div-34">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/808431bac7b4e05add2a8803061356aec803de08de6258d18c952bbda88a453d?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-35">
                  <div className="div-36">
                    <div className="div-37">Utility Bills</div>
                    <div className="div-38">3 Articles</div>
                  </div>
                  <div className="div-39">
                    <div className="div-40">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4823b0ad5142bd296c44896a1108a712501c10cc4a0882ca5a3254b43568e304?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-41">
                  <div className="div-42">
                    <div className="div-43">Notices</div>
                    <div className="div-44">5 Articles</div>
                  </div>
                  <div className="div-45">
                    <div className="div-46">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60babce55d5e40f77c88425e34cc9077b3999e4ebe587ad013d8faf0439bdccd?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-49">
                <div className="div-50">
                  <div className="div-51">
                    <div className="div-52">Lease Agreement</div>
                    <div className="div-53">5 Articles</div>
                  </div>
                  <div className="div-54">
                    <div className="div-55">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/808431bac7b4e05add2a8803061356aec803de08de6258d18c952bbda88a453d?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-8"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-56">
                  <div className="div-57">
                    <div className="div-58">Ownership Change</div>
                    <div className="div-59">2 Articles</div>
                  </div>
                  <div className="div-60">
                    <div className="div-61">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4823b0ad5142bd296c44896a1108a712501c10cc4a0882ca5a3254b43568e304?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-9"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-62">
                  <div className="div-63">
                    <div className="div-64">Direct Deposits</div>
                    <div className="div-65">3 Articles</div>
                  </div>
                  <div className="div-66">
                    <div className="div-67">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60babce55d5e40f77c88425e34cc9077b3999e4ebe587ad013d8faf0439bdccd?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-68">
                <div className="div-69">
                  <div className="div-70">
                    <div className="div-71">Technical Support</div>
                    <div className="div-72">4 Articles</div>
                  </div>
                  <div className="div-73">
                    <div className="div-74">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb920475b0bbbb715326efe1b9a1d540df3c4b49a4ef743e65c97d5883460185?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-11"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-75">
                  <div className="div-76">
                    <div className="div-77">Inquiry</div>
                    <div className="div-78">2 Articles</div>
                  </div>
                  <div className="div-79">
                    <div className="div-80">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/210d20054e5fe28ac2b4812d64649cabb6c35f7c17a50acc7d712f1504505361?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                        className="img-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionComponent>
          </div>
          <div className="portal-accordion">
          <AccordionComponent title="Frequently Asked Questions">
            Frequently Asked Questions Content
          </AccordionComponent>
          </div>
          <div className="portal-accordion">
          <AccordionComponent title="Useful Links">
            Useful Links Content
          </AccordionComponent>
          </div>
        </div>
        <div className="div-91">
          <div className="div-92">
            <div className="div-93">Copyright 2018</div>
            <div className="div-94">Privacy Policy</div>
            <div className="div-95">Sitemap</div>
            <div className="div-96">Home</div>
          </div>
        </div>
      </div>
      <style>{`
        .div {
          background-color: #fff;
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
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 0 24px;
          align-self: flex-start;
          display: flex;
          margin-left: auto;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
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
          display: flex;
          margin-top: 22px;
          width: 100%;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-2 {
          aspect-ratio: 25;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-8 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          gap: 0px;
          font: 700 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
            margin-left: auto;
            margin-right: auto;
            max-width: 1500px;
            position: relative;
            padding: 24px;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-left: 10px;
          }
        }
        .div-9 {
          background-color: #f6f6f6;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-10 {
          display: flex;
          gap: 20px;
          margin-left: auto;
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 24px;
          align-items: flex-start;
          justify-content: flex-start;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-wrap: wrap;
          }
        }
        .div-11 {
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
          flex-basis: 0;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-12 {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          white-space: nowrap;
          justify-content: flex-start;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
            display: flex;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-14 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-15 {
          justify-content: flex-end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          width: 100%;
          gap: 20px;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-16 {
          font-feature-settings: "clig" off, "liga" off;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          letter-spacing: 0.5px;
          justify-content: center;
          padding: 12px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-17 {
          align-self: start;
          display: flex;
          gap: 7px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
          margin: auto 0;
        }
        .div-18 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
          gap: 0px;
        }
        .div-19 {
          align-self: end;
          display: flex;
          margin-top: 21px;
          flex-direction: column;
          gap: 0px;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-ondark, #fff);
          font-weight: 700;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .div-20 {
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          border-radius: 24px;
          background-color: var(--vds-background-primary-dark, #000);
          padding: 12px 24px;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-22 {
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 100%;
          flex-direction: column;
          align-items: start;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          display: flex;
          width: 100%;
          max-width: 100%;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-23 {
            flex-wrap: wrap;
          }
        }
        .div-24 {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-25 {
          display: flex;
          gap: 12px;
        }
        @media (max-width: 991px) {
          .div-25 {
            flex-wrap: wrap;
          }
        }
        .div-26 {
          font-feature-settings: "clig" off, "liga" off;
          color: var(--vds-form-controls-border-hover-onlight, #000);
          white-space: nowrap;
          justify-content: flex-start;
          flex: 1;
          font: 700 24px/167% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
            display: flex;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-27 {
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          align-self: start;
          display: flex;
          gap: 0px;
          padding: 2px 4px 4px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
        }
        .div-28 {
          display: flex;
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-28 {
            flex-wrap: wrap;
          }
        }
        .div-29 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-29 {
            padding: 0 20px;
          }
        }
        .div-30 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-31 {
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
        }
        .div-32 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-33 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-34 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-34 {
            padding-left: 20px;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-35 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-35 {
            padding: 0 20px;
          }
        }
        .div-36 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-37 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-38 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-39 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-40 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-40 {
            padding-left: 20px;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-41 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-41 {
            padding: 0 20px;
          }
        }
        .div-42 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-43 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-44 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-45 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-46 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-46 {
            padding-left: 20px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-47 {
          align-self: stretch;
          display: flex;
          margin-top: 24px;
          gap: 20px;
          justify-content: space-between;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-47 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-48 {
          display: flex;
          flex-direction: column;
          gap: 0px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-48 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-49 {
          display: flex;
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-49 {
            flex-wrap: wrap;
          }
        }
        .div-50 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-50 {
            padding: 0 20px;
          }
        }
        .div-51 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-52 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-53 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-54 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-55 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-55 {
            padding-left: 20px;
          }
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-56 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-56 {
            padding: 0 20px;
          }
        }
        .div-57 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-58 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-59 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-60 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-61 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-61 {
            padding-left: 20px;
          }
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-62 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-62 {
            padding: 0 20px;
          }
        }
        .div-63 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-64 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-65 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-66 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-67 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-67 {
            padding-left: 20px;
          }
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-68 {
          display: flex;
          margin-top: 24px;
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-68 {
            flex-wrap: wrap;
          }
        }
        .div-69 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-69 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-70 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-72 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-73 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-74 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-74 {
            padding-left: 20px;
          }
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-75 {
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 0px;
          flex: 1;
          padding: 24px;
        }
        @media (max-width: 991px) {
          .div-75 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-76 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        .div-77 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-78 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-79 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-80 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-80 {
            padding-left: 20px;
          }
        }
        .img-12 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-81 {
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
          align-items: flex-start;
          border-bottom: 1px solid #dddfdf;
        }
        @media (max-width: 991px) {
          .div-81 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-82 {
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-82 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-83 {
          display: flex;
          gap: 12px;
          padding: 32px 0;
        }
        @media (max-width: 991px) {
          .div-83 {
            flex-wrap: wrap;
          }
        }
        .div-84 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          justify-content: center;
          flex: 1;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-84 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-85 {
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          align-self: start;
          display: flex;
          gap: 0px;
          padding: 2px 4px 4px;
        }
        .img-13 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
        }
        .div-86 {
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
          align-items: flex-start;
          border-bottom: 1px solid #dddfdf;
        }
        @media (max-width: 991px) {
          .div-86 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-87 {
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-87 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-88 {
          display: flex;
          gap: 12px;
          padding: 32px 0;
        }
        @media (max-width: 991px) {
          .div-88 {
            flex-wrap: wrap;
          }
        }
        .div-89 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          justify-content: center;
          flex: 1;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-89 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-90 {
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          align-self: start;
          display: flex;
          gap: 0px;
          padding: 2px 4px 4px;
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
        }
        .img-15 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
          margin-top: 4px;
          gap: 0px;
          position: absolute;
          right: 20px;
        }
        .div-91 {
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
          .div-91 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-92 {
          display: flex;
          gap: 16px;
        }
        .div-93 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          flex-grow: 1;
        }
        .div-94 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-95 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-96 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-07 {
          background-color: #000;
          display: flex;
          margin-top: 24px;
          align-items: center;
          gap: 0px;
          justify-content: center;
          padding: 18px 24px;
        }
        @media (max-width: 991px) {
          .div-07 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-08 {
          display: flex;
          width: 100%;
          max-width: 1506px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-08 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-09 {
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-09 {
            flex-wrap: wrap;
          }
        }
        .div-010 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-011 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-012 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-013 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-014 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-015 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-016 {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .div-017 {
          align-self: stretch;
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-018 {
          justify-content: flex-end;
          border-radius: 4px;
          width: 328px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        .div-019 {
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
        .div-020 {
          display: flex;
          gap: 0px;
        }
        .img-02 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          z-index: 10;
          gap: 0px;
          margin: auto 0;
        }
        .div-021 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
          gap: 0px;
        }
        .img-03 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .img-04 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .portal-container {
          align-self: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          gap: 0px;
          margin-left: auto;
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 24px;
        }
        .portal-accordion {
          padding-bottom: 24px;
        }
      `}</style>
    </>
  );
}
