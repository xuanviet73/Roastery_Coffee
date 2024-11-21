export default () => {

    const team = [
        {
            avatar: "./lam.jpg",
            name: "Thanh Lâm",
            title: "Staff"
        },
        {
            avatar: "./my.jpg",
            name: "Trà My",
            title: "Founder"
        },
        {
            avatar: "./duong.jpg",
            name: "Dương Nguyễn",
            title: "Staff"
        },
    ]

    return (
        <section className="py-5 bg-white hover:bg-orange-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-orange-800 text-3xl font-semibold sm:text-4xl">
                        Nhân viên
                    </h3>
                    <p className="text-gray-600 mt-3">
                    Chào mừng đến với Khang Roastery! Chúng tôi là đội ngũ đam mê cà phê, luôn nỗ lực để mang đến cho bạn những trải nghiệm cà phê tuyệt vời nhất. Hãy cùng chúng tôi khám phá thế giới hương vị đầy cảm hứng!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold text-center">{item.name}</h4>
                                        <p className="text-orange-800 text-center">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}