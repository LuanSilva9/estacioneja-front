import { Autocomplete, Grid, TextField  } from "@mui/material";
import { useReservation } from "../../../../contexts/ReservationContext"
import { Link } from "react-router-dom";


export default function ReservationConfigureData() {
    const { reservationData, updateReservation } = useReservation();

    function getOptionByDay() {
        const date = new Date();

        let  currentDay = date.getDate();
        let options = [ ]

        for(let i = currentDay; i <= currentDay + 7; i++) {
            options.push(i);
        }


        return options;
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                    fullWidth
                    label="Digite a placa do seu veiculo (Ex: AAA-0000)"
                />
            </Grid>

            <Grid item xs={12}>
                <Autocomplete
                    fullWidth
                    options={getOptionByDay()}
                    getOptionLabel={(option) => option.toString()}
                    renderInput={(params) => <TextField helperText={"Reservas só podem ser feitas para datas dentro de um período de 7 dias."} {...params} label="Que dia voce irá estacionar?" variant="outlined" fullWidth />}
                />
            </Grid>
        </Grid>
    )
}