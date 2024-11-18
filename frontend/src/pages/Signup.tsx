import Statement from "../components/Statement";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup" />
        </div>
        <div className="hidden lg:block">
          <Statement />
        </div>
      </div>
    </div>
  );
};

export default Signup;
