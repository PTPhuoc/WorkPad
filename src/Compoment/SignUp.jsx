import React, { useContext, useEffect } from 'react'
import { StatusContext } from '../Context/Status'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
          <h1 className="text-[50px] items-center font-bold mb-4">Đăng ký</h1>
      <div className="flex ">
        <div className="overflow-hidden h-[702px]">
          <img src="./Image/SignInBR.png" className="w-[960px]" alt="" />
        </div>
        <div className="w-[558px] h-[702px] gap-5 flex justify-center items-center flex-col bg-[#efee9b] -mr-[1000px]">
          <h1 className="text-[50px] items-center font-bold mb-4">Đăng ký</h1>
          <form action="#">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="shadow-sm outline-none w-[300px] pl-5 rounded-3xl p-2.5"
                placeholder="Email"
              />
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="shadow-sm outline-none w-[300px] pl-5 rounded-3xl p-2.5"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="shadow-sm outline-none pl-5 rounded-3xl w-full p-2.5"
                placeholder="Mật khẩu"
              />
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="shadow-sm outline-none pl-5 rounded-3xl w-full p-2.5"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="confirm_password"
                className="shadow-sm bg-gray-50  outline-none  rounded-3xl w-full p-2.5"
                placeholder="Nhập lại mật khẩu của bạn"
              />
            <div className="mb-4">
              <input
                type="password"
                id="confirm_password"
                className="shadow-sm bg-gray-50  outline-none  rounded-3xl w-full p-2.5"
                placeholder="Nhập lại mật khẩu của bạn"
              />
            </div>
            <div className="text-center flex justify-center">
              <button type="submit" className=" bg-amber-400 rounded-full text-white font-bold py-2 px-4">
                Xác nhận
              </button>
            <div className="text-center flex justify-center">
              <button type="submit" className=" bg-amber-400 rounded-full text-white font-bold py-2 px-4">
                Xác nhận
              </button>
            </div>
          </form>
          <p className="text-center font-bold">
            Đã có tài khoản? <br></br>
            <Link to="/SignIn" className="text-primary-500 hover:text-primary-700">
              Hãy đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
