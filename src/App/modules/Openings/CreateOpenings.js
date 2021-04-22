import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    marginBottom: '1rem'
  }
}));

const initialValues = {}

export function CreateOpenings(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const FormSchema = Yup.object().shape({})

  const handleClickOpen = () => {
    setOpen(true);
    setScroll('paper');
  };

  function handleClose() {
    setOpen(false);
  }

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

  const formik = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      enableLoading();
      alert("clicked");
    },
  });

  return (
    <div>
      <Button className="btn btn-info font-weight-bolder font-size-sm" onClick={handleClickOpen}>
        Create Opening
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} scroll={scroll} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
          <AppBar className={classes.appBar}>
            <Toolbar>
              <span className="card-label h2 mb-0 font-weight-bolder text-white">New Opening</span>
            </Toolbar>
          </AppBar>
          <form onSubmit={formik.handleSubmit} className="form">
            <DialogContent className="px-6">
              <h3 className="card-title align-items-start flex-column">   
                  <span className="card-label font-weight-bolder text-dark">Account & Contact Information</span>
              </h3>
              <div className="row">
                {/* begin: Account Name */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        className={`h-auto w-100 ${getInputClasses( "account_name" )}`}
                        label="Account Name"
                        type="text"
                        name="account_name"
                        {...formik.getFieldProps("account_name")}
                      />
                      {formik.touched.account_name && formik.errors.account_name ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.account_name}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Account Name */}
                
                {/* begin: Contact Name */}
                  <div className="col-md-4">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Contact Name</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="contact_name"
                          label="Contact Name"
                          {...formik.getFieldProps("contact_name")}
                        >
                          <option value="" selected disabled></option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.contact_name && formik.errors.contact_name ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.contact_name}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Contact Name */}
              </div>

              <h3 className="card-title align-items-start flex-column mt-3">   
                  <span className="card-label font-weight-bolder text-dark">Opening Information</span>
              </h3>
              <div className="row">
                {/* begin: Opening Title */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Opening Title"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "opening_title" )}`}
                        name="opening_title"
                        {...formik.getFieldProps("opening_title")}
                      />
                      {formik.touched.opening_title && formik.errors.opening_title ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.opening_title}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Opening Title */}

                {/* begin: Opening ID */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Opening ID"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "opening_id" )}`}
                        name="opening_id"
                        {...formik.getFieldProps("opening_id")}
                      />
                      {formik.touched.opening_id && formik.errors.opening_id ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.opening_id}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Opening ID */}

                {/* begin: Account Owner */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="account_owner"
                          placeholder="Account Owner"
                          {...formik.getFieldProps("account_owner")}
                        >
                          <option value="" disabled selected>
                            Account Owner
                          </option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.account_owner && formik.errors.account_owner ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.account_owner}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Account Owner */}

                {/* begin: Primary Recruiter */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="primary_recruiter"
                          placeholder="Primary Recruiter"
                          {...formik.getFieldProps("primary_recruiter")}
                        >
                          <option value="" disabled selected>
                            Primary Recruiter
                          </option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.primary_recruiter && formik.errors.primary_recruiter ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.primary_recruiter}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Primary Recruiter */}

                {/* begin: Access */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="access"
                          placeholder="Access"
                          {...formik.getFieldProps("access")}
                        >
                          <option value="" disabled selected>
                            Access
                          </option>
                          <option value="my_team">My Team</option>
                          <option value="private">Private</option>
                          <option value="public">Public</option>
                        </Select>
                        {formik.touched.access && formik.errors.access ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.access}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Access */}

                {/* begin: Assign More Recruiters */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="assign_more_recruiters"
                          placeholder="Assign More Recruiters"
                          {...formik.getFieldProps("assign_more_recruiters")}
                        >
                          <option value="" disabled selected>
                            Assign More Recruiters
                          </option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.assign_more_recruiters && formik.errors.assign_more_recruiters ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.assign_more_recruiters}</div>
                          </div>  
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Assign More Recruiters */}

                {/* begin: End Client */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="end_client"
                          placeholder="End Client"
                          {...formik.getFieldProps("end_client")}
                        >
                          <option value="" disabled selected>
                            End Client
                          </option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.end_client && formik.errors.end_client ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.end_client}</div>
                          </div>  
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: End Client */}

                {/* begin: Required Skills */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Required Skills"
                        type="text"
                        multiline
                        rows={4}
                        className={`h-auto w-100 ${getInputClasses( "required_skills" )}`}
                        name="required_skills"
                        {...formik.getFieldProps("required_skills")}
                      />
                      {formik.touched.required_skills && formik.errors.required_skills ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.required_skills}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Required Skills */}
                
                {/* begin: Required Experience */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Required Experience"
                        type="number"
                        className={`h-auto w-100 ${getInputClasses( "required_experience" )}`}
                        name="required_experience"
                        {...formik.getFieldProps("required_experience")}
                      />
                      {formik.touched.required_experience && formik.errors.required_experience ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.required_experience}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Required Experience */}

                {/* begin: Bill Rate */}
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            variant="outlined" 
                            label="Bill Rate"
                            type="number"
                            className={`h-auto w-100 ${getInputClasses( "bill_rate" )}`}
                            name="bill_rate"
                            {...formik.getFieldProps("bill_rate")}
                          />
                          {formik.touched.bill_rate && formik.errors.bill_rate ? (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block">{formik.errors.bill_rate}</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <FormControl variant="outlined" className="w-100">
                          <div className="form-group">
                            <Select
                                native
                                className="w-100"
                                name="bill_currency"
                                placeholder="End Client"
                                {...formik.getFieldProps("bill_currency")}
                              >
                                <option value="1">د.إ(AED)</option>
                                <option value="2">€(EURO)</option>
                                <option value="3">£(GBP)</option>
                                <option value="4">﷼(QAR)</option>
                                <option value="5">﷼(SAR)</option>
                                <option value="6" selected>$(USD)</option>
                                <option value="7">R(ZAR)</option>
                                <option value="8">C$(CAD)</option>
                                <option value="9">$(MXN)</option>
                                <option value="10">₹(INR)</option>
                              </Select>
                              {formik.touched.bill_currency && formik.errors.bill_currency ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">{formik.errors.bill_currency}</div>
                                </div>  
                              ) : null}
                          </div>
                        </FormControl>
                      </div>
                      <div className="col-md-4">
                        <FormControl variant="outlined" className="w-100">
                          <div className="form-group">
                            <Select
                                native
                                className="w-100"
                                name="bill_type"
                                placeholder="End Client"
                                {...formik.getFieldProps("bill_type")}
                              >
                                <option value="H" selected>Hourly</option>
                                <option value="D">Daily</option>
                                <option value="W">Weekly</option>
                                <option value="M">Monthly</option>
                                <option value="Y">Yearly</option>
                              </Select>
                              {formik.touched.bill_type && formik.errors.bill_type ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">{formik.errors.bill_type}</div>
                                </div>  
                              ) : null}
                          </div>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                {/* end: Bill Rate */}

                {/* begin: Pay Rate */}
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            variant="outlined" 
                            label="Pay Rate"
                            type="number"
                            className={`h-auto w-100 ${getInputClasses( "pay_rate" )}`}
                            name="pay_rate"
                            {...formik.getFieldProps("pay_rate")}
                          />
                          {formik.touched.pay_rate && formik.errors.pay_rate ? (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block">{formik.errors.pay_rate}</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <FormControl variant="outlined" className="w-100">
                          <div className="form-group">
                            <Select
                                native
                                className="w-100"
                                name="pay_currency"
                                placeholder="End Client"
                                {...formik.getFieldProps("pay_currency")}
                              >
                                <option value="1">د.إ(AED)</option>
                                <option value="2">€(EURO)</option>
                                <option value="3">£(GBP)</option>
                                <option value="4">﷼(QAR)</option>
                                <option value="5">﷼(SAR)</option>
                                <option value="6" selected>$(USD)</option>
                                <option value="7">R(ZAR)</option>
                                <option value="8">C$(CAD)</option>
                                <option value="9">$(MXN)</option>
                                <option value="10">₹(INR)</option>
                              </Select>
                              {formik.touched.pay_currency && formik.errors.pay_currency ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">{formik.errors.pay_currency}</div>
                                </div>  
                              ) : null}
                          </div>
                        </FormControl>
                      </div>
                      <div className="col-md-4">
                        <FormControl variant="outlined" className="w-100">
                          <div className="form-group">
                            <Select
                                native
                                className="w-100"
                                name="pay_type"
                                placeholder="End Client"
                                {...formik.getFieldProps("pay_type")}
                              >
                                <option value="H" selected>Hourly</option>
                                <option value="D">Daily</option>
                                <option value="W">Weekly</option>
                                <option value="M">Monthly</option>
                                <option value="Y">Yearly</option>
                              </Select>
                              {formik.touched.pay_type && formik.errors.pay_type ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">{formik.errors.pay_type}</div>
                                </div>  
                              ) : null}
                          </div>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                {/* end: Pay Rate */}

                {/* begin: Country */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="country"
                          placeholder="Country"
                          {...formik.getFieldProps("country")}
                        >
                            <option value="2">India</option>
                            <option value="3">Singapore</option>
                            <option selected="selected" value="1">United States</option>
                        </Select>
                        {formik.touched.country && formik.errors.country ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.country}</div>
                          </div>  
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Country */}

                {/* begin: state */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="state"
                          placeholder="State"
                          {...formik.getFieldProps("state")}
                        >
                            <option value="2">India</option>
                            <option value="3">Singapore</option>
                            <option selected="selected" value="1">United States</option>
                        </Select>
                        {formik.touched.state && formik.errors.state ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.state}</div>
                          </div>  
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: state */}
                
                {/* begin:  City */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label=" City"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "city" )}`}
                        name="city"
                        {...formik.getFieldProps("city")}
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.city}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end:  City */}
                
                {/* begin:  Zip Code */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Zip Code"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "zip_code" )}`}
                        name="zip_code"
                        {...formik.getFieldProps("zip_code")}
                      />
                      {formik.touched.zip_code && formik.errors.zip_code ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.zip_code}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end:  Zip Code */}

                {/* begin:  Number of Openings */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Number of Openings"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "number_of_openings" )}`}
                        name="number_of_openings"
                        {...formik.getFieldProps("number_of_openings")}
                      />
                      {formik.touched.number_of_openings && formik.errors.number_of_openings ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.number_of_openings}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end:  Number of Openings */}

                {/* begin:  Max Resumes Allowed */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Max Resumes Allowed"
                        type="text"
                        className={`h-auto w-100 ${getInputClasses( "max_resumes_allowed" )}`}
                        name="max_resumes_allowed"
                        {...formik.getFieldProps("max_resumes_allowed")}
                      />
                      {formik.touched.max_resumes_allowed && formik.errors.max_resumes_allowed ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.max_resumes_allowed}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end:  Max Resumes Allowed */}

                {/* begin:  Max Resumes Allowed */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Local Indicator</FormLabel>
                        <FormGroup>
                          <div className="row ml-1">
                            <div classname="col-6">
                              <FormControlLabel
                                control={<Checkbox name="local" />}
                                label="Local"
                              />
                            </div>
                            <div classname="col-6">
                              <FormControlLabel
                                control={<Checkbox name="nonlocal" />}
                                label="Nonlocal" 
                              />
                            </div>
                          </div>
                        </FormGroup>
                      </FormControl>
                      {formik.touched.max_resumes_allowed && formik.errors.max_resumes_allowed ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.max_resumes_allowed}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end:  Max Resumes Allowed */}

                {/* begin: Security Clearance */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <Select
                          native
                          className="w-100"
                          name="security_clearance"
                          placeholder="Security Clearance"
                          {...formik.getFieldProps("security_clearance")}
                        >
                            <option value="CF">Confidential</option>
                            <option value="DH">Dept of Homeland Security</option>
                            <option value="DL">DoE Q or L</option>
                            <option value="IA">Intel Agency</option>
                            <option value="PT">Public Trust</option>
                            <option value="SC">Secret</option>
                            <option value="TI">Top Secret/SCI</option>
                            <option value="TS">Top Secret</option>
                        </Select>
                        {formik.touched.security_clearance && formik.errors.security_clearance ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.security_clearance}</div>
                          </div>  
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Security Clearance */}

                {/* begin: Job Description */}
                  <div className="col-md-12">
                    <FormLabel component="legend">Job Description</FormLabel>
                    <CKEditor
                      editor={ ClassicEditor }
                    />
                  </div>
                {/* end: Job Description */}

              </div>
            
              <h3 className="card-title align-items-start flex-column mt-6">   
                  <span className="card-label font-weight-bolder text-dark">Duration & Type</span>
              </h3>
              <div className="row">
                {/* begin: Duration */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        className={`h-auto w-100 ${getInputClasses( "duration" )}`}
                        label="Duration"
                        type="text"
                        name="duration"
                        {...formik.getFieldProps("duration")}
                      />
                      {formik.touched.duration && formik.errors.duration ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.duration}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Duration */}
                
                {/* begin: Category */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="category"
                          label="Category"
                          {...formik.getFieldProps("category")}
                        >
                          <option value="" selected disabled></option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.category && formik.errors.category ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.category}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Category */}
                
                {/* begin: SubCategory */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Sub Category</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="sub_category"
                          label="Sub Category"
                          {...formik.getFieldProps("sub_category")}
                        >
                          <option value="" selected disabled></option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.sub_category && formik.errors.sub_category ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.sub_category}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: SubCategory */}
                
                {/* begin: Employment Type */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Employment Type</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="employement_type"
                          label="Employment Type"
                          {...formik.getFieldProps("employement_type")}
                        >
                          <option value="" selected disabled></option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                          <option value="name">Name</option>
                        </Select>
                        {formik.touched.employement_type && formik.errors.employement_type ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.employement_type}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Employment Type */}
                
                {/* begin: Status */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="status"
                          label="Status"
                          {...formik.getFieldProps("status")}
                        >
                          <option value="" selected disabled></option>
                          <option value="ac">Active</option>
                          <option value="ri">Closed</option>
                          <option value="H">Hiring</option>
                          <option value="I">Interview</option>
                          <option value="ih">Interview (in-House)</option>
                          <option value="nr">No Response</option>
                          <option value="oh">On Hold</option>
                          <option value="pw">Opening – Partially Won</option>
                          <option value="op">Opening Posted</option>
                          <option value="rs">Resume Screening (Recruitment)</option>
                        </Select>
                        {formik.touched.status && formik.errors.status ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.status}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Status */}
                
                {/* begin: Experience Level */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Experience Level</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="experience_level"
                          label="Experience Level"
                          {...formik.getFieldProps("experience_level")}
                        >
                          <option value="" selected disabled></option>
                          <option value="11">Entry Level</option>
                          <option value="14">Executive (SVP, VP, Department Head, etc)</option>
                          <option value="12">Experienced (Non-Manager)</option>
                          <option value="13">Manager (Manager/Supervisor of Staff)</option>
                          <option value="15">Senior Executive (President, CFO, etc)</option>
                          <option value="16">Student (High School)</option>
                          <option value="10">Student (Undergraduate/Graduate)</option>
                        </Select>
                        {formik.touched.experience_level && formik.errors.experience_level ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.experience_level}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Experience Level */}
                
                {/* begin: Position Type */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Position Type</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="position_type"
                          label="Position Type"
                          {...formik.getFieldProps("position_type")}
                        >
                          <option value="" selected disabled></option>
                          <option value="27">Contract</option>
                          <option value="28">Contract-to-Hire</option>
                          <option value="4">Full Time</option>
                          <option value="5">Part Time</option>
                          <option value="26">Per Diem</option>
                        </Select>
                        {formik.touched.position_type && formik.errors.position_type ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.position_type}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Position Type */}
                
                {/* begin: Interview Type */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Interview Type</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="interview_type"
                          label="Interview Type"
                          {...formik.getFieldProps("interview_type")}
                        >
                          <option value="" selected disabled></option>
                          <option value="fa">Face to Face</option>
                          <option value="pi">Phone Interview</option>
                          <option value="pa">Panel Interview</option>
                          <option value="sv">Skype/Video interview</option>
                        </Select>
                        {formik.touched.interview_type && formik.errors.interview_type ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.interview_type}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Interview Type */}

                {/* begin: Visa Type */}
                  <div className="col-md-3">
                    <FormControl variant="outlined" className="w-100">
                      <div className="form-group">
                        <InputLabel id="demo-simple-select-outlined-label">Visa Type</InputLabel>
                        <Select
                          native
                          className="w-100"
                          variant="outlined"
                          name="visa_type"
                          label="Visa Type"
                          {...formik.getFieldProps("visa_type")}
                        >
                          <option value="" selected disabled></option>
                          <option value="AGA">Afghanistan Authorized</option>
                          <option value="CE">Can work for any employer</option>
                          <option value="CA">Canada Authorized</option>
                          <option value="CC">Canadian Citizen</option>
                          <option value="CP">CPT</option>
                          <option value="CEO">Current Employer Only</option>
                          <option value="EA">EAD</option>
                          <option value="ED">Employment Auth Document</option>
                          <option value="EAD">Employment Auth. Document</option>
                          <option value="ED">Employment Authorization Document</option>
                          <option value="FRA">France Authorized</option>
                          <option value="GE">GC-EAD</option>
                          <option value="GC">Green Card Holder</option>
                          <option value="H1">H1B</option>
                          <option value="HHV">Have H1</option>
                          <option value="IRA">Ireland Authorized</option>
                          <option value="ITA">Italy Authorized</option>
                          <option value="NH">Need H1</option>
                          <option value="NV">Need H1 Visa Sponsor</option>
                          <option value="OP">OPT</option>
                          <option value="SR">Sponsorship Required</option>
                          <option value="TP">TN Permit Holder</option>
                          <option value="UK">United Kingdom Authorized</option>
                          <option value="UA">US Authorized</option>
                          <option value="US">US Citizen</option>
                          <option value="USCS">US Citizenship</option>
                        </Select>
                        {formik.touched.visa_type && formik.errors.visa_type ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.visa_type}</div>
                          </div>
                        ) : null}
                      </div>
                    </FormControl>
                  </div>
                {/* end: Visa Type */}

                {/* begin: Project Start Date */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        className={`h-auto w-100 ${getInputClasses( "project_start_date" )}`}
                        label="Project Start Date"
                        type="date"
                        name="project_start_date"
                        defaultValue=""
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...formik.getFieldProps("project_start_date")}
                      />
                      {formik.touched.project_start_date && formik.errors.project_start_date ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.project_start_date}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Project Start Date */}

                {/* begin: Project end Date */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        className={`h-auto w-100 ${getInputClasses( "project_start_date" )}`}
                        label="Project end Date"
                        type="date"
                        name="project_end_date"
                        defaultValue=""
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...formik.getFieldProps("project_end_date")}
                      />
                      {formik.touched.project_end_date && formik.errors.project_end_date ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.project_end_date}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Project end Date */}


                {/* begin: Notes */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <TextField
                        variant="outlined" 
                        label="Notes"
                        type="text"
                        multiline
                        rows={2}
                        className={`h-auto w-100 ${getInputClasses( "notes" )}`}
                        name="notes"
                        {...formik.getFieldProps("notes")}
                      />
                      {formik.touched.notes && formik.errors.notes ? (
                        
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{formik.errors.notes}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                {/* end: Notes */}
              </div>

            </DialogContent>
            <DialogActions  className="px-6 pb-6">
              <Button onClick={handleClose} color="primary" className="btn btn-danger">
                  <CloseIcon className= "mr-2" />Cancel
              </Button>
              <Button color="primary" className="btn btn-primary">
                  <DoneIcon className= "mr-2" />Save
              </Button>
            </DialogActions>
          </form>
      </Dialog>
    </div>
  );
}
