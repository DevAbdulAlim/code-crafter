'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter((segment) => segment);

  return (
    <nav className="flex items-center text-blue-500 text-sm space-x-2" aria-label="Breadcrumb">
      {pathSegments.map((segment, index) => (
        <div key={index}>
          <Link
            href={'/' + pathSegments.slice(0, index + 1).join('/')}
            className={`hover:underline ${index < pathSegments.length - 1 ? 'text-gray-400' : 'font-semibold'}`}
          >
            {segment}
          </Link>
          {index < pathSegments.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
