import type { Config } from './src/lib/config.types';

export const config: Config = {
  runtime: 'nodejs',
  themeColor: "#821F14",
  logoURL: "/images/logo.png",
  site: {
    url: "https://www.warzdayz.com",
    title: "WarZ DayZ",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for WarZ DayZ",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | WarZ DayZ",
      description: "WarZ is a modded project that takes DayZ into the modern era with modern rifles, fast-paced action, and high rewards, while maintaining much of its original flair.",
      sections: {
        network: {
          title: "Server Network",
          description: "Our DayZ servers are hosted in Europe and are maintained by our dedicated team of developers and system administrators.",
        },
        about: {
          title: "About Us",
          description: "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.png",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.png",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description: "Check out the top players on our servers and see how you compare. Can you make it to the top of the leaderboard?",
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            'Discord': "https://discord.gg/warzdayz",
            'Email': "mailto:admin@warzdayz.com",
          },
        },
      },
    },
  },
  hero: {
    title: "We listen, we learn, we deliver.",
    description: "Our DayZ Community is built on the principles of transparency, integrity, and trust. We are committed to providing the best experience for our players. Wether you are a seasoned veteran or a new player, we have a place for you.",
    background: {
      color: 'rgb(21, 21, 21)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join us today!",
      href: "https://discord.gg/warzdayz",
    },
  },
  servers: [
    {
      name: 'WarZ 3PP',
      ipv4: '95.156.230.61',
      gamePort: 2402,
      steamQueryPort: 27017,
      cftoolsApiId: '1519aeef-ac60-4d87-8c05-f607d6d68e4a',
    },
    {
      name: 'WarZ 1PP',
      ipv4: '95.156.230.61',
      gamePort: 2502,
      steamQueryPort: 27018,
      cftoolsApiId: '722ab0c9-fdb3-4812-9516-25cc552d3c35',
    },
    {
      name: 'WarZ Deathmatch',
      ipv4: '109.230.227.167',
      gamePort: 2902 ,
      steamQueryPort: 27022,
      cftoolsApiId: '3d168194-9da7-4810-8675-4ac8ff02b8a7',
    },
    {
      name: 'WarZ Training',
      ipv4: '109.230.227.167',
      gamePort: 3002,
      steamQueryPort: 27023,
      cftoolsApiId: 'a07fff87-b842-4d6e-968b-8d83a28d5a72',
    }
  ],
  cftools: {
    leaderboard: {
      enabled: true,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },
  footer: {
    trademarkNotice: "WarZ DayZ operates monetized servers authorized by Bohemia Interactive, in accordance with the DayZ monetization policy. All rights to DayZ, including trademarks and game content, are owned by Bohemia Interactive a.s. ",
    brandingName: "WarZ DayZ",
    brandingURL: '/',
    initialCopyrightYear: 2026,
    copyrightBrandName: "WarZ DayZ",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'About',
      },
      {
        url: '#',
        label: 'Meet the Team',
      },
      {
        url: '#',
        label: 'Campaigns',
      },
      {
        url: '#',
        label: 'Blog',
      },
      {
        url: '#',
        label: 'Affiliate Program',
      },
      {
        url: '#',
        label: 'FAQs',
      },
      {
        url: '#',
        label: 'Contact',
      },
    ],
  },
};