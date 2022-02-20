import React, {FC} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div className={'Hello'}>
    <table className="table-auto">
      <thead>
      <tr className={'hover:bg-gray-200'}>
        <th className="px-4 py-2">Title</th>
        <th className="px-4 py-2">Author</th>
        <th className="px-4 py-2">Views</th>
      </tr>
      </thead>
      <tbody>
      <tr className={'hover:bg-gray-200'}>
        <td className="border"><input className={'w-full h-10 px-4 py-2 hover:bg-gray-200 focus:bg-white'} defaultValue={'Intro to CSS'}/></td>
        <td className="border px-4 py-2">Adam</td>
        <td className="border px-4 py-2">858</td>
      </tr>
      <tr className="bg-gray-100 hover:bg-gray-200">
        <td className="border px-4 py-2">A Long and Winding Tour of the
        </td>
        <td className="border px-4 py-2">Adam</td>
        <td className="border px-4 py-2">112</td>
      </tr>
      <tr className={'hover:bg-gray-200'}>
        <td className="border px-4 py-2">Intro to JavaScript</td>
        <td className="border px-4 py-2">Chris</td>
        <td className="border px-4 py-2">1,280</td>
      </tr>
      </tbody>
      <tfoot>
      <tr className={'hover:bg-gray-200'}>
        <td className="border px-4 py-2">foot</td>
        <td className="border px-4 py-2">foot</td>
        <td className="border px-4 py-2">foot</td>
      </tr>
      </tfoot>
    </table>
  </div>;
}
