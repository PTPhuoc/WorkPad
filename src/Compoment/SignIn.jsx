import React, { useContext, useEffect } from "react";
import { StatusContext } from "../Context/Status";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [ , , , SetIsSideBar] = useContext(StatusContext)
  useEffect(() => {
    SetIsSideBar(false)
  })
  return (
    <div>
      <div className="flex ">
        <div className="overflow-hidden h-[702px]">
          <img src="./Image/SignInBR.png" className="w-[960px]" alt="" />
        </div>
        <div className="w-[558px] h-[702px] gap-5 flex justify-center items-center flex-col bg-[#efee9b] -mr-[1000px]">
          <h1 className="text-[50px] items-center font-bold mb-4  ">Đăng nhập</h1>
          <form action="#">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="shadow-sm outline-none w-[300px] pl-5 rounded-3xl p-2.5"
                placeholder="Email "
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="shadow-sm outline-none pl-5 rounded-3xl w-full p-2.5"
                placeholder="Mật khẩu "
              />
            </div>

            <div className="flex w-full items-center justify-center">
              <div>
                <button
                  type="submit"
                  className="bg-amber-400 rounded-full bg-primary-500 hover:bg-primary-700 text-white font-bold p-2 px-4"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </form>
          <p className="text-center font-bold">
            Chưa có tài khoản? <br></br>
            <Link to="/SignUp" className="text-primary-500 hover:text-primary-700">
              Tạo tài khoản
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
