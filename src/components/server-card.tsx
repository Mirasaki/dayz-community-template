'use server';

import type { frontendServers } from "@/lib/servers";
import { CopyButton } from "./buttons/copy-button-inner";
import { cn } from "@/lib/utils";

export type ServerResponseItem = {
  addr: string;
  gameport: number;
  steamid: string;
  name: string;
  appid: number;
  gamedir: string;
  version: string;
  product: string;
  region: number;
  players: number;
  max_players: number;
  bots: number;
  map: string;
  secure: boolean;
  dedicated: boolean;
  os: string;
  gametype: string;
}

export type ServerResponse = {
  response?: {
    servers?: ServerResponseItem[];
  }
};

export const ServerCard = async ({
  server,
  className,
}: {
  server: typeof frontendServers[0];
  className?: string;
}) => {
  let data;

  try {
    const res = await fetch(`https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${process.env.STEAM_API_KEY}&filter=addr\\${server.ipv4}:${server.steamQueryPort}`, {
      cache: 'no-cache',
    });
    data = await res.json();
  }
  catch (e) {
    data = {
      error: e,
      response: {
        servers: [],
      },
    };
    console.error('Error encountered while fetching server information:', e);
  }

  const serverData = data?.response?.servers?.[0] as ServerResponseItem | undefined;

  if (!serverData) data.error = 'No servers found with that IP address + port. Server is offline, or the Steam API is down.';

  return (
    <div className={cn(
      'max-w-sm p-6 bg-white/5 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700',
      'sm:w-67.5', // Minimal supported resolution of 280px
      className,
    )}>
      <div className='flex items-center gap-2'>
        <div className={cn(
          'h-6 w-6 rounded-full shrink-0',
          serverData ? 'bg-green-400' : 'bg-red-400'
         )} />
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {server.name}
          {!serverData && ' (Offline)'}
        </h3>
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data?.error && <span className='text-red-500'>Error: {data.error}</span>}
        {!data?.error && <>
          Players: {serverData?.players ?? 0}/{serverData?.max_players ?? 0}
          <br />
          Map: {serverData?.map ?? 'Unknown'}
        </>}
      </p>
      <div className='flex items-center'>
        <CopyButton text={`${server.ipv4}:${server.gamePort}`} className='w-full'>
          Copy Server IP
        </CopyButton>
      </div>
    </div>
  );
};