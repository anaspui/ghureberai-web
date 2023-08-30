import Image from 'next/image';
import { useState } from 'react';

export default function BlurImage({ src }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={src?.href} className='group'>
      <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200'>
        <Image
          alt=''
          src={src?.src} // Change src to src?.src
          layout='fill'
          objectFit='cover'
          className={`
            duration-700 ease-in-out group-hover:opacity-75
            ${
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}
