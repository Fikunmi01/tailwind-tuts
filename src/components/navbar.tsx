export const Navbar: React.FC = () => {
    return (
        <>
            <div className="relative flex md:items-center bg-lightGreen px-2 md:px-8 py-2 md:py-6 justify-between mx-auto">
                <div>
                    <p className="text-xl md:text-2xl font-bold text-poppins text-normal">
                        Design<span className="text-orange">AGENCY</span>
                    </p>
                </div>

                <div>
                    <ul className="hidden md:inline-flex gap-x-8 text-poppins font-medium md:text-small ">
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
        </>
    )
}