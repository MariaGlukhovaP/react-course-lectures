import { useMemo, useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";

export const HeadphonesPage = ({ title }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphones[0].id);

  const activeHeadphone = headphones.find(({ id }) => id === activeHeadphoneId);

  const totalPrice = useMemo(
    () =>
      headphones.reduce((acc, { price }) => {
        console.log("calculate");
        return acc + price;
      }, 0),
    []
  );

  console.log(totalPrice);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }
    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
          //key={activeHeadphone.id} происходит перемаунт и срабатывание эффектов
        />
      )}
      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
          //key={activeHeadphone.id} происходит перемаунт и срабатывание эффектов
        />
      )}
      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
          //key={activeHeadphone.id} происходит перемаунт и срабатывание эффектов
        />
      )}
    </div>
  );
};
