"use client";

import { Box, Typography } from "@mui/material";
import { Table } from "@/components";
import { columns } from "./config";
import { usePortfolioData } from "@/hooks";

const HomePage = () => {
  const { data, isLoading, isError } = usePortfolioData();

  if (isError)
    return (
      <div className="flex h-full items-center justify-center">
        Error loading data
      </div>
    );

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Portfolio Dashboard
      </Typography>
      <Table data={data || []} isLoading={isLoading} columns={columns} />
    </Box>
  );
};

export default HomePage;
