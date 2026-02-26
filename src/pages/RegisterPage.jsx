import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-1 flex items-center justify-center">
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;