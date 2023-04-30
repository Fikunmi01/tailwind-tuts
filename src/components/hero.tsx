export const Hero: React.FC = () => {
    return (
        <>
            <div className="bg-lightGreen relative flex flex-col-reverse md:flex-row px-2 md:px-16 mx-auto items-center text-poppins">
                <div className="w-full md:w-1/2">
                    <h2 className="font-black leading-tight md:leading-tight text-2xl justify-center md:text-5xl pt-3 pb-3 w-full md:w-full">Increase Your Customers Loyalty and Satisfaction</h2>
                    <p className="text-lg font-medium pb-3 md:pb-8 w-full md:w-4/5">We help businesses like yours earn more customers, standouts from competitors, make more money</p>
                    <button className="text-white text-small py-3 px-4 rounded-xl bg-green">Get Started</button>
                </div>

                <div>
                    <img className="w-full" src="../assets/headerImg.png" />
                </div>
            </div>
        </>
    )
}