import React from "react"

export const Navbar: React.FC = () => {
    const [toggle, setToggle] = React.useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="relative flex md:items-center bg-lightGreen  px-2 md:px-8 py-2 md:py-6 justify-between mx-auto">
                <div>
                    <p className="text-xl md:text-2xl font-bold text-poppins text-normal top-2 mb-3 relative">
                        Design<span className="text-orange">AGENCY</span>
                    </p>
                </div>

                <div>
                    <ul className="hidden md:inline-flex gap-x-8 text-poppins items-center font-medium md:text-small">
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li style={{ border: `0.1rem solid #20B15A` }} className="bg-inherit px-4 py-2 flex items-center rounded-md mx-auto">Login</li>
                        <li className="bg-green px-4 py-2 flex items-center text-white rounded-md mx-auto ">Register</li>
                    </ul>
                </div>


                {toggle ?
                    <div onClick={handleClick} className="z-20 md:hidden top-2 relative">&#128473;</div>
                    :
                    <div className="z-10 md:hidden top-2 relative" onClick={handleClick}>&#9776;</div>
                }

                {toggle &&
                    <div className="md:hidden text-black absolute bg-white left-0 top-0 h-30 py-10 leading-loose text-center w-full z-10">
                        <ul className=" md:inline-flex gap-x-8 text-poppins font-medium md:text-small ">
                            <li><p>Services</p></li>
                            <li><p>About Us</p></li>
                            <li><p>Contact Us</p></li>
                            <li className="pb-3 pt-2"><p className=" rounded w-2/5 md:w-1 mx-auto " style={{ border: `0.1rem solid #20B15A` }}>Login</p></li>
                            <li><p className="bg-green py-1 w-2/5 md:w-1 text-white rounded-md mx-auto ">Register</p></li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}