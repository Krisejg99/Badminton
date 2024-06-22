import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import vsIcon from "../assets/images/vs.png"

type BadmintonCourtProps = {
    team_1: string[]
    team_2: string[]
} & React.HTMLAttributes<HTMLDivElement>

const BadmintonCourt = ({
    team_1,
    team_2,
    className,
    ...props
}: BadmintonCourtProps) => {
    return (
        <Card
            className={`bg-emerald-200 border-gray-300 ${className}`}
            {...props}
        >
            <CardContent className="flex justify-evenly items-center pt-6">
                <Team players={team_1} />
                <Image
                    src={vsIcon}
                    alt="vs"
                    width={70}
                    height={70}
                    draggable={false}
                />
                <Team players={team_2} />
            </CardContent>
        </Card>
    )
}
export default BadmintonCourt

const Team = ({ players }: { players: string[] }) => {
    return (
        <div className="flex flex-col text-center gap-3 w-full">
            {players.map((player, i) => (
                <p key={i}>{player}</p>
            ))}
        </div>
    )
}
