import { Box, Typography, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PersonIcon from '@mui/icons-material/Person';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Header from "../../components/Header";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "genderType",
      headerName: "Gender",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: ({ row: { gender } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              gender === "male"
                ? colors.blueAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {gender === "male" && <MaleIcon />}
            {gender === "female" && <FemaleIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {gender === "male" ? "Male" : "Female"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "weight",
      headerName: "Weight (kg)",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      valueFormatter: (params) => {
        const value = params.value || '-';
        return value;
      },
    },
    {
      field: "height",
      headerName: "Height (cm)",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      valueFormatter: (params) => {
        const value = params.value || '-';
        return value;
      },
    },
    {
      field: "bmi",
      headerName: "BMI",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      valueFormatter: (params) => {
        const value = params.value || '-';
        return value;
      },
    },
    {
      field: "roleType",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "user"
                ? colors.greenAccent[400]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "user" && <PersonIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role === "admin" ? "Admin" : "User"}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Header title="Manage Users" subtitle="Managing the Gym Users" />
        <Button type="submit" color="secondary" variant="contained" component={Link} to="/create_user">
          <PersonAddIcon sx={{ color: colors.grey[100] }} />
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Create New User
          </Typography>
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Users;
