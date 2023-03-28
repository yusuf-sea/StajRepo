import React, { Component } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import './pet_page.css'

class Pet_page extends Component {
    render() {
        return (
            <div>
                <Container component="main" maxWidth="sm" sx={{ mb: 3, background: '#ccc', height: '100%' }}>

                    <React.Fragment>
                        <Grid style={{ fontFamily: '"Source Sans Pro", sans-serif', paddingBottom: '20px' }} container spacing={0} >

                            <Grid item xs={12} md={12}>
                                <Card sx={{ width: '100%', margin: '20px 0 -30px ', background: '#fff7f2', }}>

                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://picsum.photos/400/400" 
                                    />

                                </Card>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <div style={{
                                    backgroundColor: '#fef7f3',
                                    padding: '10px ',
                                    borderRadius: '30px 30px 5px 5px',

                                }}>
                                    <Grid item xs={12} md={12}>
                                        <div style={{
                                            fontWeight: 'bold',
                                            padding: '20px 20px 10px 20px',
                                        }}>
                                            <p style={{ fontSize: '15pt', }}>Macchiato</p>

                                            <p style={{ fontSize: '9pt', }}>Dog - Labrador</p>

                                        </div>

                                    </Grid>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 10px' }}>


                                        <Grid item xs={3.5} md={3.5}>

                                            <div style={{
                                                color: '#827a6a',
                                                backgroundColor: '#fff2e0',
                                                padding: '5px 0',
                                                margin: '0px 10px 0px 10px',
                                                borderRadius: '20px',
                                                textAlign: 'center',
                                                boxShadow: '0 0 10px #b6b6b6',
                                            }}>

                                                <p style={{ fontSize: "10pt", padding: '5px 0', }} >Yaş <br /> <p style={{ color: 'black' }}>3</p> </p>
                                            </div>

                                        </Grid>

                                        <Grid item xs={3.5} md={3.5}>

                                            <div style={{
                                                color: '#827a6a',
                                                backgroundColor: '#e2e8fe',
                                                padding: '5px 0',
                                                margin: '0px 10px 0px 10px',
                                                borderRadius: '20px',
                                                textAlign: 'center',
                                                boxShadow: '0 0 10px #b6b6b6',
                                            }}>

                                                <p style={{ fontSize: "10pt", padding: '5px 0', }} >Cinsiyet <br /> <p style={{ color: 'black' }}>Dişi</p> </p>
                                            </div>

                                        </Grid>

                                        <Grid item xs={3.5} md={3.5}>

                                            <div style={{
                                                color: '#827a6a',
                                                backgroundColor: '#fed8d9',
                                                padding: '5px 0',
                                                margin: '0px 10px 0px 10px',
                                                borderRadius: '20px',
                                                textAlign: 'center',
                                                boxShadow: '0 0 10px #b6b6b6',
                                            }}>

                                                <p style={{ fontSize: "10pt", padding: '5px 0', }} >Kilo <br /> <p style={{ color: 'black' }}>4.5</p> </p>
                                            </div>

                                        </Grid>

                                        <Grid item xs={3.5} md={3.5}>
                                            <div style={{
                                                color: '#827a6a',
                                                backgroundColor: '#ebfee0',
                                                padding: '5px 0',
                                                margin: '0px 10px 0px 10px',
                                                borderRadius: '20px',
                                                textAlign: 'center',
                                                boxShadow: '0 0 10px #b6b6b6',
                                            }}>

                                                <p style={{ fontSize: "10pt", padding: '5px 0', }} >Aşı <br /> <p style={{ color: 'black' }}>Evet</p> </p>
                                            </div>
                                        </Grid>

                                    </div>

                                    <div style={{ padding: '10px 20px' }}>

                                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                                            <Avatar src='https://picsum.photos/400/300' style={{}}></Avatar>

                                            <div style={{ width: '100%', margin: '5px 0 0 10px' }}>
                                                <p style={{ fontWeight: 'bold' }}>Sinay Koçak</p>
                                                <p style={{ fontSize: '9pt' }}>Sahibi</p>

                                            </div>

                                            <p style={{ textAlign: 'right', margin: '0px' }}>
                                                <p style={{ fontSize: '10pt', fontWeight: 'bold' }}>Nişantaşı</p>
                                                <p style={{ fontSize: '8pt' }}>İstanbul</p>
                                            </p>
                                        </div>

                                        <p style={{ color: '#7f7772', margin: '15px 0 10px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facere accusamus totam nesciunt magnam sequi magni, corrupti quibusdam, debitis eveniet neque maxime tenetur maiores ratione omnis asperiores, quia animi. Aperiam consequatur distinctio voluptatum atque incidunt.                                    </p>

                                        <div style={{ paddingTop: '10px', textAlign: 'center', }}>
                                            <Button
                                                sx={{ maxWidth: 345 }}
                                                style={{
                                                    color: 'white',
                                                    background: '#000101',
                                                    width: '100%',
                                                    borderRadius: '20px',
                                                }}>
                                                PAYLAŞ
                                            </Button>

                                        </div>

                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </Container>
            </div>
        )
    }
}
export default Pet_page;
