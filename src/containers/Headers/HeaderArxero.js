import Header from "../../components/Header";

export default function HeaderArxero() {
    
    return (
        <div>
            <Header links={["Solutions", "Products", "Resources", "Company"]} isSignIn={true} logoSource="arxero_light_1.png"></Header>
        </div>
    )
}