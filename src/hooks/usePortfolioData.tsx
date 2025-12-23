"use client";

import { useEffect, useMemo, useState } from "react";
import { usePortfolio } from "@/services";
import { IPortfolio, LiveUpdate } from "@/types";
import { WS_URL } from "@/config";

const usePortfolioData = () => {
  const { useGetAllPortfolio } = usePortfolio();

  const { data, isLoading, isError } = useGetAllPortfolio();

  const [updates, setUpdates] = useState<Record<string, LiveUpdate>>({});

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}/ws`);

    ws.onmessage = (e) => {
      console.log(e.data);
      const updates = JSON.parse(e.data);

      updates.forEach((row: LiveUpdate) => {
        setUpdates((prev) => ({
          ...prev,
          [row.symbol]: {
            symbol: row.symbol,
            cmp: row.cmp,
            presentValue: row.presentValue,
            gainLoss: row.gainLoss,
          },
        }));
      });
    };
    ws.onerror = (e) => {
      console.error("WS error", e);
    };

    return () => {
      console.log("Closing WS");
      ws.close();
    };
  }, []);

  const updatedData = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.data.map((row: IPortfolio) => {
      const symbol = row.symbol;
      if (updates[symbol]) {
        return {
          ...row,
          ...updates[symbol],
        };
      }
      return row;
    });
  }, [data, updates]);

  return {
    data: updatedData,
    isLoading,
    isError,
  };
};

export default usePortfolioData;
