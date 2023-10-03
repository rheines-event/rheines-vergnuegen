import Image from 'next/image';


export function Wordgrid() {

  const tiles = [
    {
      src: '/herrenzimmer.jpg',
      alt: 'Unser Clubraum',
      caption: 'Diskutieren'
    },
    {
      src: '/eventkueche.jpg',
      alt: 'Unsere Eventküche',
      caption: 'Dinieren'
    },
    {
      src: '/open-space.jpg',
      alt: 'Unser Open Space',
      caption: 'Konzipieren',
    },
    {
      src: '/amphitheater.jpg',
      alt: 'Unser Amphitheater',
      caption: 'Lernen'
    },
    {
      src: '/jagdzimmer.png',
      alt: 'Unser Jagdzimmer',
      caption: 'Feiern',
      desktopOnly: true
    },
    {
      src: '/event-kitchen.jpg',
      alt: 'Unsere Eventküche',
      caption: 'Kochen',
      desktopOnly: true
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 mt-12 mb-8 lg:-mx-32">
      {tiles.map(tileData => <WordGridTile {...tileData} />)}
    </div>
  );
}


type WordGridTileProps = {
  src: string;
  alt?: string;
  caption: string;
  href?: string;
  desktopOnly?: boolean;
};
function WordGridTile({ src, alt, caption, desktopOnly }: WordGridTileProps) {
  return (
    <div
      className={`group relative block aspect-square ${desktopOnly ? 'hidden lg:block' : ''}`}>
      <Image
        fill
        src={src}
        alt={alt ?? caption as string}
        sizes="(max-width: 640px) 100vw, 320px"
        priority={false}
        loading="lazy"
        className="object-cover brightness-50 hover:brightness-75 grayscale hover:grayscale-0 transition-all" />
      <div className="absolute bottom-0 inset-x-0 m-4 group-hover:ml-5 transition-all">
        <h4 className="text-white text-2xl font-light pl-1">
          {caption}
        </h4>
      </div>
    </div>
  );
}
