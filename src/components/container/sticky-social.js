import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { icon: faDiscord, url: "https://discord.com/invite/GuardianLink" },
  { icon: faTelegram, url: "https://t.me/guardiannft" },
  { icon: faTwitter, url: "https://twitter.com/Guardian_NFT" },
];
export const StickySocial = () => {
  return (
    <div className="sticky_social-icons">
      {socialIcons &&
        socialIcons.map(({ icon, url }, index) => (
          <a key={index} target="_blank" className="social__icon" href={url}>
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
    </div>
  );
};
