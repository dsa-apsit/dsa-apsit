"use client";

import { useEffect, useState } from "react";

import axiosInstance from "@/services/axios";
import HighlightComponent from "./HighlightComponent";
import LoadingPage from "@/app/loading";

export type HighlightType = {
  _id: string;
  title: string;
  img1Url: string;
  img2Url: string;
  img3Url: string;
};

const HighlightSection = () => {
  const [data, setData] = useState<HighlightType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const { data }: { data: { highlights: HighlightType[] } } =
          await axiosInstance.get("/highlights");

        setData(data.highlights);
      } catch (error) {
        console.error("Failed to fetch highlights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return <HighlightComponent data={data} />;
};

export default HighlightSection;