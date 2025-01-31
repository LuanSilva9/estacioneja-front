import { useState } from 'react';

import './Login.css';

import { Grid, InputAdornment, TextField } from '@mui/material';

import { Button } from 'react-bootstrap';
import { RiAccountCircleFill } from 'react-icons/ri';
import { TbLockFilled } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { users } from '../../cache/Users';
import { companys } from '../../constants/Companys';
import { useCompany } from '../../contexts/CompanyContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { companyData, updateCompanyData } = useCompany();
  const { userData, updateUserData } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = users.find((user) => user.userEmail === email && user.userPassword === password);
      const company = companys.find((company) => company.companyAccess.email === email && company.companyAccess.password === password);

      if (user) {
        updateUserData(user);
        
        localStorage.setItem("sessionId", process.env.REACT_APP_AUTH_KEY_USER);
        

        navigate("/client");

      } 
      else if(company) {
        updateCompanyData(company);

        localStorage.setItem("sessionId", process.env.REACT_APP_AUTH_KEY_COMPANY);

        navigate("/dashboard");
      }
      else {
        alert("Usuário não encontrado!");
      }
    } catch (e) {
      alert("Ocorreu um erro ao tentar autenticar.");
    }
  }

  return (
    <main className="login">
      <div className="image-side" style={{ background: "url(/assets/bg_park_login.jpg) no-repeat center center", backgroundSize: "cover" }}></div>

      <div className="content-login">
        <form className='form' method={"POST"} onSubmit={handleSubmit}>

          <div className="form-text">
            <Link to="/"><img src="/logo-white.svg" alt="logo-estacioneja" className="logo" /></Link>
          </div>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Seu e-mail"
                type="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                        <RiAccountCircleFill />
                      </InputAdornment>
                    ),
                  },
                }}

                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="senha"
                label="Sua Senha"
                variant="outlined"
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ fontSize: '25px' }}>
                        <TbLockFilled />
                      </InputAdornment>
                    ),
                  },
                }}

                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button type='submit' className="btn btn-primary rounded-0" style={{ width: "200px", height: "40px" }}>Entrar</Button>
            </Grid>

            <Grid item xs={12}>
              <Link to="/login/esqueci-a-senha">Esqueci a Senha</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </main>
  )
}