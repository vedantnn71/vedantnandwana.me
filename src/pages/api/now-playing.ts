import { getNowPlaying } from '@/lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  
  res.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
}
