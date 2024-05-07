import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import Breadcrumb from "../common/Breadcrumb";
import AutoComplete from "../common/AutoComplete";
import DataTableComponent from "../common/DataTableComponent";
import DatePickerComponent from "../common/DatePickerComponent";
import PaymentInfoTabeComponent from "./PaymentInfoTabeComponent";
import PageButton from "../common/Button";

export default function PaymentInformation() {
  const onContractIdClick = () =>{
    
  }
  const navigate = useNavigate();
  const handlePortal = () => {
    navigate("/portalsupport");
  };
  const handlePayment = () => {
    navigate("/paymentinformation");
  };
  const handlereconciledDate = () => {
    navigate("/reconciledDatecenter");
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
    { label: "Payment Information" },
  ];
  const newData = [
  
    {id:1234, document:'Document_1234', uploadDate:'04/29/2024', uploadedBy:'Williams'},
    {id:4567, document:'Document_4567', uploadDate:'04/30/2024', uploadedBy:'Johnson'},
    {id:8901, document:'Document_8901', uploadDate:'05/03/2024', uploadedBy:'Smith'},
    {id:7901, document:'Document_7901', uploadDate:'05/04/2024', uploadedBy:'Smith'},
    {id:6901, document:'Document_6901', uploadDate:'05/06/2024', uploadedBy:'Smith'},
    {id:5901, document:'Document_5901', uploadDate:'05/01/2024', uploadedBy:'Johnson'},
    {id:4901, document:'Document_4901', uploadDate:'05/02/2024', uploadedBy:'Williams'},
    // Add more data as needed
  ];
  // Define your Data interface
interface Data {
  id: number;
  document: string;
  uploadDate: string;
  uploadedBy: string;
}

// Define HeadCell interface
interface HeadCell {
  id: keyof Data; // Use keyof Data to ensure type safety
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

const newHeadCells: HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Contract ID(#)',
  },
  {
    id: 'document',
    numeric: false,
    disablePadding: false,
    label: 'Document',
  },
  {
    id: 'uploadDate',
    numeric: false,
    disablePadding: false,
    label: 'Upload Date',
  },
  {
    id: 'uploadedBy',
    numeric: false,
    disablePadding: false,
    label: 'Uploaded By',
  },
  // Add more head cells for additional columns
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
                onClick={handlereconciledDate}
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
          <div className="search">
            <AutoComplete
              options={options}
              onChange={handleChange}
              value={selectedValue}
              label="Please select the Contract ID"
            />
          </div>
          <div className="div-30">
            <div className="div-31">
            
              <div className="div-32">Start Date</div>
              <DatePickerComponent/>
            </div>
            <div className="div-35">
              <div className="div-36">End Date</div>
              <DatePickerComponent/>
            </div>
          </div>
          <div className="div-39">
          <PageButton buttonType="primary">Submit</PageButton>
          <PageButton buttonType="secondary">Clear</PageButton>
          </div>
          <div className="div-42">Payment Activity</div>
          <div className="div-43" />
          <div className="div-44" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd801843df2d79132c95d34931b892d283de51a36ed99f5541b938adee22cb07?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="img-11"
          />
          <div className="div-45">
            <div className="div-46">
              <div className="div-47">
                <SearchInput placeholder="Search"></SearchInput>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3f71ab2557f3308af5c155de86e555021173a3dd3e15570944286a97b90aea?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-10"
                />
              </div>
              <div className="div-51" />
              <div className="div-100">
                {/* <DataTableComponent rows={newData} headCells={newHeadCells} onContractIdClick={onContractIdClick}/> */}
                <PaymentInfoTabeComponent/>
              </div>
            </div>
          </div>
        </div>
        <div className="div-121">
          <div className="div-122">
            <div className="div-123">Copyright 2018</div>
            <div className="div-124">Privacy Policy</div>
            <div className="div-125">Sitemap</div>
            <div className="div-126">Home</div>
          </div>
        </div>
      </div>
      <style>{`

.search .drop-container {
  max-width: 100%;
  }
  .search {
  width: 450px;
  margin-top:24px;
  }

        .div {
          background-color: #fff;
          padding-top: 17px;
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
          margin-top: 27px;
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
          margin-top: 24px;
          align-items: center;
          gap: 0px;
          justify-content: center;
          padding: 18px 24px;
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
          margin-left: auto;
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 24px;
          display: flex;
          width: 100%;
          flex-direction: column;
          gap: 0px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-24 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-25 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 204px;
          max-width: 100%;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-26 {
          stroke-width: 1px;
          stroke: var(--gray-44-l-6-f-7171-da-7-a-7-a-7, #6f7171);
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          width: 100%;
          padding-left: 12px;
          gap: 20px;
          justify-content: space-between;
        }
        .div-27 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          gap: 0px;
          margin: auto 0;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-28 {
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
        .div-29 {
          border-radius: 0px 3px 3px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 12px;
          height: 42px;
          gap: 0px;
        }
        .div-30 {
          align-self: start;
          display: flex;
          margin-top: 24px;
          gap: 12px;
        }
        .div-31 {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 220px;
        }
        .div-32 {
          text-align: left;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-33 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-34 {
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0px;
          justify-content: center;
          padding: 12px;
        }
        @media (max-width: 991px) {
          .div-34 {
            padding-right: 20px;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          gap: 0px;
        }
        .div-35 {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 220px;
        }
        .div-36 {
          text-align: left;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-37 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          gap: 0px;
          justify-content: center;
        }
        .div-38 {
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0px;
          justify-content: center;
          padding: 12px;
        }
        @media (max-width: 991px) {
          .div-38 {
            padding-right: 20px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          gap: 0px;
        }
        .div-39 {
          justify-content: center;
          align-self: start;
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
          .div-39 {
            white-space: initial;
          }
        }
        .div-40 {
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
          .div-40 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-41 {
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
          .div-41 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-42 {
          text-align: left;
          color: #000;
          margin-top: 31px;
          gap: 0px;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-42 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-43 {
          border-color: rgba(217, 217, 217, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #d9d9d9;
          margin-top: 26px;
          gap: 0px;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-43 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-44 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #000;
          margin-top: 38px;
          height: 0;
          gap: 0px;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-44 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-45 {
          display: flex;
          margin-top: 7px;
          gap: 20px;
          justify-content: space-between;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-45 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-46 {
          display: flex;
          flex-direction: column;
          gap: 7px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-46 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-47 {
          align-self: end;
          display: flex;
          gap: 20px;
          font-size: 12px;
          color: var(--DISABLE-TEXT, #a7a7a7);
          font-weight: 400;
          white-space: nowrap;
          line-height: 133%;
          justify-content: space-between;
          margin: 7px 35px 0 0;
        }
        @media (max-width: 991px) {
          .div-47 {
            white-space: initial;
          }
        }
        .div-48 {
          border-color: rgba(217, 217, 217, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 3px 0;
        }
        @media (max-width: 991px) {
          .div-48 {
            white-space: initial;
          }
        }
        .div-49 {
          align-self: start;
          display: flex;
          margin-left: 12px;
          gap: 20px;
          justify-content: space-between;
          width: 158px;
          height: 34px;
        }
        @media (max-width: 991px) {
          .div-49 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-50 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          margin: auto 0;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
        }
        .img-9 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: #000;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          align-self: center;
          margin-top: 4px;
          gap: 0px;
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
          margin: auto 0;
        }
        .div-51 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          margin-top: 7px;
          height: 0px;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-51 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-52 {
          display: flex;
          margin-top: 17px;
          width: 100%;
          gap: 35px;
        }
        @media (max-width: 991px) {
          .div-52 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-53 {
          display: flex;
          gap: 15px;
        }
        .div-54 {
          justify-content: center;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-55 {
          border-radius: 2px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          height: 20px;
          width: 20px;
          gap: 0px;
        }
        .div-56 {
          color: #000;
          gap: 0px;
          margin: auto 0;
          font: 700 14px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-family: "VerizonNHGDS-Bold";
        }
        .div-57 {
          display: flex;
          gap: 90px;
          font-size: 14px;
          color: #000;
          font-weight: 700;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-57 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-58 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-59 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-60 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-61 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-62 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-63 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-64 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #000;
          margin-top: 13px;
          height: 0px;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-64 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-65 {
          display: flex;
          margin-top: 15px;
          width: 100%;
          gap: 50px;
        }
        @media (max-width: 991px) {
          .div-65 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-66 {
          display: flex;
          gap: 17px;
        }
        .div-67 {
          justify-content: center;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-68 {
          border-radius: 2px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          height: 20px;
          gap: 0px;
          width: 20px;
        }
        .div-69 {
          color: #000;
          gap: 0px;
          margin: auto 0;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-70 {
          display: flex;
          gap: 121px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-70 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-71 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-72 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-73 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 62px;
        }
        .div-74 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 92px;
        }
        .div-75 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-76 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 120px;
        }
        .div-77 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          margin-top: 18px;
          height: 0px;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-77 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-78 {
          display: flex;
          margin-top: 12px;
          width: 100%;
          gap: 50px;
        }
        @media (max-width: 991px) {
          .div-78 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-79 {
          display: flex;
          gap: 17px;
        }
        .div-80 {
          justify-content: center;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-81 {
          width: 20px;
          border-radius: 2px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          height: 20px;
          gap: 0px;
        }
        .div-82 {
          color: #000;
          gap: 0px;
          margin: auto 0;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-83 {
          display: flex;
          gap: 120px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-83 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-84 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-85 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-86 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 72px;
        }
        .div-87 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 80px;
        }
        .div-88 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 48px;
        }
        .div-89 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 105px;
        }
        .div-90 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          margin-top: 19px;
          height: 0px;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-90 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-11 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 20%;
          gap: 0px;
          width: 72px;
          position: absolute;
          right: 0;
        }
        .div-91 {
          display: flex;
          margin-top: 12px;
          width: 1125px;
          max-width: 100%;
          gap: 50px;
        }
        @media (max-width: 991px) {
          .div-91 {
            flex-wrap: wrap;
          }
        }
        .div-92 {
          display: flex;
          gap: 17px;
        }
        .div-93 {
          justify-content: center;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }
        .div-94 {
          width: 20px;
          border-radius: 2px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          height: 20px;
          gap: 0px;
        }
        .div-95 {
          color: #000;
          gap: 0px;
          margin: auto 0;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-96 {
          display: flex;
          gap: 120px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          justify-content: space-between;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-96 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-97 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-98 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-99 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 75px;
        }
        .div-100 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 75px;
        }
        .div-101 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 60px;
        }
        .div-102 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          width: 86px;
        }
        .div-103 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          height: 0px;
          gap: 0px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-103 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-104 {
          align-self: center;
          display: flex;
          margin-top: 9px;
          width: 100%;
          max-width: 1482px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-104 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-105 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }
        .div-106 {
          disply: flex;
          flex-direction: column;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.64;
          width: 82px;
          gap: 0px;
          justify-content: center;
        }
        .img-12 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-107 {
          position: relative;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0px;
          justify-content: center;
          padding: 0 28px;
        }
        @media (max-width: 991px) {
          .div-107 {
            padding-left: 20px;
          }
        }
        .div-108 {
          border-radius: 0px 4px 4px 0px;
          width: 44px;
          height: 44px;
          gap: 0px;
        }
        .div-109 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          margin: auto 0;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-110 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: #fff;
          font-weight: 400;
          white-space: nowrap;
          line-height: 100%;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-110 {
            white-space: initial;
          }
        }
        .img-13 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-111 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          background-color: #000;
          border-radius: 50%;
          align-self: stretch;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          padding: 0;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-111 {
            white-space: initial;
          }
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-112 {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .div-113 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          gap: 0px;
          flex-grow: 1;
          margin: auto 0;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-114 {
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 4px;
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          align-items: start;
          color: #000;
          white-space: nowrap;
          justify-content: center;
          padding: 16px 20px;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-114 {
            white-space: initial;
          }
        }
        .div-115 {
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 13px;
          margin: auto 0;
        }
        .div-116 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-117 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-118 {
          align-self: stretch;
          display: flex;
          gap: 0px;
        }
        .div-119 {
          font-feature-settings: "clig" off, "liga" off;
          justify-content: center;
          border-radius: 22px 0px 0px 22px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-left-width: 1px;
          background-color: var(--blackl-000000-dffffff, #000);
          color: var(--whitelffffffd-000000, #fff);
          white-space: nowrap;
          padding: 8px 16px;
          font: 700 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-119 {
            white-space: initial;
          }
        }
        .div-120 {
          justify-content: center;
          align-items: center;
          border-radius: 0px 22px 22px 0px;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-left-width: 1px;
          background-color: var(--blackl-000000-dffffff, #000);
          display: flex;
          gap: 0px;
          padding: 8px;
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
        }
        .div-121 {
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
          .div-121 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-122 {
          display: flex;
          gap: 16px;
        }
        .div-123 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          flex-grow: 1;
        }
        .div-124 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-125 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-126 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        // .search {
        //   width: 420px;
        //   margin-top: 24px;
        // }
        .div-100 {
          display: flex;
          width: 100%;
          max-width: 1440px;
          gap: 20px;
          font-size: 14px;
          color: #000;
          font-weight: 700;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-100 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}
