import { VideoService } from "../interfaces/VideoService";

export class RealVideoService implements VideoService {
  downloadVideo(url: string): string {
    console.log(`Downloading video from ${url}...`);
    // Simulate downloading with a message
    return `Video content from ${url}`;
  }
}