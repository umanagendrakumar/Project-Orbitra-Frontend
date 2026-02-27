import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const LoginPage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;