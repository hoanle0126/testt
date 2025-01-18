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
            <Grid2 container spacing="80px" paddingX="160px">
                <Grid2 size={7}>
                    <Stack gap="12px">xzcxzc</Stack>
                </Grid2>
                <Grid2 size={5}>
                    <Stack
                        sx={{
                            height: "100%",
                            borderRadius: "16px",
                            justifyContent: "end",
                            gap: "16px",
                        }}
                    >
                        <Typography
                            variant="subtitle2"
                            color={
                                Number(props.product.remain) === 0
                                    ? "error.main"
                                    : "primary.main"
                            }
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 700,
                            }}
                        >
                            {Number(props.product.remain) === 0
                                ? "Out of stock"
                                : "In stock"}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            {props.product.name}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"12px"}
                        >
                            <Rating value={props.product.rating} readOnly />
                            <Typography
                                variant="body2"
                                color={"text.disabled"}
                                sx={{}}
                            >
                                ({props.product.reviews.length} reviews)
                            </Typography>
                        </Stack>
                        <Stack direction="row" gap="20px">
                            {props.product.price_total !== null ? (
                                <>
                                    <Typography
                                        variant="h5"
                                        color="text.disabled"
                                        sx={{
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {formatCurrency(props.product.price)}
                                    </Typography>
                                    <Typography variant="h5" color="error.main">
                                        {formatCurrency(
                                            props.product.price_total
                                        )}
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="h5" color="text.primary">
                                    {formatCurrency(props.product.price)}
                                </Typography>
                            )}
                        </Stack>
                        <Divider
                            sx={{
                                borderStyle: "dashed",
                            }}
                        />
                        <div className="flex-1"></div>
                        {/* <QuantitySection /> */}
                        <Stack
                            sx={{
                                height: "66px",
                                marginTop: "8px",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <div>
                                <Button
                                    color="common"
                                    startIcon={<Icon icon="eva:plus-fill" />}
                                >
                                    <Typography variant="body2">
                                        Compare
                                    </Typography>
                                </Button>
                            </div>
                            <div>
                                <Button
                                    color="common"
                                    startIcon={<Icon icon="eva:heart-fill" />}
                                >
                                    <Typography variant="body2">
                                        Favorite
                                    </Typography>
                                </Button>
                            </div>
                            <div>
                                <Button
                                    color="common"
                                    startIcon={<Icon icon="eva:share-fill" />}
                                >
                                    <Typography variant="body2">
                                        Favorite
                                    </Typography>
                                </Button>
                            </div>
                        </Stack>
                    </Stack>
                </Grid2>
            </Grid2>
        </ClientLayout>
    );
};

export default ShopDetailPage;
