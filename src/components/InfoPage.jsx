import internet from '../assets/internet.svg'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/Insta.png'
import logo from '../assets/Frame452.png'
import rectangle from '../assets/Rectangle15.png'
import rectangle1 from '../assets/Group8998/Rectangle1.svg'
import rectangle2 from '../assets/Group8998/Rectangle2.svg'
import rectangle3 from '../assets/Group8998/Rectangle3.svg'





const style = {

    infoPageBox: "grow shrink basis-[0%] relative rounded-[20px]",
    infoPageBg: "block w-full h-full absolute top-0 left-0 z-0",
    infoPageDetailsBox: "z-[1] absolute left-0 top-0 md:p-6 xl:py-6 w-full h-full flex flex-col",
    infoPageinfoBox: "text-[#FFFFFF] font-Poppins mt-48",
    infoPageHeadingBox: "lg:pr-36",
    infoPageH1: 'font-semibold xl:text-4xl text-3xl my-4',
    infoPageP: 'text-[#BFBFBF] xl:text-3xl text-2xl tracking-[0.03em]',
    infoPageCount: "flex gap-1 mt-6",
    infoPageAboutBox: "mt-auto flex justify-between items-center",
    infoPageWebLink: "flex gap-1 items-center",
    infoPageWebText: 'text-[#BFBFBF] text-xs font-Poppins',
    infoPageSocialBox: 'flex items-center gap-2',
}



const Infopage = () => {

    return (

        <div className={style.infoPageBox}>

            <img src={rectangle} alt="background" className={style.infoPageBg} />

            <div className={style.infoPageDetailsBox}>

                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div className={style.infoPageinfoBox}>
                    <div className={style.infoPageHeadingBox}>
                        <h1 className={style.infoPageH1}>100% Uptime😎</h1>
                        <p className={style.infoPageP}>Zero Infrastructure Management</p>
                    </div>

                    <div className={style.infoPageCount}>
                        <img src={rectangle3} alt="#" />
                        <img src={rectangle2} alt="#" />
                        <img src={rectangle1} alt="#" />
                    </div>
                </div>


                <div className={style.infoPageAboutBox}>

                    <a href="#" className={style.infoPageWebLink}>
                        <img src={internet} alt="internet_logo" className='block' />
                        <p className={style.infoPageWebText}>aesthisia.com</p>
                    </a>

                    <div className={style.infoPageSocialBox}>
                        <a href="#"><img src={linkedin} alt="linkedin_logo" /></a>
                        <a href="#"><img src={facebook} alt="facebook_logo" /></a>
                        <a href="#"><img src={instagram} alt="instagram_logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infopage