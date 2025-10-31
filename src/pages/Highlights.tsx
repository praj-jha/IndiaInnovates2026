import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: "pre-launch" | "dialogue";
}

// Placeholder data - Replace with your actual media URLs
const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "image",
    title: "Pre-Launch Event 2024",
    description: "Exclusive glimpse of our pre-launch event showcasing innovation",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/iil_flk4xg.avif",
    category: "pre-launch"
  },
  {
    id: "2",
    type: "video",
    title: "Leadership Dialogue: Future of Innovation",
    description: "Expert panel discussing the future landscape of innovation in India",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    category: "dialogue"
  },
  {
    id: "3",
    type: "image",
    title: "Innovation Showcase",
    description: "Students presenting groundbreaking projects",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/iil_flk4xg.avif",
    category: "pre-launch"
  },
  {
    id: "4",
    type: "video",
    title: "Technology Leaders Round Table",
    description: "Industry leaders sharing insights on emerging technologies",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    category: "dialogue"
  },
  {
    id: "5",
    type: "image",
    title: "Networking Session",
    description: "Delegates connecting and collaborating",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/iil_flk4xg.avif",
    category: "pre-launch"
  },
  {
    id: "6",
    type: "video",
    title: "Keynote: India's Innovation Journey",
    description: "Vision for India 2047 and the role of innovation",
    thumbnail: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto,w_600/v1761005444/iil_flk4xg.avif",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    category: "dialogue"
  },
];

const Highlights = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "pre-launch" | "dialogue">("all");

  const filteredMedia = mediaItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <>
      <Helmet>
        <title>Highlights - India Innovates 2026</title>
        <meta
          name="description"
          content="Explore highlights, photos, and videos from India Innovates pre-launch events and leadership dialogues."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Event Highlights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Relive the moments from our pre-launch events and inspiring dialogues
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === "all"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("pre-launch")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === "pre-launch"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                }`}
            >
              Pre-Launch Events
            </button>
            <button
              onClick={() => setFilter("dialogue")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === "dialogue"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                }`}
            >
              Dialogues
            </button>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => setSelectedMedia(item)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                        <div className="bg-purple-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                        {item.type === "video" ? "Video" : "Photo"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-purple-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No media found in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* Media Viewer Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedMedia && (
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedMedia.type === "video" ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-full"
                    allowFullScreen
                    title={selectedMedia.title}
                  />
                </div>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full h-auto"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600">{selectedMedia.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Highlights;
