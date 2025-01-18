import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const QuantitySection = () => {
    const { props } = usePage();
    const [quantityValue, setQuantityValue] = React.useState(1);

    return (
        <>
            <Stack alignItems={"end"} gap={"8px"}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                >
                    <Typography variant="subtitle2" color="text.primary">
                        Quantity
                    </Typography>
                    <Stack
                        sx={{
                            border: "1px solid black",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                            padding: "4px",
                            borderColor: "divider",
                            borderRadius: "8px",
                        }}
                    >
                        <IconButton
                            size="small"
                            sx={{
                                borderRadius: "8px",
                            }}
                            disabled={quantityValue === 1}
                            onClick={() => {
                                quantityValue > 1 && setQuantityValue((prev) => prev - 1);
                            }}
                        >
                            <Icon
                                icon="eva:minus-fill"
                                width={16}
                                height={16}
                            />
                        </IconButton>
                        <Typography color="text.primary">{quantityValue}</Typography>
                        <IconButton
                            size="small"
                            sx={{ borderRadius: "8px" }}
                            disabled={quantityValue === props.product.remain}
                            onClick={() => {
                                quantityValue <= props.product.remain &&
                                    setQuantityValue((prev) => prev + 1);
                            }}
                        >
                            <Icon icon="eva:plus-fill" width={16} height={16} />
                        </IconButton>
                    </Stack>
                </Stack>
                <Typography variant="captiontext" color={"text.secondary"}>
                    Available: {props.product.remain}
                </Typography>
            </Stack>
            <Divider />
            {/* <Stack
                direction={"row"}
                justifyContent={"space-between"}
                gap={"20px"}
            >
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={
                        <Icon
                            icon="solar:cart-plus-bold"
                            width={24}
                            height={24}
                        />
                    }
                    onClick={() => {
                        router.post(route("cart.store", props.product.id), {
                            quantity: quantityValue,
                        });
                    }}
                >
                    Add to card
                </Button>
            </Stack> */}
        </>
    );
};

export default QuantitySection;
