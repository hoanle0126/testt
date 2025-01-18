import ClientLayout from "@/Layouts/ClientLayout";
import { MuiTheme } from "@/Theme";
import { Link, router, usePage } from "@inertiajs/react";
import {
    Box,
    Breadcrumbs,
    Button,
    Divider,
    Grid2,
    IconButton,
    Rating,
    Stack,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import GlobalStyle from "@/Components/GlobalStyle";
import { formatCurrency } from "@/Function/formatCurrency";
import ThumbnailCarousel from "@/Components/Thumbnail";

const OPTIONS = {};

const ShopDetailPage = () => {
    const { props } = usePage();
    const [tab, setTab] = React.useState("1");

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <ClientLayout>
            <Stack gap="40px" paddingBottom="80px">
                <Stack>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "text.secondary",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "160px",
                            paddingY: "40px",
                        }}
                    >
                        <Typography variant="h4" color="background.paper">
                            {props.product.name}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "background.neutral",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "160px",
                            paddingY: "20px",
                        }}
                    >
                        <Breadcrumbs
                            aria-label="breadcrumb"
                            sx={{
                                fontSize: MuiTheme().typography.body2,
                                ".current": {
                                    color: "text.primary",
                                },
                            }}
                        >
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                                Shop
                            </Link>
                            <Link className="current">
                                {props.product.name}
                            </Link>
                        </Breadcrumbs>
                    </Box>
                </Stack>
            </Stack>
        </ClientLayout>
    );
};

export default ShopDetailPage;
