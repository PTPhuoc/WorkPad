import React from 'react';

export default function NoteEdit() {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#FFEAAA] h-[75px] pl-[20%] pr-[20%]">
        <div className='flex-col bg-[#D9D9D9] h-[75px] w-[350px] -ml-[307px]'>
          <div className='flex-col w-[100px] h-[75px] bg-[#EEEEEE]'>
            <button className='mt-3 ml-[25px]'>
              <img className='w-[40px] h-auto' src="./Icon/arrow-left-solid.svg" alt="mũi tên" />
            </button>
          </div>
        </div>
        <input className='mr-[650px] bg-[#FFEAAA]  font-bold hover:bg-[#f8f86c]' type="text" />
        <button className=''>
          <img className='w-[40px] h-auto' src="./Icon/star-solid.svg" alt="yêu thích" />
        </button>
        <button className=''>
          <img className='w-[30px] h-auto m-5' src="./Icon/trash-solid.svg" alt="Thùng rác" />
        </button>
        <div className='flex flex-col -mr-80 '>
          <div className='w-[100px] h-[75px] bg-[#FFFFFF] rounded-s-full'>
            <button >
              <img className='w-[40px] h-auto mt-5 ml-8' src="./Icon/circle-user-solid.svg" alt="account" />
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center bg-[#EEEEEE] h-[75px] pl-[20%] pr-[20%]'>
        <div className='flex bg-[#EDE700] w-[350px] h-[75px] items-center -ml-[307px] '>
          <input className='ml-6 rounded-2xl' type="text" />
          <button className='ml-auto mr-6'>
            <img className='w-[30px]' src="./Icon/magnifying-glass-solid.svg" alt="Tìm kiếm" />
          </button>
        </div>
        <h1> *Nơi chứa công cụ của trình soạn thảo văn bản*</h1>
      </div>
      <div >
        <div class='flex flex-col h-[1024px] w-[347px] bg-[#FFEAAA] '>
          <div class='flex flex-col w-[320px] h-[80px] bg-white rounded-2xl ml-3 mt-10 '>
            <button className='text-center mt-4'>Tiêu đề note</button>
          </div>
          <div class='flex flex-col w-[320px] h-[80px] bg-white rounded-2xl ml-3 mt-10  '>
            <button className='text-center mt-4 font-bold'>Tiêu đề note</button>
          </div>
          <div class='flex flex-col w-[320px] h-[80px] bg-white rounded-2xl ml-3 mt-10  '>
            <button>
              <img className='w-[40px] mt-5 ml-[130px]' src="./Icon/plus-solid.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
