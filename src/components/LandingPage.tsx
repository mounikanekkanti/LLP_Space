import React, { useState } from "react";
import Modal from "./Model";
import TransactionDetails from "./TransactionDetailsmodel";
import { useNavigate } from "react-router-dom";
import ShareFeedback from "./ShareFeedback";
import SearchInput from "../common/SearchInput";
import PageButton from "../common/Button";
import DataTableComponent from "../common/DataTableComponent";

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

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const navigate = useNavigate();
  const handleClick2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
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
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMyAccount = () => {
    setAccountOpen(!accountOpen);
  };
  const handleMyAccount = () => {
    navigate("/myaccount");
  };
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Render your SIP DC component inside the modal */}
          <TransactionDetails />
        </Modal>
      )}
      {isModalOpen2 && (
        <Modal onClose={closeModal2}>
          <ShareFeedback />
        </Modal>
      )}
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
              <div className="div-10">Home</div>
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
                onClick={toggleMyAccount}
                style={{ cursor: "pointer" }}
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
          <div className="div-23">
            <div className="div-224">
              <div className="div-225">Hi John,</div>
              <div className="div-226">Welcome Back!</div>
            </div>
            {accountOpen && (
              <div className="div-227">
                <div
                  className="div-228"
                  style={{ cursor: "pointer" }}
                  onClick={handleMyAccount}
                >
                  My Account
                </div>
                <div className="div-229">Options Item</div>
                <div className="div-230">Options Item</div>
                <div className="div-231">Options Item</div>
                <div className="div-232">Options Item</div>
              </div>
            )}
          </div>
          <div className="div-25">
            <div className="div-26">
              <div className="div-27">
                <div className="div-28">Payment Information</div>
                <div className="div-29">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e957380f6805b0156a1593556e59a40c8ecf57cc6bd3fe847841a66e7c7e480?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-5"
                  />
                  <div className="div-30">
                    <div className="div-31" />
                  </div>
                </div>
              </div>
              <div className="div-32">
                <div className="div-33">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b46c85edaac3cf5709b42315bee14b5e5819c3cfcd0bf49564b98e90746868e?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-6"
                  />
                  <div className="div-34">01 Jan</div>
                  <div className="div-35">Last Payment</div>
                </div>
                <div className="div-36">
                  <div className="div-37">$1000</div>
                  <div className="div-38">Mar 14, 2024</div>
                  <div className="div-39">Recent Payment</div>
                </div>
                <div className="div-40">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a58ec05f477462001a518b812203156d6c0d38ced7f015fdeb734bde84f6252?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-7"
                  />
                  <div className="div-41">
                    <div className="div-42">01 Jun</div>
                    <div className="div-43">Next Pay</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-44">
              <div className="div-45">Upcoming Payment</div>
              <div className="div-46">$900</div>
              <div className="div-47">Next Scheduled Payment: 03-01-2024</div>
            </div>
            <div className="div-48">
              <div className="div-49">
                <div className="div-50">Contracts</div>
                <div className="div-51">03</div>
              </div>
              <div className="div-52">
                <div className="div-53">
                  <div className="div-54">Active</div>
                  <div className="div-55">On-Hold</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b421662bb5b6947e6ebb65cb14c12b8a01d68e2e409530762cc4ee9eafc620ec?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-8"
                />
              </div>
            </div>
          </div>
          <div className="div-56">View More..</div>
          <div className="div-57" />
        </div>
        <div className="div-58">
          <div className="div-59">Quick links</div>
          <div className="div-60">
            <div className="div-61">
              <div className="div-62">
                <div className="div-63">
                  <div className="div-64">Submit A Bill</div>
                  <div className="div-65">
                    Reimbursements, Maintenance Repair Bills, Power Bills
                  </div>
                  <img className="icons" src={"/images/Icon1.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/808431bac7b4e05add2a8803061356aec803de08de6258d18c952bbda88a453d?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-9"
                  />
                </div>
                <div className="div-66">
                  <div className="div-67">
                    Request Certificate of Insurance (COI)
                  </div>
                  <div className="div-68">Insurance Certificate</div>
                  <img className="icons" src={"/images/Icon2.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcc41e45fbb9d9109a4f9d9502564b06dabfc237529f0335a6b13dd100ae9e95?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-10"
                  />
                </div>
                <div className="div-69">
                  <div className="div-70">Address Change</div>
                  <div className="div-71">
                    Notice Address, Payment Address Changes
                  </div>
                  <img className="icons" src={"/images/Icon3.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9a95500fa26cfed16b34a05df39da7bd2c17e265a84466c8e9b618dbc84f80?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-11"
                  />
                </div>
              </div>
              <div className="div-72">
                <div className="div-73">
                  <div className="div-74">Cell Site Information</div>
                  <div className="div-75">Tower Information, Site Location</div>
                  <img className="icons" src={"/images/Icon4.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf51b4ceb0e21eef1118cad77d047ba8d390930ca549f2a50d9b3e6ae423959?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-12"
                  />
                </div>
                <div className="div-76">
                  <div className="div-77">Ownership Change</div>
                  <div className="div-78">Change of Title Ownership</div>
                  <img className="icons" src={"/images/Icon9.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6889527ad788b34b32409f406804a51d9d58904368d0ac93008fac33612ee085?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-13"
                  />
                </div>
                <div className="div-79">
                  <div className="div-80">Direct Deposits</div>
                  <div className="div-81">Bank Account Details</div>
                  <img className="icons" src={"/images/Icon5.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a17cb8f5f7bc4855928d362f85d22aa2636a64258bd60b5a545948d101b2e3d3?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-14"
                  />
                </div>
              </div>
              <div className="div-82">
                <div className="div-83">
                  <div className="div-84">Tickets</div>
                  <div className="div-85">
                    Submit Requests, Tracking Requests
                  </div>
                  <img className="icons" src={"/images/Icon6.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf51b4ceb0e21eef1118cad77d047ba8d390930ca549f2a50d9b3e6ae423959?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-15"
                  />
                </div>
                <div className="div-86">
                  <div className="div-87">Lease Agreement</div>
                  <div className="div-88">
                    Contract Information, Terms & Conditions
                  </div>
                  <img className="icons" src={"/images/Icon7.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6889527ad788b34b32409f406804a51d9d58904368d0ac93008fac33612ee085?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-16"
                  />
                </div>
                <div className="div-89">
                  <div className="div-90">Submit Inquiry</div>
                  <div className="div-91">Invoice, Disputes, Defaults etc.</div>
                  <img className="icons" src={"/images/Icon8.svg"} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a17cb8f5f7bc4855928d362f85d22aa2636a64258bd60b5a545948d101b2e3d3?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-17"
                  />
                </div>
              </div>
              <div className="div-92">Recent Activity</div>
              <div className="div-93" />
              <div className="div-94" />
              <div className="div-95">
                <div className="div-96">
                  <SearchInput placeholder="Search"></SearchInput>
                  </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3f71ab2557f3308af5c155de86e555021173a3dd3e15570944286a97b90aea?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-20"
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28a59819d07087216da4b22c22240734a88e702e45bfad8f516206dc2b1f451?apiKey=a938513dc279413eaac5ce0f8c637f66&"
              className="img-21"
            />
          </div>
          <div className="div-99" />
<div className="div-100">

{/* <DataGridComponent/> */}
{/* <RecentActivityTable/> */}

<DataTableComponent rows={newData} headCells={newHeadCells} />

            {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contract ID(#)</TableCell>
            <TableCell align="right">Document</TableCell>
            <TableCell align="right">Upload Date</TableCell>
            <TableCell align="right">Uploaded By</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell scope="row">1234</TableCell>
              <TableCell align="right">Lorem</TableCell>
              <TableCell align="right">USA</TableCell>
              <TableCell align="right">Ipsum</TableCell>
            </TableRow>

            <TableRow>
              <TableCell scope="row">4567</TableCell>
              <TableCell align="right">Lorem</TableCell>
              <TableCell align="right">USA</TableCell>
              <TableCell align="right">Ipsum</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer> */}
</div>
          

          {/* <div
            className="div-100"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <div className="div-101">Contract ID(#)</div>
            <div className="div-102">Document</div>
            <div className="div-103">Upload Date</div>
            <div className="div-104">Uploaded By</div>
          </div>
          <div className="div-105" />
          <div className="div-106">
            <div className="div-107">1234</div>
            <div className="div-108">Lorem</div>
            <div className="div-109">USA</div>
            <div className="div-110">Ipsum</div>
          </div>
          <div className="div-111" />
          <div className="div-112">
            <div className="div-113">4567</div>
            <div className="div-114">Lorem</div>
            <div className="div-115">USA</div>
            <div className="div-116">Ipsum</div>
          </div>
          <div className="div-117" />
          <div className="div-118">
            <div className="div-119">8901</div>
            <div className="div-120">Lorem</div>
            <div className="div-121">USA</div>
            <div className="div-122">Ipsum</div>
          </div>
          <div className="div-123" />
          <div className="div-124">
            <div className="div-125">
              <div className="div-126">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74c712806bd237a72e29e982ecaab58e8313165463e39ecbd26edc0297c0efce?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img-22"
                />
                <div className="div-127">
                  <div className="div-128" />
                </div>
              </div>
              <div className="div-129">Displaying 3 of 3 Rows</div>
            </div>
            <div className="div-130">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdfb000c064b848ad68a8c92b8ce38a119c653e0bba4a3dda08d45d0080b5052?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-23"
              />
              <div className="div-131">1</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16156d7e76a02e070103401a5705c4bb09aa007b0c6e5463e1f6b704fb3d9e11?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-24"
              />
            </div>
            <div className="div-132">
              <div className="div-133">Go to:</div>
              <div className="div-134">1</div>
              <div className="div-135">
                <div className="div-136">/</div>
                <div className="div-137">1</div>
              </div>
            </div>
          </div> */}
          <div className="feedback" onClick={handleClick2}>
            <PageButton buttonType="primary">Feedback</PageButton>
          </div>
        </div>
        <div className="div-138">
          <div className="div-139">
            <div className="div-140">Copyright 2018</div>
            <div className="div-141">Privacy Policy</div>
            <div className="div-142">Sitemap</div>
            <div className="div-143">Home</div>
          </div>
        </div>
      </div>
      <style>{`
      
      .feedback{
        display: flex;
        margin-top: 20px;   
        align-self: end; 
        cursor: pointer;
      }
      .feedback-btn {
        background-color:black;
        color:white;
        border:none;
        border-radius:20px;
        cursor: pointer;
      }
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
          background-color: #000;
          display: flex;
          align-items: center;
          gap: 0px;
          justify-content: center;
          padding: 18px 24px;
          margin-top: 24px;
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
          padding: 0 24px;
          display: flex;
          width: 100%;
          align-self: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          gap: 0px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          position: relative;
          display: flex;
          color: #000;
          gap: 0px;
          font: 400 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
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
          margin-top: 33px;
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
          display: flex;
          margin-top: 29px;
          gap: 20px;
          height: 221px;
        }
        @media (max-width: 991px) {
          .div-25 {
            flex-wrap: wrap;
          }
        }
        .div-26 {
          border-radius: 8px;
          background-color: var(--green-26-l-008331-d-00-b-845, #008331);
          display: flex;
          flex-direction: column;
          gap: 19px;
          flex: 1;
          padding: 24px 14px;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-27 {
          display: flex;
          margin-right: 20px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-right: 10px;
          }
        }
        .div-28 {
          color: #fff;
          text-decoration-line: underline;
          align-self: start;
          gap: 0px;
          font: 700 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-29 {
          disply: flex;
          flex-direction: column;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 2.77;
          width: 122px;
          gap: 0px;
          justify-content: center;
        }
        .img-5 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-30 {
          position: relative;
          stroke-width: 1px;
          stroke: var(--gray-44-l-6-f-7171-da-7-a-7-a-7, #6f7171);
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0px;
          justify-content: center;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-30 {
            padding-left: 20px;
          }
        }
        .div-31 {
          border-radius: 0px 4px 4px 0px;
          margin-left: 18px;
          width: 44px;
          height: 44px;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-31 {
            margin-left: 10px;
          }
        }
        .div-32 {
          display: flex;
          margin-top: -12px;
          align-items: start;
          gap: 20px;
          font-size: 12px;
          color: #fff;
          font-weight: 400;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-33 {
          display: flex;
          margin-top: 13px;
          flex-direction: column;
          gap: 15px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          gap: 0px;
          width: 24px;
          height: 24px;
        }
        .div-34 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 39px;
          gap: 0px;
        }
        .div-35 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: -6px;
          gap: 0px;
        }
        .div-36 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
        }
        .div-37 {
          align-self: stretch;
          gap: 0px;
          font: 700 64px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-37 {
            font-size: 40px;
          }
        }
        .div-38 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-39 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-40 {
          display: flex;
          margin-top: 13px;
          flex-direction: column;
          gap: 20px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          gap: 0px;
          width: 24px;
          height: 24px;
        }
        .div-41 {
          display: flex;
          margin-top: 30px;
          padding-left: 32px;
          flex-direction: column;
          align-items: start;
          gap: 15px;
        }
        @media (max-width: 991px) {
          .div-41 {
            padding-left: 20px;
          }
        }
        .div-42 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-43 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: -6px;
          gap: 0px;
        }
        .div-44 {
          border-radius: 8px;
          background-color: #000;
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: #fff;
          font-weight: 700;
          flex: 1;
          padding: 31px 24px 12px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-44 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-left: 20px;
          }
        }
        .div-45 {
          gap: 0px;
          font: 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-45 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-46 {
          margin-top: -6px;
          gap: 0px;
          font: 90px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-46 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .div-47 {
          align-self: end;
          margin-top: -5px;
          gap: 0px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-48 {
          border-radius: 8px;
          background-color: #eee;
          display: flex;
          gap: 20px;
          white-space: nowrap;
          justify-content: space-between;
          flex: 1;
          padding: 26px 12px 26px 24px;
        }
        @media (max-width: 991px) {
          .div-48 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-left: 20px;
            white-space: initial;
          }
        }
        .div-49 {
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-49 {
            white-space: initial;
          }
        }
        .div-50 {
          color: #000;
          gap: 0px;
          font: 24px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-51 {
          color: var(--green-26-l-008331-d-00-b-845, #008331);
          margin-top: 0;
          gap: 0px;
          font: 90px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-51 {
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .div-52 {
          display: flex;
          flex-direction: column;
          gap: 13px;
          font-size: 16px;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-52 {
            white-space: initial;
          }
        }
        .div-53 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-53 {
            white-space: initial;
          }
        }
        .div-54 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
          gap: 0px;
        }
        .div-55 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          gap: 0px;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: center;
          margin-top: 0;
          gap: 0px;
        }
        .div-56 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 0.5px;
          align-self: end;
          margin-top: 24px;
          gap: 0px;
          font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-57 {
          align-self: end;
          background-color: var(
            --vds-elements-text-icons-borders-primary-onlight,
            #000
          );
          width: 83px;
          height: 1px;
          gap: 0px;
        }
        .div-58 {
          margin-left: auto;
          margin-right: auto;
          max-width: 1500px;
          position: relative;
          padding: 0 24px;
          display: flex;
          width: 100%;
          align-self: center;
          display: flex;
          margin-top: 31px;
          width: 100%;
          flex-direction: column;
          gap: 7px;
        }
        @media (max-width: 991px) {
          .div-58 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-59 {
          color: #000;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 24px;
          font-weight: 700;
          text-align: left;
        }
        @media (max-width: 991px) {
          .div-59 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-60 {
          display: flex;
          margin-top: 28px;
          gap: 20px;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-60 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-61 {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        @media (max-width: 991px) {
          .div-61 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-62 {
          display: flex;
          gap: 20px;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-62 {
            flex-wrap: wrap;
          }
        }
        .div-63 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-63 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
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
        .img-9 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-66 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-66 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-67 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-68 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-69 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-69 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-70 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-71 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-72 {
          display: flex;
          gap: 20px;
          margin: 24px 0 0 0px;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-72 {
            flex-wrap: wrap;
          }
        }
        .div-73 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-73 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-74 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-75 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-12 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-76 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-76 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
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
        .img-13 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-79 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-79 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-80 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-81 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-82 {
          display: flex;
          gap: 20px;
          margin: 24px 0 0 0px;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-82 {
            flex-wrap: wrap;
          }
        }
        .div-83 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-83 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-84 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-85 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-86 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-86 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-87 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-88 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-16 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-89 {
          position: relative;
          justify-content: space-between;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 24px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .div-89 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-90 {
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .div-91 {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          gap: 0px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-17 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
        }
        .div-92 {
          text-align: left;
          padding-left: 10px;
          color: #000;
          margin-top: 31px;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
          font-size: 24px;
          font-weight: 700;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-92 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-93 {
          border-color: rgba(217, 217, 217, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #d9d9d9;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 24px 0 0 0;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-93 {
            flex-wrap: wrap;
          }
        }
        .div-94 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 2px;
          background-color: #000;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 38px 0 0 0;
          width: 1440px;
        }
        @media (max-width: 991px) {
          .div-94 {
            flex-wrap: wrap;
          }
        }
        .div-95 {
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
          .div-95 {
            margin-right: 10px;
            white-space: initial;
          }
        }
        .div-96 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 3px 0;
        }
        @media (max-width: 991px) {
          .div-96 {
            white-space: initial;
          }
        }
        .div-97 {
          align-self: start;
          display: flex;
          margin-left: 12px;
          gap: 20px;
          justify-content: space-between;
          width: 158px;
          height: 34px;
        }
        @media (max-width: 991px) {
          .div-97 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-98 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          margin: auto 0;
        }
        .img-18 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
        }
        .img-19 {
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
        .img-20 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          gap: 0px;
          margin: auto 0;
        }
        .img-21 {
          aspect-ratio: 1.01;
          object-fit: auto;
          object-position: center;
          width: 72px;
          align-self: start;
          gap: 0px;
        }
        .div-99 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          width: 1440px;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 7px 0 0 0;
        }
        @media (max-width: 991px) {
          .div-99 {
            flex-wrap: wrap;
          }
        }
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
        .div-101 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-102 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-103 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-104 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          font-family: "VerizonNHGDS-Bold";
        }
        .div-105 {
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #000;
          width: 1482px;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 15px 0 0 13px;
        }
        @media (max-width: 991px) {
          .div-105 {
            flex-wrap: wrap;
          }
        }
        .div-106 {
          align-self: center;
          display: flex;
          margin-top: 21px;
          width: 100%;
          max-width: 1368px;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-106 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-107 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-108 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-109 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-110 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-111 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          width: 1482px;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 21px 0 0 13px;
        }
        @media (max-width: 991px) {
          .div-111 {
            flex-wrap: wrap;
          }
        }
        .div-112 {
          align-self: center;
          display: flex;
          margin-top: 17px;
          width: 100%;
          max-width: 1368px;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-112 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-113 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-114 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-115 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-116 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-117 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          width: 1482px;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 23px 0 0 13px;
        }
        @media (max-width: 991px) {
          .div-117 {
            flex-wrap: wrap;
          }
        }
        .div-118 {
          align-self: center;
          display: flex;
          margin-top: 15px;
          width: 100%;
          max-width: 1368px;
          gap: 20px;
          font-size: 12px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-118 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-119 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-120 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-121 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-122 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-123 {
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #a7a7a7;
          width: 1482px;
          max-width: 100%;
          height: 0px;
          gap: 0px;
          margin: 27px 0 0 13px;
        }
        @media (max-width: 991px) {
          .div-123 {
            flex-wrap: wrap;
          }
        }
        .div-124 {
          align-self: center;
          display: flex;
          margin-top: 9px;
          width: 100%;
          max-width: 1480px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-124 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-125 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }
        .div-126 {
          disply: flex;
          flex-direction: column;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.64;
          width: 72px;
          gap: 0px;
          justify-content: center;
          border: 1px solid #000;
        }
        .img-22 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          background-color: #fff;
          z-index: 99;
        }
        .div-127 {
          position: relative;
          stroke-width: 1px;
          stroke: var(--gray-44-l-6-f-7171-da-7-a-7-a-7, #6f7171);
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0px;
          justify-content: center;
          padding: 0 28px;
        }
        @media (max-width: 991px) {
          .div-127 {
            padding-left: 20px;
          }
        }
        .div-128 {
          border-radius: 0px 4px 4px 0px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 44px;
          height: 44px;
          gap: 0px;
        }
        .div-129 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          gap: 0px;
          margin: auto 0;
          font: 400 16px/100% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-130 {
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
          .div-130 {
            white-space: initial;
          }
        }
        .img-23 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-131 {
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
          .div-131 {
            white-space: initial;
          }
        }
        .img-24 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-132 {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 16px;
          color: #000;
          font-weight: 400;
          line-height: 100%;
          justify-content: space-between;
        }
        .div-133 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          align-self: stretch;
          gap: 0px;
          margin: auto 0;
        }
        .div-134 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          border-radius: 4px;
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          align-items: start;
          white-space: nowrap;
          justify-content: center;
          padding: 16px 20px;
        }
        @media (max-width: 991px) {
          .div-134 {
            white-space: initial;
          }
        }
        .div-135 {
          align-self: stretch;
          display: flex;
          gap: 11px;
          white-space: nowrap;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-135 {
            white-space: initial;
          }
        }
        .div-136 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-137 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
        }
        .div-138 {
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
          .div-138 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-139 {
          display: flex;
          gap: 16px;
        }
        .div-140 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          gap: 0px;
          flex-grow: 1;
        }
        .div-141 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-142 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .div-143 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-decoration-line: underline;
          gap: 0px;
        }
        .icons {
          position: absolute;
          right: 16px;
        }

        .div-224 {
          align-self: end;
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          font-size: 24px;
        }
        @media (max-width: 991px) {
          .div-224 {
            margin-top: 40px;
          }
        }
        .div-225 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
        }
        .div-226 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
          margin-top: 33px;
        }
        .div-227 {border-radius: 7px;
          background: linear-gradient(180deg, rgba(243, 243, 245, 0.8) 0%, rgba(242, 242, 242, 0.8) 100%);
          box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(50px);
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.5px;
          line-height: 129%;
          padding: 10px 24px;
          position: absolute;
          right: -130px;
          margin-top: -32px;
          width: 203px;
        }
        @media (max-width: 991px) {
          .div-227 {
            padding: 0 20px;
          }
        }
        .div-228 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-229 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 5px;
        }
        .div-230 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 5px;
        }
        .div-231 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 5px;
        }
        .div-232 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};

export default LandingPage;
