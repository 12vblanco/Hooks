import React from "react";
import TextItem from "./TextItem";

const text = [
  {
    image:
      "https://pbs.twimg.com/profile_images/626298192418607105/4KBKHQWi_400x400.jpg",
    title: "This is a whale",
    subtitle: "It is a large mammal",
    price: "£ 167.87 + VAT",
    uom: "per Unit",
    alt: "a picture of a whale",
  },
  {
    image:
      "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
    title: "This is a cat",
    subtitle: "It is a small mammal",
    price: "£ 17.87 + VAT",
    uom: "per Unit",
    alt: "a picture of a cat",
  },
];

const MainComponent = () => {
  return (
    <div>
      {text.map((eachText, i) => (
        <TextItem
          key={i}
          image={eachText.image}
          title={eachText.title}
          subtitle={eachText.subtitle}
          price={eachText.price}
          uom={eachText.uom}
          alt={eachText.alt}
        />
      ))}
    </div>
  );
};

export default MainComponent;
