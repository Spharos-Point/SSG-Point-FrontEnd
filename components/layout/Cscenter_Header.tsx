import HeaderTop from "./HeaderTop";
import Cscenter_HeaderBottom from "./Cscenter_HeaderBottom";


const Cscenter_Header = () => {

    return (
        <>
        <header className="main_header">
            <HeaderTop />
        </header>
        <div>
            <Cscenter_HeaderBottom/>
        </div>
        </>
    )
}

export default  Cscenter_Header;