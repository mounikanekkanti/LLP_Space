import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function DocumentCenter() {
  const navigate = useNavigate();
  const handleLease = () => {
    navigate("/leasedocumentgridview");
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
              <div className="div-017">
                <div className="div-018">
                  <div className="div-019">Search</div>
                  <div className="div-020">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f2c04915a0180ea1735736b6c0a27f3819cd061f59e4d6d14f44ec752f6e7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="img-02"
                    />
                    <div className="div-021" />
                  </div>
                </div>
              </div>
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
          <div className="div-9">
            Home /{" "}
            <span style={{ fontWeight: 700, fontFamily: "VerizonNHGDS-Bold" }}>
              Document Center
            </span>
          </div>
          <div className="div-10">Document Center</div>
          <div className="div-11">
            <div className="div-12">
              <div className="div-13">
                <div className="div-14">My Documents</div>
                <div className="div-15">My Files</div>
              </div>
              <div className="div-16">
                <div className="div-17">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43df0acd403cf24a2db92d24d4301ee078826da8ffa8e0729753ce9a57bf9029?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-3"
                  />
                </div>
              </div>
            </div>
            <div className="div-18">
              <div className="div-19">
                <div className="div-20">Lease Documents</div>
                <div className="div-21">Lease Agreements and Amendments</div>
              </div>
              <div className="div-22">
                <div
                  className="div-23"
                  style={{ cursor: "pointer" }}
                  onClick={handleLease}
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43df0acd403cf24a2db92d24d4301ee078826da8ffa8e0729753ce9a57bf9029?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27cd886994fdcade5e3590c631c814a8ae9d5cad75fc0c89f5af2845f7d181d5?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img-5"
          />
        </div>
        <div className="div-24">
          <div className="div-25">
            <div className="div-26">Copyright 2018</div>
            <div className="div-27">Privacy Policy</div>
            <div className="div-28">Sitemap</div>
            <div className="div-29">Home</div>
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
          margin-left: auto;
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 24px;
          display: flex;
          width: 100%;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-9 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-10 {
          color: #000;
          gap: 0px;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-11 {
          align-self: flex-start;
          display: flex;
          gap: 20px;
          width: 1375px;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-wrap: wrap;
          }
        }
        .div-12 {
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
          .div-12 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-13 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-14 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-16 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-17 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-left: 20px;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-18 {
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
          .div-18 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-19 {
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-20 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 700 20px/120% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-21 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-22 {
          padding-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          justify-content: center;
          align-items: end;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-left: 20px;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .img-5 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 215px;
          gap: 0px;
          width: 72px;
          position: absolute;
          right: 15px;
        }
        @media (max-width: 991px) {
          .img-5 {
            margin-top: 40px;
          }
        }
        .div-24 {
          background-color: #d9d9d9;
          display: flex;
          margin-top: 256px;
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
          .div-24 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-25 {
          display: flex;
          gap: 16px;
        }
        .div-26 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          flex-grow: 1;
        }
        .div-27 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-28 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-29 {
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
          padding: 18px 60px;
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
      `}</style>
    </>
  );
}
