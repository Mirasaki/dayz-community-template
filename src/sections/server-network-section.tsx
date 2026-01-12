import { config } from '../../config';
import { cn } from '@/lib/utils';
import WorldSVG from '@/components/svgs/world';
import { frontendServers } from '@/lib/servers';
import { ServerCard } from "@/components/server-card";

const ServerNetworkSection = () => {
  return (
    <section className={cn(
      'py-8 md:py-16 lg:py-28 px-1 sm:px-2 md:px-4 w-full bg-slate-900',
      // 'bg-[url("/images/globe.png")] bg-center bg-no-repeat bg-cover',
      'relative z-10 overflow-hidden'
     )} id='servers'>

      <WorldSVG className={cn(
        'w-auto h-[85%] max-w-full mx-auto absolute z-[-1] p-4',
        'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        'opacity-75',
      )} />
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {config.pages.home.sections.network.title}
      </h2>

      <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400 text-center max-w-xl mx-auto">
        {config.pages.home.sections.network.description}
      </p>

      <div className='flex flex-wrap gap-2 items-center justify-center'>
        {frontendServers.map((server, index) => (
          <ServerCard key={index} server={server} />
        ))}
      </div>
    </section>
  );
};

export default ServerNetworkSection;
