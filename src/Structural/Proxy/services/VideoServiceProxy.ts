import { VideoService } from "../interfaces/VideoService";
import { RealVideoService } from "./RealVideoService";

export class VideoServiceProxy implements VideoService {
  private realVideoService: RealVideoService;
  private cache: Map<string, string>;

  constructor() {
    this.realVideoService = new RealVideoService();
    this.cache = new Map();
  }

  downloadVideo(url: string): string {
    if (this.cache.has(url)) {
      console.log(`Returning cached video for ${url}`);
      return this.cache.get(url) as string;
    }
    
    console.log(`Cache miss for ${url}. Delegating to RealVideoService.`);
    const videoContent = this.realVideoService.downloadVideo(url);
    this.cache.set(url, videoContent);
    return videoContent;
  }
}