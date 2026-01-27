import React from 'react'
import VideoCard from '@/components/VideoCard'
import prisma from "@/lib/prisma"

export default async function Home() {
  const videos = await prisma.video.findMany({
    orderBy: { createdAt: "desc" }
  })

  const mappedVideos = videos.map((video) => ({
    ...video,
    description: video.description || "",
    originalSize: Number(video.originalSize),
    compressedSize: Number(video.compressedSize)
  }))

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Videos</h1>
      {mappedVideos.length === 0 ? (
        <div className="text-center text-lg text-muted-foreground py-8">
          No videos available
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            mappedVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))
          }
        </div>
      )}
    </div>
  );
}