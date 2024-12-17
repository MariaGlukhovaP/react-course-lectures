"use client";

import { Codecs } from "./codecs";
import { useGetCodecsByHeadphonesIdQuery } from "../../redux/services/api";

export const CodecsContainer = ({ headphoneId }) => {
  const { data, isLoading } = useGetCodecsByHeadphonesIdQuery(headphoneId);

  if (isLoading) {
    return "...loading";
  }

  if (!data.length) {
    return null;
  }

  return <Codecs codecs={data} />;
};
