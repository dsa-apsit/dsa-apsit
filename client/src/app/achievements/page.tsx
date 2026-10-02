"use client";

import { useEffect, useState } from "react";

import { Desktop } from "@/components/achievements/Desktop";
import { Mobile } from "@/components/achievements/Mobile";
import Card from "@/components/achievements/Card";
import axiosInstance from "@/services/axios";
import LoadingPage from "../loading";

type Achievement = {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
};

const AchievementsPage = () => {
  const [content, setContent] = useState<
    {
      name: string;
      description: string;
      content: React.ReactNode;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const { data } = await axiosInstance.get("/achievements");

        if (data.achievements.length === 0) {
          setContent([]);
          return;
        }

        const formattedContent = data.achievements.map((item: Achievement) => ({
          name: item.title,
          description: item.description,
          content: <Card imgUrl={item.imgUrl} alt={item.title} />,
        }));

        setContent(formattedContent);
      } catch (error) {
        console.error("Failed to fetch achievements:", error);
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading || content.length === 0) {
    return <LoadingPage />;
  }

  return (
    <section className="h-screen w-screen bg-zinc-950">
      <div className="hidden md:flex w-full h-full justify-center items-center">
        <Desktop content={content} />
      </div>

      <div className="flex md:hidden w-full h-full justify-center items-center">
        <Mobile content={content} />
      </div>
    </section>
  );
};

export default AchievementsPage;
