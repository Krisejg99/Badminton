"use client"
import React, { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { shuffleArray } from "../helpers/shuffle"
import { assignPairs } from "../helpers/pair"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import BadmintonCourt from "@/components/BadmintonCourt"
import Image from "next/image"
import benchIcon from "../assets/icons/bench.svg"

const formSchema = z.object({
    players: z.string(),
})

export const PlayerForm = () => {
    const [matches, setMatches] = useState<string[][][]>([])
    const [benchWarmer, setBenchWarmer] = useState<string | null>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            players: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const names = data.players.split("\n").filter((p) => p)
        const players = shuffleArray(names)

        // Bench warmer if odd number
        if (players.length % 2 !== 0) {
            const previousBench = sessionStorage.getItem("benchWarmer")

            let bench = players[players.length - 1]

            if (bench === previousBench) {
                bench = players[players.length - 2]
            }

            sessionStorage.setItem("benchWarmer", bench)
            setBenchWarmer(bench)
        } else {
            setBenchWarmer(null)
        }

        // Create teams
        const teams = assignPairs<string>(players)

        // Create 1v1 if odd number of teams
        const oneVsOne =
            teams.length % 2 !== 0
                ? teams[teams.length - 1].map((p) => [p])
                : null

        // Create matches
        const matches = assignPairs<string[]>(teams)

        // Add 1v1 to matches
        if (oneVsOne) matches.push(oneVsOne)

        setMatches(matches)
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mb-8"
                >
                    <FormField
                        control={form.control}
                        name="players"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Players</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Each row is a player..."
                                        {...field}
                                        rows={10}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            {matches.map((match, i) => (
                <React.Fragment key={i}>
                    <h2 className="font-bold">Game {i + 1}</h2>
                    <BadmintonCourt
                        team_1={match[0]}
                        team_2={match[1]}
                        className="mb-4"
                    />
                </React.Fragment>
            ))}

            {benchWarmer && (
                <div className="flex flex-col items-center mt-8">
                    <p className="bg-black z-10 w-fit px-6 py-1 rounded-md text-white">
                        Bench warmer: {benchWarmer}
                    </p>
                </div>
            )}
        </>
    )
}

1
2
3
4
5
6
7
8
9
10
11
