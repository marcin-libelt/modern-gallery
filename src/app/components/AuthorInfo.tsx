import { AuthorProps } from "../types";
import { Avatar, Heading } from "../components";

interface AuthorInfoProps extends AuthorProps {
  className?: string;
}

const AuthorInfo = ({
  profile_image,
  name,
  bio,
  instagram_username,
  className,
}: AuthorInfoProps) => {
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
      <p className={"text-xs text-secondary my-5"}>
        <a
          href={instagramUrl}
          target="_blank"
          className={"text-secondary"}
          aria-label={"Instagram account link opens in new tab window."}
        >
          @{name}
        </a>{" "}
        on Instagram
      </p>
    );
  };

  return (
    <div className={classes.root}>
      <Avatar
        image={profile_image.medium}
        title={name}
        className={classes.avatar}
      />
      <Heading level={2} title={name} className="mb-2" />
      {bio && <Bio copy={bio} />}
      {instagram_username && <InstagramLink name={instagram_username} />}
    </div>
  );
};
AuthorInfo.displayName = "AuthorInfo";
export default AuthorInfo;
