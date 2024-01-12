import React from 'react';

import {
  TransactionHistoryTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './TransactionHistoryStyles';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {items.map(item => (
          <TableBodyRow key={item.id}>
            <TableBodyCell>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </TableBodyCell>
            <TableBodyCell>{item.amount}</TableBodyCell>
            <TableBodyCell>{item.currency}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

export default TransactionHistory;
