# Tanstack Table

It is headless UI Library.
`headless`: It means it only provide logic, state or processing but not markup or css.

## Basic Table

```tsx
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

const Table = () => {
  const [data, setData] = useState<User[]>([]);
  const columns: ColumnDef<User>[] = [];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table);
  return <div>Table</div>;
};

export default Table;
```

## Installation

```bash
npm install @tanstack/react-table
```

## Creating a Table Instance

You can create table instance in react using `useReactTable`.
`useReactTable` takes two options `columns` and `data` these options are required.

```jsx
const table = createTable({ columns, data });

table.getState().rowSelection; // read teh row selection state.
table.setRowSelection((old) => ({ ...old })); // set the row selection state.
table.resetRowSelection(); // reset the row selection state.
```

## Table Columns

- It is used in building underlynig data model.
- Formatting the data model into what will be displayed in the table.
- Creating `headers` `footers` etc.

### Column Def Types

These types describes overall categories of column defs.

- `Accessor columns`: It has underlying data model which means they can be sorted, filtered or grouped etc.
- `Display Columns`: They do not have data model which means can't be sorted, they are used to display arbitray content in table. `row, actions, buttons` etc.
- `Grouping Columns`: They also not have a data model, it is used to groups other columns together

## Table Data

`Defining data`: Data is an array of object, object represents the data of row.

```jsx
[
  { firstName: "Ayan", lastName: "Khan" },
  { firstName: "Jameel", lastName: "Khan" },
  { firstName: "Naeem", lastName: "Khan" },
];
```

## Table State

Table instance contains all of the table state, which can be accessed by `table.getState()`

- Each table registers various state of table state like `rowSelection` or `pagination`
