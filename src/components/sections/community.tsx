import Image from "next/image";

const communityItems = [
  {
    icon: "/communityIcon/comIcon1.svg",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/communityIcon/comIcon2.svg",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/communityIcon/comIcon3.svg",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Community({ darkMode }: any) {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
        <h2
          className={`font-semibold text-xl sm:text-3xl md:text-4xl ${darkMode ? "text-white" : "text-d_Grey"} text-center max-w-2xl`}
        >
          Manage your entire community in a single system
        </h2>
        <p className="font-light text-sm sm:text-base text-slate-500 text-center">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-20">
        {communityItems.map((item, index) => (
          <div
            key={index}
            className="w-[299px] rounded-xl shadow p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg"
          >
            <Image
              src={item.icon}
              width={65}
              height={65}
              alt={`Community Icon ${index + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-semibold ${darkMode ? "text-white" : "text-d_Grey"} text-center`}
            >
              {item.title}
            </h3>
            <p className="text-sm font-light text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
