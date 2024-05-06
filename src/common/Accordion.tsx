import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CustomAccordionProps {
  title: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

const AccordionComponent: React.FC<CustomAccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
    const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "32px" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            <header className="security-header">
              <div className="title">{title}</div>
            </header>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
      <style>{`
        .title {
            font-family: "VerizonNHGDS-Bold";
            font-size: 22px;
        }
        .MuiAccordion-root {
            border-bottom:1px solid #dddfdf;
            box-shadow: none;
            width: 100%;
        }
        .MuiAccordionSummary-root {
            padding: 0;
        }
        .MuiAccordionDetails-root {
            padding: 8px 16px 16px 0;
        }
     `}</style>
    </>
  );
};

export default AccordionComponent;
