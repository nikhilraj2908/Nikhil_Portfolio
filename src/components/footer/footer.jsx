import './footer.css'
import { QrCodeComponent } from "../qrcode/qrcode";
import { Formik, useFormik } from "formik";
export function Footer(){
    const formik = useFormik({
        initialValues: {
            name: "",
            password: ""
        },
        validate: formvalidate,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    function formvalidate(formdata) {
        var errors = {}
        if (formdata.password.match(/\w{8}/)) {
            errors.password = "";
        } else {
            errors.password = "password should be 8 chat min"
        }
        if (formdata.name.length == 0) {
            errors.name = "user_name required"
        }
        return errors;
    }
    function userpaste() {
        document.
            paste = () => {
                alert("paste is not allowed write manually");
                return false;
            }
    }
    function checkuser() {

    }
    return(
        <div>
            <footer id="footer" className="text-light">
                <div className=" bg-dark footer-container" >
                    <div className=" p-4">
                        <div className="align-content-center  text-center">
                            <div className="m-3 contact-icon">
                                <a className="bi bi-telephone-outbound-fill" href="tel:+918821051303" ></a>
                                <a className="bi bi-envelope-fill" href="mailto:Nikhilraj2908@gmail.com"></a>
                                <a className="bi bi-github" href="https://github.com/nikhilraj2908"></a>
                                <a className="bi bi-linkedin" href="https://www.linkedin.com/in/nikhil-ahirwar-311399241/?originalSubdomain=in"></a>
                                <a className="bi bi-instagram" href="https://www.instagram.com/02nikhil_raj_/"></a>
                            </div>
                        </div>
                        <br></br>
                        <div className="contect-footer  ">
                            <span className="w-100" style={{ marginRight: "5%" }}>
                                <h5>Permanant Address</h5>
                                <address style={{ marginLeft: "2%" }} className="bi bi-house text-secondary">
                                    <span className="ps-1">
                                        Luhangi pura near new water tank <br />
                                        Vidisha (M.P.), 464001<br />
                                        Madhyapradesh, INDIA
                                    </span>
                                    <div> Contact No. - 8821051303</div>
                                </address>
                            </span>
                            <span className="w-100" style={{ paddingLeft: "10%", borderLeft: "1px dotted gray", borderRight: "1px dotted gray" }}>
                                <h5>Current Address</h5>
                                <address className=" bi bi-house text-secondary" style={{ marginLeft: "2%" }}>
                                    <span className=" ps-1">
                                        Kudlu gate near hospitic Hospital<br />
                                        bangalore (560068)<br />
                                        karnataka, INDIA
                                    </span>
                                    <div> Contact No. - 8821051303</div>
                                </address>
                            </span>
                            <span className="w-100">
                            <h5 className="text-center">Scan and Connect</h5>
                               <div className="qr-container d-flex  justify-content-center " style={{margin:"-60px"}}>
                                    <QrCodeComponent ></QrCodeComponent>
                               </div>
                            </span>
                        </div>
                        <hr></hr>
                        <div className="text-center text-secondary ">Copyright ©2024 All rights reserved</div>
                    </div>
                    <div className="container-admin " style={{ display: "flex", justifyContent: "center", borderLeft: '1px solid white' }}>
                        <div className="w-100">
                            <h5 className="text-center mt-4 text-decoration-underline">Any Updated Information</h5>
                            <form className="bg-light text-dark m-4 p-3 rounded" onSubmit={formik.handleSubmit}>
                                <h3 className="text-center text-dark">Login Admin</h3>
                                <div>
                                    <label htmlFor="user_name">Enter your name</label>
                                    <input onKeyUp={checkuser} onChange={formik.handleChange} required placeholder="user_name" name="name" className="form-control" />
                                    <div className="text-danger">{formik.errors.name}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password">Enter Password</label>
                                    <input onPaste={userpaste} onChange={formik.handleChange} placeholder="password" name="password" className="mb-2 form-control" id="password" type="password" />
                                    <div className="text-danger">{formik.errors.password}</div>
                                </div>
                                <button className="w-100 btn btn-success">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}