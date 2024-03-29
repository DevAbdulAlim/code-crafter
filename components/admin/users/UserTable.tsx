export default function UserTable({ data }: { data: any }) {
  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-slate-50 md:pt-0">
          <div className="md:hidden">
            {data?.map((item: any) => (
              <div
                key={item.id}
                className="w-full p-4 mb-2 bg-white rounded-md"
              >
                <img
                  src={item.image}
                  alt={`${item.name}'s profile`}
                  className="w-8 h-8 rounded-full"
                />
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <div className="flex justify-between mt-2">
                  {/* <ButtonLink
                    href={`/admin/courses/${item.id}/edit`}
                    variant="ghost"
                    className="px-2 border"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </ButtonLink>
                  <CourseDeleteForm id={item.id} /> */}
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Image
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Email
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((item: any) => (
                <tr
                  key={item.userId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="px-3 py-3 whitespace-nowrap">{item.id}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <img
                      src={item.image}
                      alt={`${item.name}'s profile`}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">{item.name}</td>
                  <td className="px-3 py-3 whitespace-nowrap">{item.email}</td>
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex justify-end gap-3">
                      {/* <ButtonLink
                        href={`/admin/users/${item.userId}/edit`}
                        variant="ghost"
                        className="px-2 border"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </ButtonLink> */}
                      {/* <UserDeleteForm userId={item.userId} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
