import './errorStyles.css'
import '../../constants/pallete.css'

import { Box, Typography } from "@mui/material";

export default function NoLinkedParking() {
    return (
        <Box className='not-park-vincle'>
            <Typography align='center' variant='h5'>Você não tem nenhum estacionamento vinculado!</Typography>
            <img src="/assets/parking-not-vincle.svg" />
        </Box> 
    )
}