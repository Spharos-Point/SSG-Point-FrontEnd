'use client'

import { usePathname } from "next/navigation";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {

    const pathname  = usePathname();

    return (
        <>
        <header className="main_header">
            <HeaderTop />
        </header>
        {
            pathname === '/' || pathname === '/coupon' ? <HeaderBottom /> : null
        }
        </>
    )
}

export default  Header;