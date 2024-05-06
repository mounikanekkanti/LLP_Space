import * as React from "react";

export default function TransactionDetails() {
  return (
    <>
      <div className="div-01">
        <div className="div-02">
          <div className="div-03">
            <div className="div-04">
              <div className="div-05">Transactions Details</div>
              <div className="div-06">Contract ID - 1234</div>
              <div className="div-07">Liberty_RELHR - New Build</div>
              <div className="div-08">Details</div>

              <div className="div-09">
                <div className="div-010">
                  <div className="div-011">
                    <div className="div-012">Transactions Type</div>
                    <div className="div-013">Address Change</div>
                  </div>
                  <div className="div-014">
                    <div className="div-015">Initiated By</div>
                    <div className="div-016">User Name</div>
                  </div>
                </div>
                <div className="div-017">
                  <div className="div-018">
                    <div className="div-019">Document (2)</div>
                    <div className="div-020">Lorem</div>
                    <div className="div-0020">Lorem</div>
                  </div>
                  <div className="div-021">
                    <div className="div-022">Completion Date</div>
                    <div className="div-023">MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-025">
              <div className="div-026">
                <div className="divider"></div>
                <div className="div-027">
                  <div className="div-028">04/10/2024</div>
                  <div className="div-029" />
                  <div className="div-030">
                    <div className="div-031">
                      <div className="div-032">Verizon</div>
                      <div className="div-033">Approved</div>
                    </div>
                    <div className="div-034">Completed</div>
                  </div>
                </div>
                <div className="div-035">
                  <div className="div-036">04/08/2024</div>
                  <div className="div-037" />
                  <div className="div-038">
                    <div className="div-039">
                      <div className="div-040">Verizon</div>
                      <div className="div-041">
                        Estimted time to complete - 2 working days
                      </div>
                    </div>
                    <div className="div-042">In progress</div>
                  </div>
                </div>
                <div className="div-043">
                  <div className="div-044">04/07/2024</div>
                  <div className="div-045" />
                  <div className="div-046">
                    <div className="div-047">
                      <div className="div-048">User Name</div>
                      <div className="div-049">
                        Updated the input and updated the required documents
                      </div>
                    </div>
                    <div className="div-050">In progress</div>
                  </div>
                </div>
                <div className="div-051">
                  <div className="div-052">04/05/2024</div>
                  <div className="div-053" />
                  <div className="div-054">
                    <div className="div-055">
                      <div className="div-056">Verizon</div>
                      <div className="div-057">In progress</div>
                    </div>
                    <div className="div-058">
                      Comments: Require more information Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.{" "}
                    </div>
                  </div>
                </div>
                <div className="div-059">
                  <div className="div-060">04/04/2024</div>
                  <div className="div-061" />
                  <div className="div-062">
                    <div className="div-063">
                      <div className="div-064">User Name</div>
                      <div className="div-065">
                        Requested for address change
                      </div>
                    </div>
                    <div className="div-066">Initiated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .div-01 {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-02 {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-02 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-03 {
          border-radius: 8px;
          background-color: var(--vds-background-primary-light, #fff);
          display: flex;
          width: 1000px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-03 {
            margin: 40px 0;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: end;
        }
        @media (max-width: 991px) {
          .img {
            margin-right: 10px;
          }
        }
        .div-04 {
          display: flex;
          margin-top: 14px;
          flex-direction: column;
          color: #000;
          padding: 0 14px 0 24px;
        }
        @media (max-width: 991px) {
          .div-04 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-05 {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          font-size: 32px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .div-05 {
            max-width: 100%;
          }
        }
        .div-06 {
          margin-top: 24px;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          padding-bottom: 10px;
        }
        @media (max-width: 991px) {
          .div-06 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-07 {
          letter-spacing: 0.36px;

          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-07 {
            max-width: 100%;
          }
        }
        .div-08 {
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin-top: 38px;
          border-bottom: 1px solid #000;
          padding-bottom: 6px;
        }
        @media (max-width: 991px) {
          .div-08 {
            max-width: 100%;
          }
        }
        .img-2 {
          object-fit: auto;
          object-position: center;
          width: 878px;
          fill: #d9d9d9;
          stroke-width: 1px;
          stroke: #000;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          margin-top: 20px;
          max-width: 100%;
        }
        .div-09 {
          display: flex;
          width: 774px;
          max-width: 100%;
          align-items: start;
          gap: 120px;
          margin: 28px 0 0 0px;
          padding: 0 15px;
        }
        @media (max-width: 991px) {
          .div-09 {
            flex-wrap: wrap;
          }
        }
        .div-010 {
          display: flex;
          gap: 120px;
          justify-content: space-between;
        }
        .div-011 {
          display: flex;
          flex-direction: column;
        }
        .div-012 {
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-013 {
          margin-top: 18px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-014 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-015 {
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-016 {
          margin-top: 18px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-017 {
          display: flex;
          gap: 120px;
          justify-content: space-between;
        }
        .div-018 {
          display: flex;
          flex-direction: column;
        }
        .div-019 {
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-020 {
          margin-top: 18px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-0020 {
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-021 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-022 {
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-023 {
          margin-top: 18px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-024 {
          align-self: center;
          margin-top: 6px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-025 {
          border-radius: 6px;
          background-color: #f6f6f6;
          align-self: center;
          display: flex;
          margin-top: 21px;
          width: 895px;
          max-width: 100%;
          align-items: flex-start;
          gap: 20px;
          padding: 3px 2px 18px 30px;
        }
        @media (max-width: 991px) {
          .div-025 {
            flex-wrap: wrap;
            padding-left: 20px;
          }
        }
        .div-026 {
          position: relative;
          align-self: end;
          display: flex;
          margin-top: 37px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .div-026 {
            max-width: 100%;
          }
        }
        .div-027 {
          display: flex;
          align-items: center;
          gap: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-027 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-028 {
          color: #000;
          align-self: stretch;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin: auto 0;
        }
        .div-029 {
          stroke-width: 1px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          border-radius: 50%;
          align-self: stretch;
          width: 17px;
          height: 17px;
          margin: auto 0;
        }
        .div-030 {
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 5px 12px 15px;
          width: 624px;
        }
        @media (max-width: 991px) {
          .div-030 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-031 {
          display: flex;
          margin-top: 11px;
          flex-direction: column;
          font-size: 14px;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-031 {
            white-space: initial;
          }
        }
        .div-032 {
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-033 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 12px;
        }
        .div-034 {
          border-radius: 20px;
          background-color: rgba(0, 119, 180, 1);
          color: #fff;
          text-align: right;
          justify-content: center;
          padding: 5px 11px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-034 {
            white-space: initial;
          }
        }
        .div-035 {
          display: flex;
          margin-top: 16px;
          align-items: center;
          gap: 18px;
        }
        @media (max-width: 991px) {
          .div-035 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-036 {
          color: #000;
          align-self: stretch;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin: auto 0;
        }
        .div-037 {
          z-index: 9;
          stroke-width: 1px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          border-radius: 50%;
          align-self: stretch;
          width: 17px;
          height: 17px;
          margin: auto 0;
        }
        .div-038 {
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 5px 12px 15px;
          width: 624px;
        }
        @media (max-width: 991px) {
          .div-038 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-039 {
          display: flex;
          margin-top: 11px;
          flex-direction: column;
          font-size: 14px;
          color: #000;
        }
        .div-040 {
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-041 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 12px;
        }
        .div-042 {
          border-radius: 20px;
          background-color: rgba(0, 131, 49, 1);
          color: #fff;
          text-align: right;
          justify-content: center;
          padding: 5px 11px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-043 {
          display: flex;
          margin-top: 16px;
          align-items: center;
          gap: 19px;
        }
        @media (max-width: 991px) {
          .div-043 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-044 {
          color: #000;
          align-self: stretch;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin: auto 0;
        }
        .div-045 {
          z-index: 9;
          stroke-width: 1px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          border-radius: 50%;
          align-self: stretch;
          width: 17px;
          height: 17px;
          margin: auto 0;
        }
        .div-046 {
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 5px 12px 15px;
          width: 624px;
        }
        @media (max-width: 991px) {
          .div-046 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-047 {
          display: flex;
          margin-top: 11px;
          flex-direction: column;
          font-size: 14px;
          color: #000;
        }
        .div-048 {
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-049 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 12px;
        }
        .div-050 {
          border-radius: 20px;
          background-color: rgba(0, 131, 49, 1);
          color: #fff;
          text-align: right;
          justify-content: center;
          padding: 5px 11px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-051 {
          display: flex;
          margin-top: 16px;
          gap: 18px;
        }
        @media (max-width: 991px) {
          .div-051 {
            flex-wrap: wrap;
          }
        }
        .div-052 {
          color: #000;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin: auto 0;
        }
        .div-053 {
          z-index: 9;
          stroke-width: 1px;
          background-color: #fff;
          border-radius: 50%;
          align-self: start;
          margin-top: 64px;
          width: 17px;
        }
        .div-054 {
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          padding: 5px 15px 27px;
          width: 624px;
          height: 114px;
        }
        @media (max-width: 991px) {
          .div-054 {
            max-width: 100%;
          }
        }
        .div-055 {
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-055 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-056 {
          color: #000;
          margin-top: 11px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-057 {
          border-radius: 20px;
          background-color: rgba(0, 131, 49, 1);
          color: #fff;
          text-align: right;
          justify-content: center;
          padding: 5px 11px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-058 {
          color: #000;
          margin-top: 15px;
          font: 400 14px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-058 {
            max-width: 100%;
          }
        }
        .div-059 {
          display: flex;
          margin-top: 16px;
          align-items: center;
          gap: 18px;
          color: #000;
        }
        @media (max-width: 991px) {
          .div-059 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-060 {
          align-self: stretch;
          font-size: 14px;
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
          margin: auto 0;
        }
        .div-061 {
          stroke-width: 1px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          border-radius: 50%;
          align-self: stretch;
          width: 17px;
          height: 17px;
          margin: auto 0;
        }
        .div-062 {
          border-radius: 7px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 1px;
          align-self: stretch;
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 5px 11px 15px;
          width: 633px;
          height: 68px;
        }
        @media (max-width: 991px) {
          .div-062 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-063 {
          display: flex;
          margin-top: 11px;
          flex-direction: column;
          font-size: 14px;
        }
        .div-064 {
          font-family: "VerizonNHGDS-Bold";
          font-weight: 700;
        }
        .div-065 {
          font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 400;
          margin-top: 12px;
        }
        .div-066 {
          border-radius: 20px;
          background-color: rgba(254, 214, 14, 1);
          white-space: nowrap;
          text-align: right;
          justify-content: center;
          padding: 6px 10px;
          font: 400 12px Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-066 {
            white-space: initial;
          }
        }
        .img-3 {
          aspect-ratio: 0.01;
          object-fit: auto;
          object-position: center;
          width: 4px;
          fill: #d9d9d9;
          stroke-width: 4px;
          stroke: var(--DISABLE-TEXT, #a7a7a7);
          border-color: rgba(167, 167, 167, 1);
          border-style: solid;
          border-width: 4px;
          align-self: start;
        }
        .divider {
          border-left: 1px solid #000;
          height: 81%;
          width: 2px;
          position: absolute;
          left: 111.5px;
          margin-top: 48px;
        }
      `}</style>
    </>
  );
}
