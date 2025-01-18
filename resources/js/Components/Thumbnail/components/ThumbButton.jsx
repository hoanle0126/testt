import { Box } from "@mui/material";
import React from "react";

export const Thumb = (props) => {
    const { value, selected, index, onClick } = props;

    return (
        <Box
            sx={{
                flex: "0 0 22%",
                minWidth: 0,
                paddingLeft: "20px",
                aspectRatio: "1 / 1",
                opacity: selected ? 1 : 0.6,
                cursor: "pointer",
            }}
            onClick={() => onClick(index)}
        >
            <img src={value} alt="" className="w-full h-full" />
        </Box>
    );
};
