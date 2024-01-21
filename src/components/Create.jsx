import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BlogCard from "../common/BlogCard";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Topbar from "./Topbar";
function Create() {
  
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [website, setWebsite] = useState("");
  let [company, setCompany] = useState("");

  let navigate = useNavigate();

  const handleCreate = async () => {
    try {
      let data = {
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
        status: false
      };
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        toast.success("Blog Created Successfully");
        navigate("/dashboard");
      }
    } catch (error) {}
  };
  return (
    <div className="container-fluid">
      <Topbar />
      <div className="homeWrapper">
        <div className="formWrapper">
          <Form id="form">
            <Form.Group className="mb-2">
              <Form.Label>name</Form.Label>
              <Form.Control
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>username</Form.Label>
              <Form.Control
                placeholder="name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>email</Form.Label>
              <Form.Control
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>phone</Form.Label>
              <Form.Control
                placeholder="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>website</Form.Label>
              <Form.Control
                placeholder="website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>company</Form.Label>
              <Form.Control
                placeholder="company"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => handleCreate()} id="button">
              Submit
            </Button>
          </Form>
        </div>

        <div className="previewWrapper">
          <h2 style={{ textAlign: "center" }}>Preview</h2>
          <BlogCard
            name={name}
            username={username}
            email={email}
            address={address}
            phone={phone}
            website={website}
            company={company}
          />
        </div>
      </div>
    </div>
  );
}

export default Create;
