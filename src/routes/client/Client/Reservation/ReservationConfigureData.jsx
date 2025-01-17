import { Autocomplete, Grid, TextField  } from "@mui/material";
import { useReservation } from "../../../../contexts/ReservationContext"
import { Link } from "react-router-dom";
import { useUser } from "../../../../contexts/UserContext";


export default function ReservationConfigureData() {
    const { reservationData, updateReservationData } = useReservation();
    const { userData, updateUserData } = useUser();

    function getOptionByDay() {
        const date = new Date();

        let  currentDay = date.getDate();
        let options = [ ]

        for(let i = currentDay; i <= currentDay + 7; i++) {
            options.push(i);
        }


        return options;
    }

    function getVeiclesName() {
        const veicles = userData.userVeicles;

        let veiclesName = [];

        if(veicles) {
            for(let i = 0; i < veicles.length; i++) {
                veiclesName.push(`${veicles[i].model}, ${veicles[i].name}`)

                
            }

            return veiclesName;
        } else {
            return ["Nao foi possivel encontrar"]
        }
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Autocomplete
                    fullWidth
                    options={getVeiclesName()}
                    getOptionLabel={(option) => option}
                    value={reservationData.reservationVeicle}
                    renderInput={(params) => <TextField {...params} label="Selecione o Veiculo que irá entrar" variant="outlined" fullWidth />}
                    onChange={(e, newValue) => {
                        updateReservationData({ ...reservationData, reservationVeicle: newValue })
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <Autocomplete
                    fullWidth
                    value={reservationData.reservationDay}
                    options={getOptionByDay()}
                    getOptionLabel={(option) => option.toString()}
                    renderInput={(params) => <TextField helperText={"Reservas só podem ser feitas para datas dentro de um período de 7 dias."} {...params} label="Que dia voce irá estacionar?" variant="outlined" fullWidth />}
                    onChange={(e, newValue) => {
                        updateReservationData({ ...reservationData, reservationDay: newValue })
                    }}
                />
            </Grid>
        </Grid>
    )
}