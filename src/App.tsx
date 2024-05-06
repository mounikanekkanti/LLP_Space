import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PortalSupport from "./components/PortalSupport";
import PaymentInformation from "./components/PaymentInformation";
import DocumentCenter from "./components/DocumentCenter";
import LeaseDocumentGridView from "./components/LeaseDocumentGridView";
import LeaseDocumentListView from "./components/LeaseDocumentListView";
import Feedback from "./components/Feedback";
import PortalSupportPage from "./components/PortalSupportPage";
import SubmitNotice from "./components/SumbitNotice";
import ChangeAdressForm from "./components/ChangeAdressForm";
import ChangeEmailAdressForm from "./components/ChangeEmailAdressForm";
import LoginAndSecurity from "./components/LoginAndSecurity";
import MyAccount from "./components/MyAccount";
import TransactionDetails from "./components/TransactionDetailsmodel";
import TransactionHistory from "./components/TransactionHistory";
import SearchInput from "./common/SearchInput";
import PageButton from "./common/Button";
import InputField from "./common/TextField";
import Breadcrumb from "./common/Breadcrumb";
import AutoComplete from "./common/AutoComplete";
import AccordionComponent from "./common/Accordion";

function App() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "My Account", href: "/account" },
    { label: "Login & Security" },
  ];
  const [selectedValue, setSelectedValue] = React.useState("");
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const securityHeaderData = {
    title: "Security",
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
    ),
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portalsupport" element={<PortalSupport />} />
          <Route path="/paymentinformation" element={<PaymentInformation />} />
          <Route path="/documentcenter" element={<DocumentCenter />} />
          <Route
            path="/leasedocumentgridview"
            element={<LeaseDocumentGridView />}
          />
          <Route
            path="/leasedocumentlistview"
            element={<LeaseDocumentListView />}
          />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/portalsupportpage" element={<PortalSupportPage />} />
          <Route path="/submitnotice" element={<SubmitNotice />} />
          <Route path="/changeaddressform" element={<ChangeAdressForm />} />
          <Route
            path="/changeemailaddressform"
            element={<ChangeEmailAdressForm />}
          />
          <Route path="/loginandsecurity" element={<LoginAndSecurity />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/transactiondetails" element={<TransactionDetails />} />
          <Route path="/transactionhistory" element={<TransactionHistory />} />
          <Route path="/searchinput" element={<SearchInput />} />
          <Route
            path="/button"
            element={<PageButton buttonType="secondary">Feedback</PageButton>}
          />
          <Route
            path="/input"
            element={<InputField label="Password" inputType="password" />}
          />
          <Route
            path="/breadcrumb"
            element={<Breadcrumb items={breadcrumbItems} />}
          />
          <Route
            path="/autocomplete"
            element={
              <AutoComplete
                options={options}
                onChange={handleChange}
                value={selectedValue}
                label="Please select the Contract ID"
              />
            }
          />
          <Route
            path="/accordion"
            element={
              <AccordionComponent title="Accordion 1">
                <InputField label="Password" inputType="text" />
              </AccordionComponent>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
