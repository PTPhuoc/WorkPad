import React from 'react'

export default function Account() {
  return (
    <div>
      <form class="mt-20 ml-[27rem] mr-[20rem]">
        <div class="flex w-full h-[50px] ">
          <label for="name" class=" bg-[#FFF600] text-center w-[10rem]  ">tên</label>
          <label type="name" class=" bg-[#FFFCAA] text-center w-[35rem]">
            <span> *Tên Account*</span> </label>
          <button class="bg-[#3D3D3D] text-center text-white w-[5rem]" >Đổi</button>
        </div>
        <div class="flex w-full h-[50px] mt-10">
          <label for="email" class=" bg-[#FFF600] text-center w-[10rem]">Email</label>
          <input type="email" id="email" class="bg-[#FFFCAA] text-center w-[40rem]" value="Email Account" />
        </div>
        <div class="flex w-full h-[50px] mt-10">
          <label for="password" class=" bg-[#FFF600] text-center w-[10rem]">Mật Khẩu</label>
          <input type="password" id="password" class="bg-[#FFFCAA] text-center w-[35rem]" />
          <button class="bg-[#3D3D3D] text-center text-white w-[5rem]" >Đổi</button>
        </div>
        <div class="flex justify-center"> 
          <button type="submit" class="w-[15rem] h-[3rem] mt-10 mb-10 text-white bg-[#E32727] rounded-3xl">Đăng nhập</button>
        </div>
      </form>
    </div>
  )
}
