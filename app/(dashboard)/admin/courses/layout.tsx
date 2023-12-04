export const metadata = {
  title: 'Admin | Courses',
  description: 'Admin Course Management',
};

/**
 * Layout component for the admin course management pages.
 * @param props - React component props.
 * @param props.children - The main content of the layout.
 * @param props.modal - The modal content to be displayed.
 * @returns JSX element representing the layout.
 */
export default function Layout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <>
        {children}
        {modal}
    </>
  );
}
