import { AuthorInfoProps } from "../types";
import Avatar from "./Avatar";
import Heading from "./Heading";

export default function AuthorInfo({
  author,
  className,
}: {
  author: AuthorInfoProps;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`flex flex-col items-center border-0 border-t text-center group ${className}`}
    >
      <Avatar
        image={author.profile_image.medium}
        title={author.name}
        className="mb-4 opacity-90 group-hover:-translate-y-1 group-hover:opacity-100 transition-transform transform-opacity"
      />
      <Heading
        level={2}
        className="justify-center mb-2"
      >{`${author.first_name} ${author.last_name}`}</Heading>
      <p className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
        {author.bio || "..."}
      </p>
      <p className={"text-xs text-gray-500"}>
        <a href="" className={"text-gray-500"}>
          @{author.instagram_username}
        </a>{" "}
        on Instagram
      </p>
    </div>
  );
}
