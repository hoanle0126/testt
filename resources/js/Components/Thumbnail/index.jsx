import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Button } from "@mui/material";
import { Thumb } from "./components/ThumbButton";

const ThumbnailCarousel = (props) => {
    const { slides } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div>
            <Box sx={{ overflow: "hidden" }} ref={emblaMainRef}>
                <Box
                    sx={{
                        display: "flex",
                        marginLeft: "calc(20px * -1)",
                    }}
                >
                    {slides.map((value, index) => (
                        <Box
                            sx={{
                                transform: "translate3d(0, 0, 0)",
                                flex: "0 0 100%",
                                minWidth: 0,
                                paddingLeft: "20px",
                                aspectRatio: "1 / 1",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                            key={index}
                        >
                            <img src={value} alt="" className="w-full h-full" />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <Box sx={{ overflow: "hidden" }} ref={emblaThumbsRef}>
                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: "-20px",
                        }}
                    >
                        {slides.map((value, index) => (
                            <Thumb
                                value={value}
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ThumbnailCarousel;
