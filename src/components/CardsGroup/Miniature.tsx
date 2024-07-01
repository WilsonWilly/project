import { Card, Image, CardFooter } from "@nextui-org/react";

interface MiniatureProps {
    name: string,
    description: string,
    picture: string,

}

function Miniature({name, description, picture}: MiniatureProps) {
    return (
        <Card isFooterBlurred fullWidth radius="lg"
        className="m-1 h-32 md:w-60 md:h-60">
            <Image isZoomed
                removeWrapper
                alt="Boardgame cover"
                className="z-0 w-full h-full object-cover"
                src={picture}
            />
            <CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-white/35 rounded-lg">
                <p></p>
                <h3 className="text-medium text-black uppercase font-bold">{name}</h3>
                <h4 className="text-grey font-light text-xs">{description}</h4>
            </CardFooter>
        </Card>
    )
}

export default Miniature;