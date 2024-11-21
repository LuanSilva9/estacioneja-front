import { Box, Grid, Typography } from "@mui/material";

import '../SignUp.css';

import { Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";

const styleCategory = {
    border: "1px solid rgb(54 183 123)",
    color: "rgb(54 183 123)",
}

export default function SignUpCompanyPayment() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    function handleMarkPayments(index) {
        setSelectedCategory(index);
    }

    return (
        <section className="sign-up-company">
            <div className="form">
                <form>
                    <div className="form-text">
                        <img src="/logo-white.svg" alt="logo-estacioneja" className="logo" />
                        <h2>Adicionar forma de pagamento</h2>
                    </div>
                    
                    <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={12}>
                            <Typography textAlign={"start"} sx={{ fontSize: "17px", fontWeight: "bold" }}>Selecione a forma de pagamento</Typography>
                        </Grid>

                        <Grid item xs={12} key={1} onClick={() => handleMarkPayments(1)} style={selectedCategory === 1 ? styleCategory : null}>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 'bold'}}>Pacote Super</Typography>
                                <Typography>Esse pacote é bom para estacionamentos grandes (+ 100 vagas)</Typography>
                            </Grid>
                            
                            <Grid item xs={6} key={2}>
                                <Typography sx={{fontWeight: 'bold'}}>1300,00R$</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>Instalação + Suporte</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} key={2} onClick={() => handleMarkPayments(2)} style={selectedCategory === 2 ? styleCategory : null}>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 'bold'}}>Pacote Medio</Typography>
                                <Typography>Feito para estacionamentos de até 70 vagas</Typography>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 'bold'}}>1000,00R$</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>Instalação + Suporte</Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} key={3} onClick={() => handleMarkPayments(3)} style={selectedCategory === 3 ? styleCategory : null}>
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 'bold'}}>Pacote Minimo</Typography>
                                <Typography>Feito para estacionamentos de até 30 vagas</Typography>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Typography sx={{fontWeight: 'bold'}}>400,00R$</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>Instalação + Suporte</Typography>
                            </Grid>
                        </Grid>

                       

                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Box display="flex" justifyContent="space-between">
                                <Link to="/cadastrar/empresa/passo-2"  className="btn btn-dark">Voltar</Link>
                                <Link to="/cadastrar/empresa/finish" className="btn btn-primary">Proximo Passo <MdNavigateNext/></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <div className="image-side"></div>
        </section>
    )
}