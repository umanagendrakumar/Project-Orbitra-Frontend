import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-purple-50 to-blue-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Track Every Application.
        <span className="text-purple-600"> Win More Offers.</span>
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Orbitra helps you manage job applications, track interview stages,
        and stay organized, <span className="font-bold">so you focus on cracking interviews.</span>
      </p>

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="bg-purple-600 text-white px-6 py-3 shadow-md hover:bg-purple-700 transition">
          <Link
            to="/register"

          >
            Create My Space
          </Link>

        </div>

        <div className="border border-purple-600 text-purple-600 px-6 py-3  hover:bg-purple-50 transition">
          <Link
            to="/login"

          >
            I’m Returning
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;