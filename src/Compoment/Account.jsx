import React, { useContext, useEffect } from "react";
import { StatusContext } from "../Context/Status";

export default function Account() {
  const [, , , SetIsSideBar] = useContext(StatusContext);
  useEffect(() => {
    SetIsSideBar(true);
  });
  return (
    <div>
      <div class="pt-[120px] mb-10 flex justify-center items-center">
        <div className="flex flex-col gap-10">
          <div className="flex justify-stretch items-center bg-[#FFFCAA]">
            <div>
              <p className="w-[100px] py-2 bg-[#FFF600] text-center">Name</p>
            </div>
            <div>
              <p className="w-[700px] text-center py-2">*Tên Account*</p>
            </div>
            <div>
              <button className="px-5 py-2 bg-[#3D3D3D] text-white">Đổi</button>
            </div>
          </div>
          <div className="flex justify-stretch items-center bg-[#FFFCAA]">
            <div>
              <p className="w-[100px] py-2 bg-[#FFF600] text-center">Email</p>
            </div>
            <div>
              <p className="w-[700px] text-center py-2">*Email Account*</p>
            </div>
          </div>
          <div className="flex justify-stretch items-center bg-[#FFFCAA]">
            <div>
              <p className="w-[100px] py-2 bg-[#FFF600] text-center">
                Mật Khẩu
              </p>
            </div>
            <div>
              <p className="w-[700px] text-center py-2"></p>
            </div>
            <div>
              <button className="px-5 py-2 bg-[#3D3D3D] text-white">Đổi</button>
            </div>
          </div>

          <div class="flex justify-center">
            <button
              type="button"
              class="w-[15rem] h-[3rem]  text-white bg-[#E32727] rounded-3xl"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
