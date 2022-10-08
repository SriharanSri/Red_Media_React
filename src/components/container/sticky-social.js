import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { icon: faInstagram, url: "https://discord.com/invite/GuardianLink" },
  { icon: faFacebook, url: "https://t.me/guardiannft" },
  { icon: faWhatsapp, url: "https://wa.me/+916380194201" },
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
