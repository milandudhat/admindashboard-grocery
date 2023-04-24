import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        if(formik.values.username === 'admin' && formik.values.password === 'admin'){
            navigate('/')
        }
        else{
            alert('Invalid Username or Password')
        }
    
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('username is required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('password is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    })
    return (
        <>
            <div className='bgcolor'>
                <Box height={70} />
                <form onSubmit={formik.handleSubmit}>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <Grid item xs={12} sx={{
                        margin: 'auto',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Card sx={{ bgcolor: '#575656' }}>
                            <CardContent sx={{
                                // margin: 10 + 'px',
                            }}>
                                <div sx={{
                                    // margin: 100 + 'px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>
                                    <Container maxWidth="sm" sx={{
                                        marginTop: 0
                                    }}>
                                        <Box>
                                            <>
                                                <Card>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sx={{
                                                            padding: "10px 10px",
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            margin: 2,
                                                        }}>

                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                <TextField
                                                                    fullWidth
                                                                    id="username"
                                                                    name="username"
                                                                    label="Username"
                                                                    type="text"
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    value={formik.values.username}
                                                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                                                />
                                                                {formik.touched.username && formik.errors.username && (
                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.username}</div>
                                                                )}
                                                            </div>

                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                <TextField
                                                                    fullWidth
                                                                    id="password"
                                                                    name="password"
                                                                    label="Password"
                                                                    type="password"
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    value={formik.values.password}
                                                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                                                />
                                                                {formik.touched.password && formik.errors.password && (
                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.password}</div>
                                                                )}
                                                            </div>

                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
                                                            </div>



                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </>
                                        </Box>
                                    </Container>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    </Container>
                </form>
            </div>
        </>
    )
}

export default Login