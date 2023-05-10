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
          {i < crumbs.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
