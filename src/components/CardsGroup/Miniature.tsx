import { Card, Image, CardFooter } from "@nextui-org/react";

function Miniature() {
    return (
        <Card isFooterBlurred radius="lg"
        className="border-none m-2 w-80 shrink">
            <Image isZoomed
                removeWrapper
                alt="Boardgame cover"
                className="z-0 w-full h-full object-cover"
                src="https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__original/img/jt70jJDZ1y1FWJs4ZQf5FI8APVY=/0x0/filters:format(jpeg)/pic7149798.jpg"
            />
            <CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-white/35  rounded-lg">
                <p></p>
                <h3 className="text-medium text-black uppercase font-bold">7 Wonders</h3>
                <h4 className="text-grey font-light text-xs">You are the leader of one of the 7 great cities...</h4>
            </CardFooter>
        </Card>
    )
}

export default Miniature;