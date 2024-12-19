import { Suspense } from "react";
import { HeadphonesTabsContainer } from "../headphones-tabs/headphones-tabs-container";
import { getHeadphones } from "../../services/get-headphones";

export const HeadphonesLayout = async ({ children }) => {
  await getHeadphones();

  return (
    <div>
      <Suspense fallback={<div>...loading HeadphonesTabsContainer</div>}>
        <HeadphonesTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
