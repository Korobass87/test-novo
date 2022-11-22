import React, { FC } from "react";
import Xarrow from "react-xarrows";

type Props = {
    coordinate: { start: number; end: number }[] ;
};


export const Xar: FC<Props> = ({ coordinate }) => {


    return <>
        {coordinate.map((cord) => (
            <Xarrow
                start={cord.start.toString()}
                end={cord.end.toString()}
                key={cord.end}
                endAnchor={"left"}
                zIndex={14}
                color={"white"}
                strokeWidth={1}
                path={"grid"}
                gridBreak={"100%"}
                showHead={false}
                animateDrawing={0.05}

            />
        ))


        }

    </>


};
