import { ReactNode } from "react";
import classNames from "classnames";

import * as Styles from "./Link.styles";

interface ILink {
  to: string;
  className?: string;
  children: ReactNode;
  variant?: "secondary" | undefined;
}

export default function Link({ to, className, children, variant }: ILink) {
  return (
    <Styles.CustomLink
      // as={Link}
      to={to}
      className={classNames(
        variant === "secondary" ? "text-neutral-bi-50 hover:text-primary" : "",
        "relative transition-all duration-[0.3s]",
        className
      )}
    >
      {children}
    </Styles.CustomLink>
  );
}

interface IExternalLinkIcon {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  target?: string;
  rel?: string;
  type?: "icon" | "text";
}

export function ExternalLinkIcon({
  href,
  children,
  className,
  title,
  rel,
  target,
  type = "icon",
}: IExternalLinkIcon) {
  const props: {
    title?: string;
    target?: string;
    rel?: string;
  } = {};

  if (title) {
    props.title = title;
  }

  if (target) {
    props.target = target;
  }

  if (rel) {
    props.rel = rel;
  }

  return (
    <Styles.ExternalLink
      href={href}
      className={classNames(
        type,
        "relative transition-all duration-[0.3s]",
        className
      )}
      {...props}
    >
      {children}
    </Styles.ExternalLink>
  );
}
