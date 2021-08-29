import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Price = () => {
  const data = {
    starter: [
      "Unlimited Design Requests",
      "Unlimited Design Revisions",
      "Production Ready UI UX",
      "Standard Support",
      "7-10 Day Turnaround",
      "One Project At A Time",
      "Cancel Anytime",
    ],
    scaler: [
      "Unlimited Design Requests",
      "Unlimited Design Revisions",
      "Production Ready UI UX",
      "Priority Support",
      "3-7 Day Turnaround",
      "Concurrent projects",
      "Cancel Anytime",
      "Monthly Planning Call",
    ],
    startDes:
      "Affordable & practical. Ideal for simple landing pages, one-page websites and on-going website updates & fixes.",
    scalerDes:
      "You'll feel the difference. Great for multi-page sites, advanced landing pages, CMS sites, blogs, membership sites & app dashboards.",
  };
  return (
    <Container>
      <PriceCard price='997' type='Starter Plan' list={data.starter} desc={data.startDes} />
      <PriceCard price='1997' type='Scaler Plan' list={data.scaler} desc={data.scalerDes} />
    </Container>
  );
};

export default Price;
