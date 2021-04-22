import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as auth from "../../_redux/authRedux";
import { login } from "../../_redux/authCrud";

const initialValues = {
	"email": "eve.holt@reqres.in",
	"password": "cityslicka"
};

function Login(props) {
	const [loading, setLoading] = useState(false);
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Wrong email format")
			.min(3, "Minimum 3 symbols")
			.max(50, "Maximum 50 symbols")
			.required("Required field"),
		password: Yup.string()
			.min(3, "Minimum 3 symbols")
			.max(50, "Maximum 50 symbols")
			.required("Required field"),
	});

	const enableLoading = () => {
		setLoading(true);
	};

	const disableLoading = () => {
		setLoading(false);
	};

	const getInputClasses = (fieldname) => {
		if (formik.touched[fieldname] && formik.errors[fieldname]) {
			return "is-invalid";
		}

		if (formik.touched[fieldname] && !formik.errors[fieldname]) {
			return "is-valid";
		}

		return "";
	};

    const role = "recruiter";

	const formik = useFormik({
		initialValues,
		validationSchema: LoginSchema,
		onSubmit: (values, {
			setStatus,
			setSubmitting
		}) => {
			enableLoading();
			setTimeout(() => {
				login(values.email, values.password, role)
					.then((res) => {
						disableLoading();
						const accessToken = res.data.token
						props.login(accessToken, role);
					})
					.catch(() => {
						disableLoading();
						setSubmitting(false);
						setStatus("The login detail is incorrect");
					});
			}, 1000);
		},
	});

	return ( 
        <div 
            className = "login-form login-signin"
            id = "kt_login_signin_form"> 
            { /* begin::Head */ }
                <div className = "text-center mb-10" >
                    <h3 className = "font-size-h1" >Login</h3> 
                    <p className = "text-muted font-weight-bold"> Enter your Email-Address and Password </p> 
                </div> 
            { /* end::Head */ }

            { /*begin::Form*/ } 
            <form onSubmit = { formik.handleSubmit } className = "form fv-plugins-bootstrap fv-plugins-framework" >
                { formik.status ? ( 
                        <div className = "mb-10 alert alert-custom alert-light-danger alert-dismissible" >
                            <div className = "alert-text font-weight-bold" > 
                                {formik.status} 
                            </div> 
                        </div>
                    ) : ( "" )
                }
                <div className = "form-group fv-plugins-icon-container" >
                    <input placeholder = "Email" type = "email" className = { `form-control form-control-solid h-auto py-5 px-6 ${getInputClasses( "email" )}` } name = "email" {...formik.getFieldProps("email") } /> 
                    { 
                        formik.touched.email && formik.errors.email ? ( 
                            <div className = "fv-plugins-message-container">
                                <div className = "fv-help-block" > 
                                    { formik.errors.email } 
                                </div> 
                            </div>
                        ) : null
                    } 
                </div> 
                <div className = "form-group fv-plugins-icon-container" >
                    <input placeholder = "Password" type = "password" className = { `form-control form-control-solid h-auto py-5 px-6 ${getInputClasses( "password" )}` } name = "password" {...formik.getFieldProps("password") } /> 
                        { formik.touched.password && formik.errors.password ? ( 
                            <div className = "fv-plugins-message-container" >
                                <div className = "fv-help-block" > 
                                    { formik.errors.password } 
                                </div> 
                            </div>
                            ) : null
                        } 
                </div> 
                <div className = "form-group d-flex flex-wrap justify-content-between align-items-center" >
                    <Link to = "/auth/recruiter/forgot-password" className = "text-dark-50 text-hover-primary my-3 mr-2" id = "kt_login_forgot" >Forgot Password?</Link> 
                    <button id = "kt_login_signin_submit" type = "submit" disabled = { formik.isSubmitting } className = { `btn btn-primary font-weight-bold px-9 py-4 my-3` } >
                        <span > Sign In </span> { loading && <span className = "ml-3 spinner spinner-white" > </span>} 
                    </button> 
                </div> 
            </form> 
            { /*end::Form*/ } 
        </div>
    );
}

export default connect(null, auth.actions)(Login);