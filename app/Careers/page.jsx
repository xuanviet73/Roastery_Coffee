export default function ContactSection() {
    return (
      <section className="bg-background dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mt-4 mb-4 text-orange-800 text-3xl text-center font-semibold sm:text-4xl transition-colors duration-300">
            PHIẾU TUYỂN DỤNG
          </h2>
          <p className="mb-5 lg:mb-10 font-light text-center text-muted dark:text-gray-400 sm:text-xl">
            Gia nhập đội ngũ của chúng tôi và cùng nhau pha trộn hương vị cuộc sống!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground dark:text-gray-300">
                Họ và tên của bạn
              </label>
              <input
                type="text"
                id="subject"
                className="mb-2 shadow-sm bg-input border border-border text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Họ và tên"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground dark:text-gray-300">
                Email của bạn
              </label>
              <input
                type="email"
                id="email"
                className="mb-2 block p-3 w-full text-sm text-foreground bg-input rounded-lg border border-border shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Email của bạn"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground dark:text-gray-400">
                Mô tả nguyện vọng của bạn 
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-foreground bg-input rounded-lg shadow-sm border border-border focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-3 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Gửi phiếu tuyển dụng
            </button>
          </form>
        </div>
      </section>
    );
  }
  