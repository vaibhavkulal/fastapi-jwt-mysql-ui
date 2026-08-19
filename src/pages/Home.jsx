import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold">FastAPI JWT MySQL</h1>

        <p className="mt-3 text-gray-600">
          Authentication demo frontend
        </p>

        <Link
          to="/login"
          className="mt-8 inline-block w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Login
        </Link>

        <p className="mt-5 text-sm text-gray-600">
          New here?{" "}
          <Link
            to="/register"
            className="font-semibold text-black underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
