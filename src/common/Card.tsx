import * as React from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";

interface MyComponentProps {
  title: string;
  description: string;
  imageSrc: string;
  onArrowClick: () => void;
}

function CardComponent({
  title,
  description,
  imageSrc,
  onArrowClick,
}: MyComponentProps) {
  return (
    <>
      <Card className="card">
        <CardContent>
          <Typography variant="h5" component="div" className="title">
            {title}
          </Typography>
          <Typography variant="body2" className="description">
            {description}
          </Typography>
          <img className="icons" src={imageSrc}></img>
        </CardContent>
        <CardActions>
          <img
            loading="lazy"
            src="/images/card-arrow.svg"
            className="arrow-img"
            onClick={onArrowClick}
            alt="arrow"
          />
        </CardActions>
      </Card>
      <style>{`
        .card {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          background-color: var(--vds-background-secondary-light, #f6f6f6);
          display: flex;
          max-width: 460px;
          flex-direction: column;
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          padding: 24px;
          position: relative;
          box-shadow: none;
          width: 460px;
        }
        .title {
          font-feature-settings: "clig" off, "liga" off;
          font-family: "VerizonNHGDS-Bold";
          font-size: 20px;
          font-weight: 700;
        }
        .description {
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 8px;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
          margin-top: 32px;
        }
        .icons {
            position: absolute;
            right: 12px;
            top: 12px;
        }
        .MuiCardContent-root {
            display: grid;
            padding: 0;
        }
        .MuiCardActions-root {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: end;
          margin-top: 32px;
          gap: 0px;
          width: 20px;
          height: 20px;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default CardComponent;
