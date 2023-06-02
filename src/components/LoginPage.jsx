import petals from '../assets/petals1.png'
import LoginForm from './LoginFornComponents/LoginForm'



const style = {

    loginPageBox: "text-center grow shrink basis-[0%] p-4 flex flex-col",
    loginPageLogo: 'block mr-auto ml-auto w-[61px] h-[49px] mt-5',
    loginPageH1: "font-medium font-Poppins text-4xl",
    loginPageH1Span: "text-[#08A593]",
    loginPageP: "font-Inter text-[#667085] text-sm font-normal leading-[160%] my-1",
    loginPageSingUpP: "text-[#667085] mt-auto"
}


const LoginPage = () => {

    return (
        <div className={style.loginPageBox}>
            <div>
                <div>
                    <img src={petals} alt="petals" className={style.loginPageLogo} />
                </div>
                <div>
                    <h1 className={style.loginPageH1}>Welcome <span className={style.loginPageH1Span}>Back!</span></h1>
                    <p className={style.loginPageP}>Glad to see you, Again!</p>
                </div>
            </div>
            <div>
                <LoginForm></LoginForm>
            </div>
            <div className={style.loginPageSingUpP}>
                Don<span>{"'"}</span>t an account yet? <a href="#" className='text-[#08A593]'>Sign Up</a>
            </div>
        </div>
    )
}


export default LoginPage