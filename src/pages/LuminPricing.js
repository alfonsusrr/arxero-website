import HeaderLumin from "../components/Headers/HeaderLumin";

export default function LuminPricing() {
    useEffect(() => {
        document.title = 'Arxero Lumin | Plans'; // Quick solution
    }, []);
    return (
        <div>
            <HeaderLumin></HeaderLumin>
            <div className="h-[2000px]"></div>
        </div>
    )
}