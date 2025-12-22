import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";

const Table = <T extends object>({
  data,
  isLoading,
  columns,
}: {
  data: T[];
  columns: MRT_ColumnDef<T>[];
  isLoading: boolean;
}) => {
  const tableData = useMemo(() => data ?? [], [data]);

  const tableColumn = useMemo(() => columns ?? [], [columns]);

  const table = useMaterialReactTable({
    columns: tableColumn,
    data: tableData,
    defaultDisplayColumn: { enableResizing: true, enableSorting: false },
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: false,
    enableColumnPinning: false,
    enableRowNumbers: false,
    enableRowVirtualization: true,
    enableStickyHeader: true,
    enableSorting: true,
    enableTopToolbar: false,
    enableCellActions: false,
    enableColumnActions: false,
    rowVirtualizerOptions: { overscan: 5 },
    columnVirtualizerOptions: { overscan: 2 },
    muiTableHeadCellProps: () => ({
      sx: {
        "& .Mui-TableHeadCell-Content-Wrapper": {
          whiteSpace: "nowrap",
        },
      },
    }),
    muiTableBodyCellProps: () => ({
      sx: {
        maxHeight: "50px",
        height: "50px",
        whiteSpace: "nowrap",
      },
    }),
    muiBottomToolbarProps: () => ({
      sx: {
        "& .MuiFormLabel-root, .MuiInputBase-root": {
          margin: 0,
        },
      },
    }),
    state: {
      isLoading,
    },
  });
  return <MaterialReactTable table={table} />;
};

export default Table;
