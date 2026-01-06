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
    email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              className="w-full border-[1px] border-black rounded-[10px] p-[10px]"
              placeholder="Password"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
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
