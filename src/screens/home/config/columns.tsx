import { IPortfolio } from "@/types";
import { formatCurrency, formatPercentage } from "@/utils";
import { Box } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";

export const columns: MRT_ColumnDef<IPortfolio>[] = [
  {
    accessorKey: "particulars",
    header: "Particulars",
  },
  {
    accessorKey: "symbol",
    header: "NSE/BSE",
  },
  {
    accessorKey: "purchasePrice",
    header: "Purchase Price",
    Cell: ({ cell }) => formatCurrency(cell.getValue<number>()),
  },
  {
    accessorKey: "quantity",
    header: "Qty",
  },
  {
    accessorKey: "investment",
    header: "Investment",
    Cell: ({ cell }) => formatCurrency(cell.getValue<number>()),
  },
  {
    accessorKey: "portfolioPct",
    header: "Portfolio %",
    Cell: ({ cell }) => formatPercentage(cell.getValue<number>() * 100),
  },
  {
    accessorKey: "cmp",
    header: "CMP",
    Cell: ({ cell }) => formatCurrency(cell.getValue<number>()),
  },
  {
    accessorKey: "presentValue",
    header: "Present Value",
    Cell: ({ cell }) => formatCurrency(cell.getValue<number>()),
  },
  {
    accessorKey: "gainLoss",
    header: "Gain/Loss",
    Cell: ({ cell }) => {
      const val = cell.getValue<number>();
      return (
        <Box
          component="span"
          sx={{ color: val >= 0 ? "success.main" : "error.main" }}
        >
          {formatCurrency(val)}
        </Box>
      );
    },
  },
  {
    accessorKey: "pe",
    header: "P/E",
    Cell: ({ cell }) => cell.getValue<number>()?.toFixed(2) || "-",
  },
  {
    accessorKey: "eps",
    header: "Latest Earning",
    Cell: ({ cell }) => cell.getValue<number>()?.toFixed(2) || "-",
  },
];
