import { VideoServiceProxy } from "./services/VideoServiceProxy";

function main() {
  const videoService = new VideoServiceProxy();

  console.log(videoService.downloadVideo("http://example.com/video1"));
  console.log(videoService.downloadVideo("http://example.com/video2"));
  
  // Downloading the same video again to demonstrate caching
  console.log(videoService.downloadVideo("http://example.com/video1"));
}

main();