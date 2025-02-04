import { Box, Button, Typography } from "@mui/material";
import { rootColors } from "../../constants/pallete";

export default function NoVeiclesFounded() {
    return (
        <Box className='box-error-simple'>
            <img src="/assets/car-not-vincle.svg" />
            <Typography sx={{color: rootColors.colorGreenPrimary}} variant='h5'>Você não tem nenhum veiculo vinculado!</Typography>
        </Box> 
    )
}