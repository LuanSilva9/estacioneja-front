import { Box, Typography } from "@mui/material";

export default function NoHistory() {
    return (
        <Box className="box-error-simple">
            <img src="/assets/history-not-found.svg" alt="history-not-found" />
            <Typography variant="body">Você não tem historico de reservas...</Typography>
        </Box>
    )
}