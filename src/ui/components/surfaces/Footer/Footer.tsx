import React from 'react';
import {
    FooterStyled,
    FooterContainer,
    FooterTitle,
    AppList,
} from './Footer.style';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        O Food Flix te ajuda a experimentar um melhor e mais
                        perfeito lanche e pizza para saborear. Garantimos
                        os melhores lanches e pizzas da região com total satisfaçã!
                        São milhares de clientes satisfeitos por
                        toda a região.
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img
                                    src={'/img/logos/app-store.png'}
                                    alt={'App Store'}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img
                                    src={'/img/logos/google-play.png'}
                                    alt={'Google Play'}
                                />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;
