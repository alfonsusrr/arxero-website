import Header from "../../components/Header";

export default function HeaderLumin() {
    
    return (
        <div>
            <Header links={["Why Us?", "Case Study", "Features", "Plans"]} isSignIn={true} logoSource="arxero_lumin_light.png"></Header>
        </div>
    )
}