import React, { useState } from "react";
import axios from "axios";
import "./AddLead.css";
import Form from "./components/form";
// import HeadBar from "./components/headbar";
import Topbar from "./components/headbar1";
import LeftBar from "./components/leftbar";
import TitleBar from "./components/titlebar";


export default function AddLead() {

  const [esuffix, setEsuffix] = useState("")
  const [errorfirstname, setEfirstname] = useState("")
  const [errorlastname, setElastname] = useState("")
  const [errorcompany, setEcompany] = useState("")
  const [errorphone, setEphone] = useState("")
  const [erroremail, setEemail] = useState("")
  const [erroraddress, setEaddress] = useState("")
  const [errorcreatedon, setEcreatedon] = useState("")
  const [errorcreatedby, setEcreatedby] = useState("")


    let SaveLead= ()=>{
      const suffix = localStorage.getItem("salutationvar");
      const firstname = localStorage.getItem("firstnamevar");
      const lastname = localStorage.getItem("lastnamevar");
      const company = localStorage.getItem("companyvar");
      const phone = localStorage.getItem("phonevar");
      const email = localStorage.getItem("emailvar");
      const address = localStorage.getItem("statevar");
      const createdOn = localStorage.getItem("dateAddedOnvar");
      const createdBy = localStorage.getItem("leadOwnervar");
  
      console.log(
        suffix,
        firstname,
        lastname,
        company,
        phone,
        email,
        address,
        createdBy,
        createdOn
      );
  
      if (suffix === "") {
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setEsuffix("*suffix is mandatory");
        // localStorage.setItem('esuffixvar', errorsuffix)
      } else if (firstname === "") {
        alert("firstname is mandatory");
        setEsuffix("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setEfirstname("*firstname is mandatory");
        // localStorage.setItem('efirstnamevar', errorfirstname)
      } else if (lastname === "") {
        alert("lastname is mandatory");
        setEfirstname("");
        setEsuffix("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setElastname("*lastname is mandatory");
        // localStorage.setItem('elastnamevar', errorlastname)
      } else if (company === "") {
        alert("company is mandatory");
        setElastname("");
        setEsuffix("");
        setEfirstname("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setEcompany("*company is mandatory");
        // localStorage.setItem('ecompanyvar', errorcompany)
      } else if (email === "") {
        alert("email is mandatory");
        setEsuffix("");
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setEemail("*email is mandatory");
        // localStorage.setItem('eemailvar', erroremail)
      } else if (phone === undefined) {
        alert("phone is mandatory");
        setEsuffix("");
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("");
        setEphone("*phone is mandatory");
        // localStorage.setItem('ephonevar', errorphone)
      } else if (address === "") {
        alert("state is mandatory");
        setEsuffix("");
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEcreatedon("");
        setEcreatedby("");
        setEaddress("*address is mandatory");
        // localStorage.setItem('eaddressvar', erroraddress)
      } else if (createdOn === "") {
        alert("created on is mandatory");
        setEsuffix("");
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedby("");
        setEcreatedon("*created on is mandatory");
        // localStorage.setItem('ecreatedonvar', errorcreatedon)
      } else if (createdBy === 0) {
        alert("created on is mandatory");
        setEsuffix("");
        setEfirstname("");
        setElastname("");
        setEcompany("");
        setEemail("");
        setEphone("");
        setEaddress("");
        setEcreatedon("");
        setEcreatedby("*created on is mandatory");
        // localStorage.setItem('ecreatedbyvar', errorcreatedby)
      } else {
        // const url = "http://localhost:3000/dev/InsertLead";
        const url = "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/InsertLead"
        const data = {
          suffix: suffix,
          firstname: firstname,
          lastname: lastname,
          company: company,
          phone: Number(phone),
          email: email,
          address: address,
          createdOn: createdOn,
          createdBy: Number(createdBy),
        };
        const header = {};
        axios
          .post(url, data, { headers: header })
          .then((res) => {
            if (res.data === "email id already exists") {
              setEsuffix("");
              setEfirstname("");
              setElastname("");
              setEcompany("");
              setEphone("");
              setEaddress("");
              setEcreatedon("");
              setEcreatedby("");
              setEemail("*email id already exist");
            } else {
              setEsuffix("");
              setEfirstname("");
              setElastname("");
              setEcompany("");
              setEemail("");
              setEphone("");
              setEaddress("");
              setEcreatedon("");
              setEcreatedby("");
              console.log("response==> " + JSON.stringify(res.data));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };





  return (
    <div>
      <Topbar />
      <div className="AddLead_content">
        <LeftBar className="AddLead_LeftBar"/>
        <div className="AddLead_content_right">
          <div className="AddLead_content_right_inside">
            {/* <TitleBar setEsuffix = {setEsuffix} setEfirstname = {setEfirstname}  setElastname={setElastname} setEcompany={setEcompany} setEphone={setEphone} setEemail={setEemail} setEaddress={setEaddress} setEcreatedon={setEcreatedon} setEcreatedby={setEcreatedby} /> */}
            < TitleBar SaveLead={SaveLead} />
            <div className="AddLead_content_right_inside_form">
                <Form esuffix={esuffix} efirstname={errorfirstname} elastname={errorlastname} ecompany={errorcompany} ephone={errorphone} eemail={erroremail} eaddress={erroraddress} ecreatedon={errorcreatedon} ecreatedby={errorcreatedby} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
