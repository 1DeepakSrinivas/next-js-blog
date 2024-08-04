import Link from "next/link";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="rounded-lg shaodw-md p-4 mb-4 overflow-hidden border-gray-600 cursor-pointer">
      <Link href={"/"}>
        <div>
          <Image
            layout="fill"
            objectFit="cover"
            src={""}
            alt={""}
            className="rounded-t-lg"
          ></Image>
        </div>
        <div className="p-2">
          <h2 className="font-semibold mb-2 overflow-ellipsis">
            Title of the Blog
          </h2>
          <p className="bg-gray-600">This is the description</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
