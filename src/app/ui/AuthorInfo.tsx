import { AuthorProps } from "../types";
import Avatar from "./Avatar";
import Heading from "./Heading";

export default function AuthorInfo({
  author,
  className,
}: {
  author: AuthorProps;
  className?: string;
}) {
  const classes = {
    root: `flex flex-col items-center text-center group ${className}`,
    avatar: `mb-4 opacity-90 group-hover:-translate-y-1 group-hover:opacity-100 transition-transform transform-opacity`,
  };

  const Bio = ({ copy }: { copy: string }) => {
    return (
      <p className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
        {copy}
      </p>
    );
  };

  const InstagramLink = ({ name }: { name: string }) => {
    const instagramUrl = `https://instagram.com/${name}`;
    return (
      <p className={"text-xs text-gray-500 my-5"}>
        <a
          href={instagramUrl}
          target="_blank"
          className={"text-gray-500"}
          aria-label={"Instagram account link opens in new tab window."}
        >
          @{name}
        </a>{" "}
        on Instagram
      </p>
    );
  };

  const { profile_image, name, bio, instagram_username } = author;

  return (
    <div className={classes.root}>
      <Avatar
        image={profile_image.medium}
        title={name}
        className={classes.avatar}
      />
      <Heading level={2} title={name} className="text-xl mb-2" />
      {bio && <Bio copy={bio} />}
      {instagram_username && <InstagramLink name={instagram_username} />}
    </div>
  );
}
