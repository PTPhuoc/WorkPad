import React from "react";
import { Link } from "react-router-dom";
export default function PageMain() {
  return (
    <div className="flex flex-col pt-[30px]">
      <div className="flex flex-row-reverse justify-between flex-wrap gap-[70px]">
        <div className="w-[500px] h-[300px] gap-5 flex justify-center items-center flex-col bg-yellow-200 rounded-tl-3xl rounded-bl-3xl">
          <div>
            <p>Dùng thử WorkPad </p>
          </div>
          <div>
            <Link
              to="/EditNote"
              className="bg-zinc-800 text-white rounded-3xl pt-3 pb-3 pl-5 pr-5 hover:bg-white hover:text-yellow-600 duration-200 ease-linear"
            >
              Tại Đây
            </Link>
          </div>
        </div>
        <div className="w-[900px] h-[300px] text-center bg-zinc-300 p-[20px] ml-[30px] rounded-3xl">
          <h1 className="text-[40px]">WorkPad</h1>
          <br></br>
          <p>
            WorkPad được tạo ra với mục đích giúp bạn ghi lại những suy nghĩ, ý
            tưởng và công việc hàng ngày một cách thuận tiện và linh hoạt. Tận
            dụng giao diện đơn giản và thân thiện, bạn có thể truy cập và sử
            dụng trang web từ bất kỳ thiết bị nào có kết nối internet, giúp bạn
            tiếp tục làm việc và sắp xếp công việc mọi lúc, mọi nơi.
          </p>
        </div>
      </div>
      <div className="w-full h-[4px] bg-zinc-800 mt-[30px] mb-[30px] "></div>
      <div>
        <div className=" w-100 h-100  border-gray-100 p-5 rounded-lg shadow-md bg-slate-400 relative">
          <p className="leading-6 mb-10">
            Hổ Trợ đầy đủ công cụ của trình soạn thảo cơ bản. Tạo các ghi chú và
            ý tưởng mới chỉ trong vài giây, không cần đăng nhập hoặc tạo tài
            khoản nếu không sử dụng lâu dài.
          </p>
          <div className="but absolute bottom-20 right-20 w-50 h-50 bg-black rounded-full">
            <div className="before absolute top-10 left-20 w-10 h-30 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className=" w-100 h-100  border-gray-100 p-5 rounded-lg shadow-md bg-slate-400 relative">
          <p className="leading-6 mb-10">
            Đây là một WorkPad mã nguồn mở được áp dụng giấy phép MIT và bạn có
            thể truy cập nguồn của chúng tôi tại:
          </p>
          <div>
            <a href="https://github.com/PTPhuoc/WorkPad.git">
              https://github.com/PTPhuoc/WorkPad.git
            </a>
          </div>
          <div className="but absolute bottom-20 right-20 w-50 h-50 bg-black rounded-full">
            <div className="before absolute top-10 left-20 w-10 h-30 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
