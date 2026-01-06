import AuthLayout from "../AuthLayout";
import Overlay from "@components/Overlay";
import { registerServices } from "@services/auth.services";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

const Register = ({
  setIsShowPopupRegister,
  setIsShowPopup,
}: {
  setIsShowPopupRegister: (isShowPopupRegister: boolean) => void;
  setIsShowPopup: (isShowPopup: boolean) => void;
}) => {
  const registerSchema = z.object({
    email: z.string().min(5, "Vui lòng nhập email").email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    name: z.string().min(3, "Tên phải có ít nhất 3 ký tự"),
  });

  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (dataFormRegister: RegisterFormData) => {
    try {
      await registerServices(dataFormRegister);
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          setError("email", {
            type: "server",
            message: "Email này đã được đăng ký",
          });
          return;
        }
      }
    }
  };

  const handleShowPopupLogin = () => {
    setIsShowPopupRegister(false);
    setIsShowPopup(true);
  };

  return (
    <>
      <Overlay onClick={() => setIsShowPopupRegister(false)} />
      <AuthLayout title="Sign Up" onClick={() => setIsShowPopupRegister(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px]"
        >
          <div>
            <input
              {...register("name")}
              className="w-full border-[1px] border-black rounded-[10px] p-[10px]"
              placeholder="Name"
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>

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
            className="p-[10px] bg-black text-white rounded-[10px]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p>
            Already have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleShowPopupLogin}
            >
              Sign in
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
