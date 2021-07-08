import React from 'react'
import AuthService from '../../services/authService'
import {  useFormik } from 'formik';
import * as Yup from "yup";
import { FormField,Form,Segment ,Grid,Container,Button} from 'semantic-ui-react';

export default function Login() {
    let authService=new AuthService();
    
    const jobSeekerRegisterShema=Yup.object().shape({
        dateOfBirth:Yup.date().required("Doğrum Tarihi Boş bırakılamaz."),
        email:Yup.string().required("Email Zorunludur").email("Geçerli bir email adresi giriniz."),
        firstName:Yup.string().required("Ad alanı zorunludur."),
        lastName:Yup.string().required("Soyadı zorunludur."),
        identityNumber:Yup.string().required("Kimlik numarası zorunludur.").length(11,"Kimlik numarsı 11 rakamdan olusur.")
        .matches([0-9],"Sadece rakam girilmelidir."),
        passwordHash:Yup.string().required("Şifre alanı zorunludur.").min(6,"Şifre en az 6 karakterden oluşmalıdır."),
        rePassword:Yup.string().oneOf([Yup.ref("passwordHash"),null],"Şifre eşleşmiyor.")

    });

    const formik=useFormik({
        initialValues:{
            dateOfBirth:"",
            email:"",
            firstName:"",
            lastName:"",
            identityNumber:"",
            passwordHash:"",
            rePassword:"",

        },
        validationSchema:jobSeekerRegisterShema,
        onSubmit:(values)=>{
            console.log(values)
        }
    });
    const handleChangeSemantic=(value,fieldName)=>{
        formik.setFieldValue(fieldName,value);
    }

    return (
        <div>
            <Container>
            <Form onSubmit={FormField.handleSubmit}>
                <Segment>
                    <Grid>
                        <Grid.Column>
                            <div>
                                <label>isim</label>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="isim"
                                    type="text"
                                    value={formik.values.firstName}
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {
                                       formik.errors.firstName &&formik.touched.firstName &&(
                                           <div>
                                               {formik.errors.firstName}
                                           </div>
                                       )         
                                    }

                            </div>
                            <div>
                                <label>Soyadı</label>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Soyadı"
                                    type="text"
                                    value={formik.values.lastName}
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.lastName&&formik.touched&&(
                                            <div>
                                                {formik.errors.lastName}
                                            </div>
                                        )
                                    }
                            </div>
                            <div>
                                <label>Kimlik Numarası</label>
                                <Form.Input
                                    fluid
                                    icon="card id"
                                    iconPosition="left"
                                    placeholder="Kimlik Numarası"
                                    type="text"
                                    value={formik.values.identityNumber}
                                    name="identityNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.identityNumber&&formik.touched.identityNumber&&(
                                        <div>
                                            {formik.errors.identityNumber}
                                        </div>
                                    )}
                            </div>
                            <div>
                                <label>Doğum Tarihi</label>
                                <Form.Input
                                    fluid
                                    icon="calendar times"
                                    iconPosition="left"
                                    placeholder="Dogum tarihi"
                                    type="date"
                                    error={Boolean(formik.errors.birthDate)}
                                    onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "birthDate")
                                    }
                                    value={formik.values.birthDate}
                                    onBlur={formik.handleBlur}
                                    name="birthDate"
                                />
                                    {formik.errors.dateOfBirth&&formik.touched.dateOfBirth&&(
                                        <div>
                                            {formik.errors.dateOfBirth}
                                        </div>
                                    )}
                                    {formik.errors.birthDate && formik.touched.birthDate && (
                                    <div className={"ui pointing red basic label"}>
                                    {formik.errors.birthDate}
                                    </div>
                                    )}
                            </div>
                            <div>
                                <label>Email</label>
                                <Form.Input
                                    fluid
                                    icon="card id"
                                    iconPosition="left"
                                    placeholder="Email"
                                    type="email"
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email&&formik.touched.email&&(
                                        <div>
                                            {formik.errors.email}
                                        </div>
                                    )}
                            </div>
                            <div>
                                <label>Şifre</label>
                                <Form.Input
                                    fluid
                                    icon="card id"
                                    iconPosition="left"
                                    placeholder="Şifre "
                                    type="text"
                                    value={formik.values.passwordHash}
                                    name="passwordHash"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.passwordHash&&formik.touched.passwordHash&&(
                                        <div>
                                            {formik.errors.passwordHash}
                                        </div>
                                    )}
                            </div>
                            <div>
                                <label>Şifre Tekrarı</label>
                                <Form.Input
                                    fluid
                                    icon="card id"
                                    iconPosition="left"
                                    placeholder="Şifre Tekrrı"
                                    type="text"
                                    value={formik.values.rePassword}
                                    name="rePassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.rePassword&&formik.touched.rePassword&&(
                                        <div>
                                            {formik.errors.rePassword}
                                        </div>
                                    )}
                            </div>
                        </Grid.Column>
                    </Grid>
                    <Button color="violet" fluid size="large" type="submit">KayıtOl</Button>
                </Segment>
            </Form>
            </Container>
            
        </div>
    )
}
