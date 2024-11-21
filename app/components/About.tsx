import React from 'react';

export default () => {
  return (
    <section className="py-14 bg-white hover:bg-orange-200">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block relative overflow-hidden">
            <img
              src="/about.jpg"
              alt="About us"
              className="w-full h-auto transition-transform duration-300 transform scale-100 hover:scale-105"
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-orange-800 text-3xl font-semibold sm:text-4xl transition-colors duration-300">
              Hãy chọn những hạt cà phê chất lượng và rang vừa đủ để thưởng thức
              hương vị tuyệt vời nhất...
            </p>
            <p className="mt-3 text-gray-600">
              ...Từng bước trong quy trình, từ hạt giống cho đến tách cà phê, đều
              cần được thực hiện với kỹ thuật, sự tỉ mỉ và niềm đam mê. Mỗi quả
              cà phê chín mọng được hái bằng tay và sản xuất trong ngày, mang
              đến chất lượng tối ưu nhất. Mỗi mẻ cà phê được thổi hồn từ tình
              yêu của những người thợ lành nghề, những người tôn trọng khẩu vị
              của khách hàng bằng cách chăm chút cho từng chi tiết trong quá
              trình làm cà phê. Với chúng tôi, không có cà phê đặc biệt, chỉ có
              những con người đặc biệt làm cà phê với tất cả tâm huyết và tận
              tâm.
            </p>
            <a
              href="/Blog"
              className="inline-flex gap-x-1 items-center text-orange-400 hover:text-orange-900 duration-150 font-medium"
            >
              Tìm hiểu thêm về chúng tôi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
