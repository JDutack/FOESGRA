import FOESGRA from "../assets/FOESGRA.png"

const NavBar = () => {

    return (
        <div className="fixed w-full h-[120px] bg-transparent flex flex-col">
            <ul className=" flex flex-col justify-center text-2xl text-bold text-white ml-[25px]">
                <li><a href="#soesgype">S.O.E.S.G.yP.E.</a></li>
                <li><a href="#ospes">OSPES</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>

    )
}

export default NavBar;