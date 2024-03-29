import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import React, { useMemo } from 'react'
import { Cell, Pie, PieChart } from 'recharts'

type Props = {}

const Row3 = (props: Props) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]]
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  // console.log('transactionsData', transactionData)

  const pieChartData= useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            // highlighted part of the pie chart
            { name: key, value: value },
            // unhighlighted part of the pie chart
            { name: `${key} of Total`, value: totalExpenses - value }
          ]
        }
      
      )
    }
  }, [kpiData])

  const productColumns = [
    // Column ID
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },

    // Column Expense
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },

    // Column Price
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },
  ]

  const transactionColumns = [
    // Column ID
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },

    // Column Buyer
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },

    // Column Amount
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },

    // Column Count of ProductIds
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
    },
  ]

  return (
    <>
      {/* LIST OF PRODUCTS TABLE */}
      <DashboardBox gridArea="g">
        <BoxHeader title="List of Products" sideText={`${productData?.length} products`} />
        <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{ "& .MuiDataGrid-root": { color: palette.grey[400], border: "none" }, "& .MuiDataGrid-cell": { borderBottom: `1px solid ${palette.grey[800]} !important` }, "& .MuiDataGrid-columnHeaders": { borderBottom: `1px solid ${palette.grey[800]} !important` }, "& .MuiDataGrid-columnSeparator": { visibility: 'hidden' } }}>
          <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={productData || []} columns={productColumns} />
        </Box>
      </DashboardBox>

      {/* RECENT ORDERS TABLE */}
      <DashboardBox gridArea="h">
        <BoxHeader title="Recent Orders" sideText={`${transactionData?.length} latest transactions`} />
        <Box mt="1rem" p="0 0.5rem" height="80%" sx={{ "& .MuiDataGrid-root": { color: palette.grey[400], border: "none" }, "& .MuiDataGrid-cell": { borderBottom: `1px solid ${palette.grey[800]} !important` }, "& .MuiDataGrid-columnHeaders": { borderBottom: `1px solid ${palette.grey[800]} !important` }, "& .MuiDataGrid-columnSeparator": { visibility: 'hidden' } }}>
          <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={transactionData || []} columns={transactionColumns} />
        </Box>
      </DashboardBox>

      {/* EXPENSE BREAKDOWN PIE CHARTS */}
      <DashboardBox gridArea="i" mt="-20px">
        <BoxHeader title="Expense Breakdown by Category" sideText='+4%' />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign='center'>
          {(pieChartData ?? []).map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100} >
            <Pie stroke="none" data={data} innerRadius={18} outerRadius={35} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Typography variant='h5'>{data[0].name}</Typography>
            </Box>
          ))}
          
        </FlexBetween>
      </DashboardBox>

      
      <DashboardBox gridArea="j">
      <BoxHeader title="Overall Summary and Explanation Data" sideText='+15%' />
        <Box height='15px' margin='1.25rem 1rem 0.4rem 1rem' bgcolor={palette.primary[800]} borderRadius='1rem'>
          <Box height='15px' bgcolor={palette.primary[600]} borderRadius='1rem' width="40%" />
          <Typography margin="1rem 0" variant="h6">The following represents the summary of our cost to revenue ingestion. Stake holders should take notice of our steady and progressive growth with controlled cost budgets.</Typography>
        </Box>
      </DashboardBox>
    </>
  )
}

export default Row3