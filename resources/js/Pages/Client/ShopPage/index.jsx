import ClientLayout from "@/Layouts/ClientLayout";
import { MuiTheme } from "@/Theme";
import { Link, router, usePage } from "@inertiajs/react";
import {
    Box,
    Breadcrumbs,
    Pagination,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import FilterSection from "./Components/FilterSection";
import SortSection from "./Components/SortSection";
import ProductSection from "./Components/ProductSection";
import convertText from "@/Function/converText";

const ShopPage = () => {
    const { props } = usePage();
    const { search } = window.location; // Lấy query string hiện tại
    const searchParams = new URLSearchParams(search);

    return (
        <ClientLayout>
            <Stack
                sx={{
                    gap: "40px",
                }}
            >ádasd
            </Stack>
        </ClientLayout>
    );
};

export default ShopPage;
