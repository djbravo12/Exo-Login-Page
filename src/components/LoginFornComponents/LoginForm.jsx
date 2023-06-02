import { Formik, Form, Field } from "formik"
import validate from './validationSchema'
import { useState } from "react";
import eye from '../../assets/eye.svg'



const style = {
    forgotPasswordStyle: "text-right text-[#667085] text-[0.75rem]/[15px] opacity-50 font-Inter my-2 block hover:opacity-100",
    loginButtonStyle: 'w-full my-8 rounded-[10px] font-Inter font-semibold text-[#FFFFFF] bg-[#020100]  shadow-bShadow hover:shadow-none py-3 px-6',
    inputStyle: 'mt-6 w-full border  rounded-[10px] placeholder:font-Inter placeholder:text-sm/[17px] placeholder:font-normal  placeholder:opacity-50 py-3 px-6',
    formStyle: 'lg:px-[3rem] xl:px-[5.5rem]',
    showPasswordButton: 'absolute top-11 right-4',
    passwordBox:'relative'
}

const LoginForm = () => {

    const [passwordType, setPasswordType] = useState("password")
    const showPassword = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (

        <>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                validationSchema={validate}
                onSubmit={(value) => {
                    console.log(value)
                }}>


                {({ values, errors, touched, handleSubmit, }) => (
                    <Form onSubmit={handleSubmit} className={style.formStyle}>

                        <Field type="text" name="email" placeholder="Enter your email" value={values.email} className={`${style.inputStyle} ${errors.email && touched.email ? "border-red-500" : "border-[#464660]"}`} />
                        <div className={style.passwordBox}>
                            <Field type={passwordType} name="password" placeholder="Enter your password" value={values.password} className={`${style.inputStyle} ${errors.email && touched.email ? "border-red-500" : "border-[#464660]"}`} />
                            <button type="button" onClick={showPassword} className={style.showPasswordButton}><img src={eye} alt="" /></button>
                        </div>
                        <a href="#" className={style.forgotPasswordStyle}>Forgot Password?</a>

                        <button type="submit" className={style.loginButtonStyle}>
                            Log In
                        </button>

                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm 