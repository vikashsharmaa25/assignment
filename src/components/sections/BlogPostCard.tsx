import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  image: any;
  readMoreLink: string;
  darkMode: any;
}

const BlogPostCard = ({ title, image, readMoreLink, darkMode }: BlogPost) => (
  <div
    className={`${darkMode ? "bg-black" : "bg-white"} rounded-lg shadow-lg relative w-[368px] h-[286px]`}
  >
    <Image src={image} alt={title} className="w-full h-full object-fill" />
    <div
      className={`p-4 absolute -bottom-24 ${darkMode ? "bg-black" : "bg-silver"} m-10 rounded-[12px] shadow-2xl`}
    >
      <h3 className="sm:text-lg font-semibold mb-2 text-center">{title}</h3>
      <Link
        href={readMoreLink}
        className="text-green-500 hover:underline text-center flex justify-center items-center"
      >
        Read more →
      </Link>
    </div>
  </div>
);

export default BlogPostCard;
