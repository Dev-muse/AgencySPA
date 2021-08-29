import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Price = () => {
  const data = {
    starter: {
      type: "Starter Plan",
      price: 997,
      features: [
        "Unlimited Design Requests",
        "Unlimited Design Revisions",
        "Production Ready UI UX",
        "Standard Support",
        "7-10 Day Turnaround",
        "One Project At A Time",
        "Cancel Anytime",
      ],
      desc: "Affordable & practical. Ideal for simple landing pages, one-page websites and on-going website updates & fixes.",
    },
    scaler: {
      type: "Scaler Plan",
      price: 1997,
      features: [
        "Unlimited Design Requests",
        "Unlimited Design Revisions",
        "Production Ready UI UX",
        "Priority Support",
        "3-7 Day Turnaround",
        "Concurrent projects",
        "Cancel Anytime",
        "Monthly Planning Call",
      ],
      desc: "You'll feel the difference. Great for multi-page sites, advanced landing pages, CMS sites, blogs, membership sites & app dashboards.",
    },
  };
  return (
    <Container id='pricing'>
      <PriceCard
        price={data.starter.price}
        type={data.starter.type}
        list={data.starter.features}
        desc={data.starter.desc}
      />
      <PriceCard
        price={data.scaler.price}
        type={data.scaler.type}
        list={data.scaler.features}
        desc={data.scaler.desc}
      />
    </Container>
  );
};

export default Price;
