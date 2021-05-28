import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
export default function Forgot(){
    let history = useHistory();
    let formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      let errors = {};
     if (!values.email) {
        errors.email = "Required";
      }
      else if(!(values.email.includes(".") && values.email.includes("@"))){
        errors.email = 'Invalid email address';
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
        <div>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form onSubmit={formik.handleSubmit}>
                            <h3 className="text-center text-info pt-5">Forgot Password</h3>
                            <div className="form-group">
                                <label for="email" className="text-info">Email:</label><br/>
                                <input type="text" name="email" id="email" className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
                            </div>
                            {formik.errors.email && formik.touched.email ? (
                            <div> {formik.errors.email}</div>
                            ) : null}
                           
                            <div className="form-group">
                    
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}