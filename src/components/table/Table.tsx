import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";

type TableProps<T extends object> = {
  data: T[];
  columns: MRT_ColumnDef<T>[];
  isLoading: boolean;
};

const Table = <T extends object>({
  data,
  columns,
  isLoading,
}: TableProps<T>) => {
  const tableData = useMemo(() => data ?? [], [data]);
  const tableColumns = useMemo(() => columns ?? [], [columns]);

  const table = useMaterialReactTable({
    columns: tableColumns,
    data: tableData,

    enableSorting: true,
    enableStickyHeader: true,
    enableRowVirtualization: true,
    enableColumnVirtualization: true,
    enableColumnResizing: true,

    enableTopToolbar: false,
    enableBottomToolbar: false,
    enablePagination: false,
    enableColumnActions: false,
    enableCellActions: false,
    enableTableFooter: false,

    state: {
      isLoading,
      showSkeletons: isLoading,
    },

    muiTableContainerProps: {
      sx: {
        maxHeight: "80vh",
      },
    },

    muiTableHeadCellProps: {
      sx: {
        fontWeight: 700,
        fontSize: "0.9rem",
        backgroundColor: "#f5f5f5",
        whiteSpace: "nowrap",
      },
    },

    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: row.index % 2 === 0 ? "#fafafa" : "#ffffff",
      },
    }),

    muiTableBodyCellProps: ({ cell }) => ({
      sx: {
        height: 48,
        whiteSpace: "nowrap",
        fontWeight: cell.column.id === "gainLoss" ? 600 : 400,
        color:
          cell.column.id === "gainLoss"
            ? Number(cell.getValue()) >= 0
              ? "success.main"
              : "error.main"
            : "inherit",
      },
    }),

    renderEmptyRowsFallback: () => (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          No data available
        </Typography>
      </Box>
    ),

    rowVirtualizerOptions: { overscan: 5 },
    columnVirtualizerOptions: { overscan: 2 },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
