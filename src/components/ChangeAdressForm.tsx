import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ChangeAdressForm() {
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5a26481d715e45775904295dfd9e770e3f71defdf57dd8175db00b348afe82?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
                    Submit a Notice &gt; Change Address Form
                  </div>
                  <div className="div-20">Change of Address Form</div>
                  <div className="div-21">Please select the Contract ID</div>
                  <div className="div-22">
                    <div className="div-23">
                      <div className="div-24">
                        201897465 - North Reese Avenue
                      </div>
                      <div className="div-25">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03fbec0f5e7926f7be8a3891be9368c714a8cc9a89d507b8f2192ead033c7ee7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db844d69c465da93ad845eafe7ae098aad7f77433cd351ebb6b4723cf0d6fb76?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-3"
                  />
                  <div className="div-28">
                    <div className="div-29">Success!</div>
                    <div className="div-30">
                      Your New Payment Address is Updated With Verizon.
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/203e2a091958cff8b82391e70ff4b43e269ab09068689b3688ea4f0dc09b2287?apiKey=a938513dc279413eaac5ce0f8c637f66&"
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
          <div className="div-47">Site Address</div>
          <div className="div-48">
            <div className="div-49">
              32, My Street, Kingston, New York 12401.
            </div>
          </div>
          <div className="div-50">New Payment Address </div>
          <div className="div-51">Use my Location</div>
          <div className="div-52">
            <div className="div-53">
              <div className="div-54">Address</div>
              <div className="div-55">
                <div className="div-56">
                  <div className="div-57">5396 North Reese Avenue</div>
                  <div className="div-58" />
                </div>
              </div>
            </div>
            <div className="div-59">Action type should be added</div>
          </div>
          <div className="div-60">
            <div className="div-61">
              <div className="div-62">Landmark</div>
              <div className="div-63">
                <div className="div-64">
                  <div className="div-65">Golden Gate Bridge</div>
                  <div className="div-66" />
                </div>
              </div>
            </div>
            <div className="div-67">
              <div className="div-68">City</div>
              <div className="div-69">
                <div className="div-70">
                  <div className="div-71">Fresno</div>
                  <div className="div-72" />
                </div>
              </div>
            </div>
          </div>
          <div className="div-73">
            <div className="div-74">
              <div className="div-75">State</div>
              <div className="div-76">
                <div className="div-77">
                  <div className="div-78">CA</div>
                  <div className="div-79" />
                </div>
              </div>
            </div>
            <div className="div-80">
              <div className="div-81">Zipcode</div>
              <div className="div-82">
                <div className="div-83">
                  <div className="div-84">93722</div>
                  <div className="div-85" />
                </div>
              </div>
            </div>
          </div>
          <div className="div-86">
            <div className="div-87">
              <div className="div-88" />
            </div>
            <div className="div-89">Set this as New Notice Address</div>
          </div>
          <div className="div-90">
            <div className="div-91">Submit</div>
            <div className="div-92">Clear</div>
          </div>
        </div>
        <div className="div-93">
          <div className="div-94">
            <div className="div-95">Copyright 2018</div>
            <div className="div-96">Privacy Policy</div>
            <div className="div-97">Sitemap</div>
            <div className="div-98">Home</div>
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
          margin: 20px 0 0 130px;
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
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
          }
        }
        .div-19 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-size: 12px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-20 {
          font-size: 24px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 27px;
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
          width: 305px;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 11px;
          padding: 1px 1px 1px 12px;
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
          padding: 0 1px;
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
          align-items: flex-start;
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
          font-size: 16px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          margin-top: 29px;
          align-items: flex-start;
          display: flex;
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
          width: 320px;
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
          width: 320px;
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
          width: 320px;
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
        .div-48 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 320px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        .div-49 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          border-radius: 4px;
          border-color: rgba(216, 218, 218, 1);
          border-style: solid;
          border-width: 1px;
          padding: 12px;
        }
        .div-50 {
          font-size: 16px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          margin-top: 29px;
          align-items: flex-start;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-50 {
            max-width: 100%;
          }
        }
        .div-51 {
          font-feature-settings: "clig" off, "liga" off;
          justify-content: center;
          border-radius: 24px;
          background-color: var(--vds-background-primary-dark, #000);
          margin-top: 24px;
          color: var(--vds-elements-text-icons-borders-primary-ondark, #fff);
          text-align: center;
          letter-spacing: 0.5px;
          padding: 12px 24px;
          font: 700 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-51 {
            padding: 0 20px;
          }
        }
        .div-52 {
          text-align: left;
          align-self: stretch;
          display: flex;
          margin-top: 24px;
          align-items: flex-start;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-52 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-53 {
          align-self: start;
          display: flex;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-53 {
            max-width: 100%;
          }
        }
        .div-54 {
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-54 {
            max-width: 100%;
          }
        }
        .div-55 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          font-size: 16px;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-55 {
            max-width: 100%;
          }
        }
        .div-56 {
          width: 547px;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-56 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-57 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-58 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-59 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: end;
          margin-top: 56px;
          font: 700 18px/222% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-59 {
            margin-top: 40px;
          }
        }
        .div-60 {
          display: flex;
          margin-top: 15px;
          gap: 12px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-60 {
            flex-wrap: wrap;
          }
        }
        .div-61 {
          display: flex;
          flex-direction: column;
        }
        .div-62 {
          text-align: left;
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-63 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          flex-direction: column;
          font-size: 16px;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        .div-64 {
          width: 266px;
          justify-content: flex-start;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        .div-65 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-66 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-67 {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-67 {
            white-space: initial;
          }
        }
        .div-68 {
          text-align: left;
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-69 {
          border-radius: 4px;
    background-color: var(--vds-form-controls-background-onlight, #fff);
    display: flex;
    margin-top: 4px;
    width: 100%;
    flex-direction: column;
    font-size: 16px;
    letter-spacing: 0.5px;
    justify-content: center;
        }
        @media (max-width: 991px) {
          .div-69 {
            white-space: initial;
          }
        }
        .div-70 {
          justify-content: flex-start;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
          width: 266px;
        }
        @media (max-width: 991px) {
          .div-70 {
            white-space: initial;
          }
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-72 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-73 {
          display: flex;
          margin-top: 25px;
          gap: 12px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-73 {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-74 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-74 {
            white-space: initial;
          }
        }
        .div-75 {
          text-align: left;
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-76 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          flex-direction: column;
          font-size: 16px;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-76 {
            white-space: initial;
          }
        }
        .div-77 {
          width: 266px;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-77 {
            white-space: initial;
          }
        }
        .div-78 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-79 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-80 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-80 {
            white-space: initial;
          }
        }
        .div-81 {
          text-align: left;
          font-feature-settings: "clig" off, "liga" off;
          font: 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-82 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          flex-direction: column;
          font-size: 16px;
          letter-spacing: 0.5px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-82 {
            white-space: initial;
          }
        }
        .div-83 {
          width: 266px;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 20px;
          padding: 1px 1px 1px 12px;
        }
        @media (max-width: 991px) {
          .div-83 {
            white-space: initial;
          }
        }
        .div-84 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: auto 0;
        }
        .div-85 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
        }
        .div-86 {
          display: flex;
          margin-top: 24px;
          width: 300px;
          max-width: 100%;
          gap: 12px;
        }
        .div-87 {
          justify-content: center;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          width: 20px;
        }
        .div-88 {
          border-radius: 2px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          height: 20px;
        }
        .div-89 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          font-size: 16px;
          font-weight: 700px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-90 {
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
          .div-90 {
            white-space: initial;
          }
        }
        .div-91 {
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
          .div-91 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-92 {
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
          .div-92 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-93 {
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
          .div-93 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-94 {
          display: flex;
          gap: 16px;
        }
        .div-95 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
        }
        .div-96 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-97 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
        .div-98 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
}
