import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Avatar, Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";

const ImageThumbnail = ({ src, setSrc }) => {
    const [loading, setLoading] = React.useState(false);
    const handleSelectImage = async (e) => {
        setLoading(true);
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setSrc(imgUrl);
        setLoading(false);
    };

    return (
        <Box
            sx={{
                boxShadow: "custom.card",
                width: 160,
                height: 160,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                marginX: "auto",
                position: "relative",
            }}
        >
            <Avatar
                sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    backgroundColor: "background.paper",
                }}
                variant="rounded"
                src={src}
            >
                {!loading ? (
                    <Icon
                        icon="solar:gallery-wide-bold"
                        width="120"
                        height="120"
                        color={MuiTheme().palette.grey[300]}
                        className="absolute"
                    />
                ) : (
                    <Skeleton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                        }}
                        variant="rounded"
                    />
                )}
            </Avatar>
            <label htmlFor="thumbnail">
                <Box
                    sx={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "background.paper",
                        position: "absolute",
                        border: "1px solid",
                        borderColor: "divider",
                        right: "-8px",
                        top: "-8px",
                        borderRadius: 99,
                        boxShadow: "custom.card",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                >
                    <Icon
                        icon="solar:pen-bold"
                        width="14"
                        height="14"
                        color={MuiTheme().palette.text.disabled}
                    />
                    <input
                        type="file"
                        id="thumbnail"
                        className="hidden"
                        onChange={handleSelectImage}
                    />
                </Box>
            </label>
        </Box>
    );
};

export default ImageThumbnail;
