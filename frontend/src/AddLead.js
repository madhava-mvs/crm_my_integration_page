import React, { useState } from "react";
import "./AddLead.css";
import Form from "./components/form";
// import HeadBar from "./components/headbar";
import Topbar from "./components/headbar1";
import LeftBar from "./components/leftbar";
import TitleBar from "./components/titlebar";

export default function AddLead() {

    const [errorsuffix, setEsuffix] = useState("")
    const [errorfirstname, setEfirstname] = useState("")
    const [errorlastname, setElastname] = useState("")
    const [errorcompany, setEcompany] = useState("")
    const [errorphone, setEphone] = useState("")
    const [erroremail, setEemail] = useState("")
    const [erroraddress, setEaddress] = useState("")
    const [errorcreatedon, setEcreatedon] = useState("")
    const [errorcreatedby, setEcreatedby] = useState("")


  return (
    <div>
      <Topbar />
      <div className="AddLead_content">
        <LeftBar className="AddLead_LeftBar"/>
        <div className="AddLead_content_right">
          <div className="AddLead_content_right_inside">
            <TitleBar setEsuffix = {setEsuffix} setEfirstname = {setEfirstname}  setElastname={setElastname} setEcompany={setEcompany} setEphone={setEphone} setEemail={setEemail} setEaddress={setEaddress} setEcreatedon={setEcreatedon} setEcreatedby={setEcreatedby} />
            <div className="AddLead_content_right_inside_form">
                <Form esuffix={errorsuffix} efirstname={errorfirstname} elastname={errorlastname} ecompany={errorcompany} ephone={errorphone} eemail={erroremail} eaddress={erroraddress} ecreatedon={errorcreatedon} ecreatedby={errorcreatedby} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
