import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import AuthService from "../../services/authService";
export default function EmployerRegister() {
  const [employe, setEmploye] = useState([]);
  function employes() {
    setEmploye(!employe);
  }
  let employerService = new AuthService();
  const employerServiceShema = Yup.object().shape({
    companyName: Yup.string()
      .required("Şirket adı boş bırakılamaz")
      .min(2, "en az 2 karakterden oluşmalıdır"),
    passwordHash: Yup.string()
      .required("Şifre boş bırakılamaz.")
      .min(6, "şifre en az 6 karakterden oluşmalıdır."),
    rePassword: Yup.string()
      .required("şifre tekrarı")
      .oneOf([Yup.ref("passwordHash"), null], "şifre aynı olmak zorunda "),
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email giriniz."),
    webSite: Yup.string()
      .required("Web Sitesi Zorunludur")
      .test("http olmadan yazınız", function () {
        let site = this.parent["webSite"];
        if (site) {
          return site.startsWith("http://www.") ? false : true;
        }
      }),
  });
  const formik = useFormik({
    initialValues: {
      companyName: "",
      passwordHash: "",
      rePassword: "",
      webSite: "",
      email: "",
    },
    validationSchema: employerServiceShema,
    onSubmit: (values) => {
      console.log(values, values.rePassword);
      employerService
        .registerForEmployer(values, values.rePassword)
        .then((result) => {
          if (result.data.success === false) {
            return swal({
              title: result.data.message,
              text: "",
              icon: "warning",
              dangerMode: true,
              button: "kapat",
            });
          } else {
            swal(
              "Kayıt oldunuz.! Lütfen login ekranından giriş yapınız.",
              "",
              "Succes"
            );
          }
        });
    },
  });
  return (
    <div>
      <Form>
        <Segment>
          <div>
            <label>
              <b>Şirket adı</b>
            </label>
            <Form.Input
              fluid
              icon="building"
              iconPosition="left"
              placeholder="Şirket Adı"
              type="text"
              value={formik.values.companyName}
              name="companyName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.companyName && formik.touched.companyName && (
              <div>{formik.errors.companyName}</div>
            )}
          </div>
          <Grid stackable>
            <Grid.Column>
              <div style={{marginTop:"1em"}}>
                <label>
                  <b>Web Sitesi</b>
                </label>
                <Form.Input
                  fluid
                  icon="building"
                  iconPosition="left"
                  placeholder="Web Site"
                  type="text"
                  value={formik.values.webSite}
                  name="webSite"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.webSite && formik.touched.webSite && (
                  <div>{formik.errors.webSite}</div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
                <label>
                  <b>Email</b>
                </label>
                <Form.Input
                  fluid
                  icon="building"
                  iconPosition="left"
                  placeholder="Email"
                  type="email"
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div>{formik.errors.email}</div>
                )}
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Form>
    </div>
  );
}
