import FOESGRA from "../assets/FOESGRA.png"

const NavBar = () => {

    return (
        <div className="fixed w-full h-[120px] bg-[#0093FB] flex flex-row">
            <img src={FOESGRA} style={{width: "100px", height: "120px" }} alt="logo"/>
            <ul className=" flex flex-col justify-center text-2xl">
                <li>S.O.E.S.G. y P.E.</li>
                <li>OSPES</li>
                <li>Contacto</li>
            </ul>
        </div>

    )
}

export default NavBar;