import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useMenu/useAuth";
import useAxiosPublic from "../../hooks/useMenu/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p className="text-center mb-4">
        Sign up with{" "}
        <span
          onClick={handleGoogleSignIn}
          className="text-xl font-semibold hover:cursor-pointer hover:underline text-orange-500"
        >
          Google
        </span>
      </p>
    </div>
  );
};

export default SocialLogin;
