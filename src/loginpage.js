import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
export default function Loginpage(){
    let history = useHistory();
    let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
     if (!values.email) {
        errors.email = "Required";
      }
      else if(!(values.email.includes(".") && values.email.includes("@"))){
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = "Required";
      }
      
      return errors;
    },
    onSubmit: async (values) => {
      console.log("Final Values", values);
    //   let email = values.email;
    //   let password = values.password;
      await fetch("", {
        // method: "POST",
        // body: JSON.stringify({
        //   firstname,
        //   lastname,
        //   email,
        //   password,
        // }),
        // headers: {
        //   "Content-type": "application/json",
        // },
      });
     history.push("/dashboard");
    },
  });
    return <>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form onSubmit={formik.handleSubmit}>
                            <h3 className="text-center text-info pt-5">Login</h3>
                            <div className="form-group">
                                <label for="email" className="text-info">Email:</label><br/>
                                <input type="text" name="email" id="email" className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
                            </div>
                            {formik.errors.email && formik.touched.email ? (
                            <div> {formik.errors.email}</div>
                            ) : null}
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
                            </div>
                            {formik.errors.password && formik.touched.password ? (
                            <div> {formik.errors.password}</div>
                            ) : null}
                            <div className="form-group">
                                <Link to="/forgot" className="text-muted">Forgot Password</Link><br/> <br/>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}