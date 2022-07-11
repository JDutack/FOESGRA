
const Home = () => {
    return (
        <div className="w-full py-[120px] h-screen">
            <div className="text-6xl bg-portada-patagonia text-white text-center bg-right bg-cover bg-fixed h-1/2 w-full font-sans flex justify-center items-center"> S.O.E.S.G. y P.E. <br />Patagonia </div>
            <div className="text-4xl flex justify-center items-center max-w-[1000px] mx-auto py-[100px] h-full flex-wrap">
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center"> Chubut </div> 
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center"> Río Negro </div>
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-center text-white flex justify-center items-center">Tierra del Fuego</div>
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center"> Santa Cruz </div>
            </div>
            <div className="text-6xl bg-portada-patagonia text-white bg-right text-center bg-cover bg-fixed h-1/2 w-full font-sans flex justify-center items-center"> OSPES <br /> obra social </div>
            <div className="text-4xl flex justify-center items-center max-w-[1000px] my-[50px] mx-auto h-full flex-wrap">
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center"> Río Negro </div>
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-white flex justify-center items-center"> Chubut </div> 
                <div className="bg-cuadro-chubut h-[150px] w-[200px] m-[20px] bg-center text-center text-white flex justify-center items-center">Tierra del Fuego</div>
            </div>
            <div className="w-full h-1/2 bg-[#0093FB] font-sans flex flex-col">
                <h1 className="text-6xl text-white text-center py-[25px] ">Contacto</h1>
                <div className="text-2xl flex flex-col items-center text-white justify-center">
                    Teléfono: 011-4464-0523 <br />
                    Mail: nosecuanto@gmail.com <br />
                    Dirección: John Connor 768, San Carlos de Bariloche, Provincia de Río Negro, Argentina <br />
                </div>
            </div>      
        </div>
    )
}
export default Home;