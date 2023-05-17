import React from "react";
import Link from "next/link";
import styles from "./breadcrumb.module.scss";

interface BreadcrumbProps {
  crumbs: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <nav className={styles.breadcrumb}>
      {crumbs.map((crumb, i) => (
        <span key={i}>
          <Link href={crumb.href}>{crumb.label}</Link>
          {i < crumbs.length - 1 && <Chevron />}
        </span>
      ))}
    </nav>
  );
};

const Chevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="8"
      data-testid="chevron"
    >
      <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
    </svg>
  );
};

export default Breadcrumb;
