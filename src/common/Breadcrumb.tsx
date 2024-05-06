import * as React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index}>
          {index === items.length - 1 ? (
            <Typography color="text.primary">{item.label}</Typography>
          ) : (
            <Link underline="hover" color="inherit" href={item.href}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </Breadcrumbs>
     <style>{`
     ol {
        font-size: 12px;
     }
     .MuiTypography-root {
        font-size: 12px;
     }
     .MuiLink-root {
        color: #000;
     }
     li p {
        font-family: VerizonNHGDS-Bold !important;
     }
     .MuiBreadcrumbs-separator {
        margin-left: 4px;
        margin-right: 4px;
     }
     `}</style>
     </>
  );
};

export default Breadcrumb;