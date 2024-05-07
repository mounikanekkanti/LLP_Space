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

function App() {

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
