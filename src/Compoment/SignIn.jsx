import React from 'react'

export default function SignIn() {
  return (
   <div>
      <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/SigninBR.png')" }}>
        <div class="w-[558px] h-[700px] gap-5 flex justify-center items-center flex-col bg-yellow-200 -mr-[1000px]">
          <h1 class="text-4xl items-center font-bold mb-4  ">Đăng nhập</h1>
          <form action="#">
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm  font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Nhập email của bạn" />
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mật khẩu</label>
              <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Nhập mật khẩu của bạn" />
            </div>

            <div class="flex items-center justify-between">
              <button type="submit" class="flex flex-row-reverse bg-amber-400 rounded-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:ring-primary-500 focus:border-primary-500">Xác nhận</button>
            
            </div>
            <div>
            <a href="#" class="text-sm text-gray-700 dark:text-gray-500 hover:underline">Quên mật khẩu?</a>
            </div>
          </form>

          <p class="text-sm text-center font-bold text-gray-500 dark:text-gray-400">Chưa có tài khoản? <a href="#" class="text-primary-500 hover:text-primary-700">Tạo tài khoản</a></p>
        </div>

      </div>
    </div>
  )
}
