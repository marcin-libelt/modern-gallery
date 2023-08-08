import { AuthorProps } from "../types";
import { Avatar, Heading } from "../components";

export default function AuthorInfo({
  author,
  className,
}: {
  author: AuthorProps;
  className?: string;
}) {
  const classes = {
    root: `flex flex-col items-center text-center group ${className}`,
    avatar: `mb-4`,
  };

  const Bio = ({ copy }: { copy: string }) => {
    return <p className="text-sm">{copy}</p>;
  };

  const InstagramLink = ({ name }: { name: string }) => {
    const instagramUrl = `https://instagram.com/${name}`;
    return (
      <p className={"text-xs text-gray-400 my-5"}>
        <a
          href={instagramUrl}
          target="_blank"
          className={"text-gray-400"}
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
