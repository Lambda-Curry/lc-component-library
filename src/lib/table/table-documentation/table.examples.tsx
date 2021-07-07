import React, { FC } from 'react';
import { Table } from '..';

export const TableExample: FC = () => (
  <Table footnote="This is some footnote text about the table above.">
    <thead>
      <th>Header - Column 1</th>
      <th>Header - Column 2</th>
      <th>Header - Column 3</th>
    </thead>
    <tbody>
      <tr>
        <td>Row 1 - Column 1</td>
        <td>Row 1 - Column 2</td>
        <td>Row 1 - Column 3</td>
      </tr>
      <tr>
        <td>Row 2 - Column 1</td>
        <td>Row 2 - Column 2</td>
        <td>Row 2 - Column 3</td>
      </tr>
      <tr>
        <td>Row 3 - Column 1</td>
        <td>Row 3 - Column 2</td>
        <td>Row 3 - Column 3</td>
      </tr>
      <tr>
        <td>Row 4 - Column 1</td>
        <td>Row 4 - Column 2</td>
        <td>Row 4 - Column 3</td>
      </tr>
      <tr>
        <td>Row 5 - Column 1</td>
        <td>Row 5 - Column 2</td>
        <td>Row 5 - Column 3</td>
      </tr>
    </tbody>
    <tfoot>
      <th>Footer - Column 1</th>
      <th>Footer - Column 2</th>
      <th>Footer - Column 3</th>
    </tfoot>
  </Table>
);
