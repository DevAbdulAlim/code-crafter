export const metadata = {
  title: 'Admin | Courses',
  description: 'Admin Course Management'
}

export default function Layout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <>
        {props.children}
        {props.modal}
    </>
  )
}