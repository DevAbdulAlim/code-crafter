import { DeleteCategory, UpdateCategory } from "./buttons";

export default async function Table({ data }: { data: any }) {
  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-gray-50 md:pt-0">
          <div className="md:hidden">
            {data?.map((item: any) => (
              <div
                key={item.id}
                className="w-full p-4 mb-2 bg-white rounded-md"
              >
                <p>{item.name}</p>
                <UpdateCategory id={item.id} />
                <DeleteCategory id={item.id} />
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((item: any) => (
                <tr
                  key={item.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="px-3 py-3 whitespace-nowrap">{item.name}</td>

                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex justify-end gap-3">
                      <UpdateCategory id={item.id} />
                      <DeleteCategory id={item.id} />
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
