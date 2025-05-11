"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export const iconMap = {
  github: faGithub,
  linkedin: faLinkedin,
  email: faEnvelope,
  react: faReact
} as const;

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({
  name,
  className = "",
}: IconProps) {

  return (
    <FontAwesomeIcon
      icon={iconMap[name] as IconProp}
      className={`aspect-square ${className}`}
    />
  );
}
