import '../SignUp.css';

import SignUpCompanyStepper from "./Stepper/SignUpCompanyStepper";

export default function SignUpCompanyGlobal() {
    return (
        <section className="sign-up-company">
            <div className="form">
                <SignUpCompanyStepper/>
            </div>

            <div className="image-side" style={{background: "url(/assets/bg-signin-company.jpg) no-repeat center center"}}></div>
        </section>
    )
}
