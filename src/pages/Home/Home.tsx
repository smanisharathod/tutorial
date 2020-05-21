import React from "react";
import { Service, Package, Task, Block } from "../../components";

const Home = () => {
  const services = [
    {
      icon: "flaticon-family",
      title: "Family Task",
      message:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      icon: "flaticon-research",
      title: "Online Research",
      message:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      icon: "flaticon-checklist",
      title: "Management Task",
      message:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  const packages = [
    {
      amount: 49,
      title: "Small Plan",
      instructions: [
        {
          text: "Upto 50 hours Monthly",
        },
        {
          text: "2 Assistants available",
        },
      ],
    },
    {
      amount: 79,
      title: "Startup Plan",
      instructions: [
        {
          text: "Upto 50 hours Monthly",
        },
        {
          text: "2 Assistants available",
        },
      ],
    },
  ];

  const tasks = [
    {
      num: 1,
      title: "The Task",
      message:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];
  return (
    <>
      <Block
        heading="Virtual Assistant Services"
        caption="Our Services &amp; Offers"
      >
        {services.map((service) => (
          <Service
            key={service.icon}
            icon={service.icon}
            title={service.title}
            message={service.message}
          />
        ))}
      </Block>
      <Block heading="Price &amp; Plans" caption="Affordable Packages">
        {packages.map((pack) => (
          <Package
            amount={pack.amount}
            title={pack.title}
            instructions={pack.instructions}
          />
        ))}
      </Block>
      <Block heading="Proceduce" caption="How It Works">
        {tasks.map((task) => (
          <Task num={task.num} title={task.title} message={task.message} />
        ))}
      </Block>
    </>
  );
};

export default Home;
