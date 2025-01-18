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
import EmblaCarousel from "@/Components/Carousel";
import React from "react";
import { Icon } from "@iconify/react";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ProductReviewTab from "./ProductReviewTab";
import ThumbnailCarousel from "@/Components/Thumbnail";
import { formatCurrency } from "@/Function/formatCurrency";
import QuantitySection from "./sections/QuantitySection";
import GlobalStyle from "@/Components/GlobalStyle";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ShopDetailPage = () => {
    const { props } = usePage();
    const [tab, setTab] = React.useState("1");

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <ClientLayout>
            <Stack gap="40px" paddingBottom="80px">
                ádasd
            </Stack>
        </ClientLayout>
    );
};

export default ShopDetailPage;
