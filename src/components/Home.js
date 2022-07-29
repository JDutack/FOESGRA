
const Home = () => {
    return (
        <div id="home" className="w-full font-mono py-[0px] ">
            <div id="soesgype" className="text-4xl font-bold text-[#0066af] text-center mt-[0px] bg-portada-patagonia h-[280px] bg-no-repeat w-full border-b-[7px] border-[#0066af] rounded-br-[75px] flex justify-center flex-col items-center">S.O.E.S.G. y P.E.<br />
            <div className="text-2xl text-bold max-w-[1000px] text-black pt-[20px]" >Sindicato Obreros y Empleados de Estaciones de Servicio, GNC, Garage, Playa de Estacionamiento, Lavaderos de Auto de la República Argentina.</div>
                </div> 
            <div className="text-4xl flex justify-center bg-[#E5E7EB] items-center max-w-[1000px] mx-auto min-h-screen flex-wrap pb-[50px] ">
            <a href="../components/SinChubut.js" > <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center bg-cover text-white  font-semibold flex justify-center items-center border-l-[7px] border-[#0066af] rounded-xl">  Chubut </div> </a>
                <div className="bg-cuadro-sc h-[150px] w-[200px] m-[20px] bg-center bg-cover text-white  font-semibold text-center flex justify-center items-center border-l-[7px] border-[#0066af] rounded-xl"> <a target="_self" >Santa Cruz</a> </div>
                <div className="bg-cuadro-tdf h-[150px] w-[200px] m-[20px] bg-center bg-cover text-center text-white  font-semibold flex justify-center items-center border-l-[7px] border-[#0066af] rounded-xl"><a target="_self" >Tierra del Fuego</a></div>
            </div>
            <div id="ospes" className="text-4xl h-[260px] font-bold text-[#ffd32a]  text-center bg-portada-fitz bg-top bg-cover bg-no-repeat w-full flex flex-col justify-center border-y-[7px] rounded-bl-[50px] border-b-[#ffd32a] items-center py-[0px] mt-[0px]"> O.S.P.E.S. <br />
             <div className="text-2xl max-w-[1000px] text-black pt-[20px]" >Obra Social Para el Personal de Estaciones de Servicios, GNC, Garage, Playa de Estacionamiento, Lavaderos de Auto de la República Argentina.</div>
            </div>
            <div className="text-4xl flex font-semibold justify-center bg-[#E5E7EB] items-center max-w-[1000px] mx-auto min-h-screen flex-wrap">
                <div className="bg-portada-patagonia bg-cover h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center border-l-[7px] border-[#ffd32a] rounded-xl"> <a target="_self" >Río Negro</a> </div>
                <div className="bg-cuadro-chubut bg-cover h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center border-l-[7px] border-[#ffd32a] rounded-xl"> <a target="_self">Chubut</a> </div> 
                <div className="bg-cuadro-tdf bg-cover h-[150px] w-[200px] m-[20px] bg-center text-center text-white flex justify-center items-center border-l-[7px] border-[#ffd32a] rounded-xl"><a target="_self">Tierra del Fuego</a></div>
                <div className="bg-cuadro-sc h-[150px] w-[200px] m-[20px] bg-center bg-cover text-center text-white flex justify-center items-center border-l-[7px] border-[#ffd32a] rounded-xl"> <a target="_self" >Santa Cruz</a> </div>
            </div>
            <div className="w-full bg-[#0066af] border-t-[7px]  flex flex-col">
                <h1 className="text-4xl text-white text-center mt-[50px] ">Contacto</h1>
                <div id="contacto" className="text-2xl flex flex-col items-center  text-white justify-center">
                    Teléfono: 011-4464-0523 <br />
                    Mail: nosecuanto@gmail.com <br />
                    Dirección: John Connor 768, San Carlos de Bariloche <br />
                </div>
            </div>   
        </div>
    )
}
export default Home;