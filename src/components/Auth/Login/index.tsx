import AuthLayout from "../AuthLayout";
import Overlay from "@components/Overlay";
import { loginServices } from "@services/auth.services";
import { useApp } from "../../../context/AppContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = ({
  setIsShowPopup,
  setIsShowPopupRegister,
}: {
  setIsShowPopup: (isShowPopup: boolean) => void;
  setIsShowPopupRegister: (isShowPopupRegister: boolean) => void;
}) => {
  const loginSchema = z.object({
    email: z.string().min(1, "Please enter email").email("Email is invalid"),
    password: z.string().min(6, "Password must be at least 6 character"),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { setUser } = useApp();

  const handleShowPopupRegister = () => {
    setIsShowPopupRegister(true);
    setIsShowPopup(false);
  };

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const data = await loginServices(formData);
      setUser(data.user_metadata.name);
      setIsShowPopup(false);
    } catch (error) {}
  };

  return (
    <>
      <Overlay onClick={() => setIsShowPopup(false)} />
      <AuthLayout title="Sign In" onClick={() => setIsShowPopup(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px]"
        >
          <div>
            <input
              {...register("email")}
              className="w-full border-[1px] border-black rounded-[10px] p-[10px]"
              placeholder="Email"
            />
            {errors.email && (
              <div className="mt-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {errors.email.message}
              </div>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              className="w-full border-[1px] border-black rounded-[10px] p-[10px]"
              placeholder="Password"
            />
            {errors.password && (
              <div className="mt-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
                {errors.password.message}
              </div>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="p-[10px] text-white bg-black rounded-[10px]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p>
            Don't have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleShowPopupRegister}
            >
              Sign up
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
