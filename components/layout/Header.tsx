import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop"
import Link from "next/link"

const Header = () => {

    return (
        <header className="main_header">
            <HeaderTop />
            <HeaderBottom/>
        </header>
    )
}

export default  Header;