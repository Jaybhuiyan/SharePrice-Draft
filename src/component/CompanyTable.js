import React from 'react';
import { Table } from 'semantic-ui-react';

const CompanyTable = () => {
  const companies = [
    { name: 'Apple Inc.', symbol: 'AAPL' },
    { name: 'Microsoft Corporation', symbol: 'MSFT' },
    { name: 'Amazon.com Inc.', symbol: 'AMZN' },
    { name: 'Alphabet Inc.', symbol: 'GOOGL' },
    { name: 'Facebook Inc.', symbol: 'FB' },
    { name: 'Johnson & Johnson', symbol: 'JNJ' },
    { name: 'Procter & Gamble Co', symbol: 'PG' },
    { name: 'Visa Inc', symbol: 'V' },
    { name: 'JP Morgan Chase & Co', symbol: 'JPM' },
    { name: 'UnitedHealth Group Inc', symbol: 'UNH' },
  ];

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.HeaderCell>Stock Symbol</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {companies.map((company) => (
          <Table.Row key={company.symbol}>
            <Table.Cell>{company.name}</Table.Cell>
            <Table.Cell>{company.symbol}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CompanyTable;
