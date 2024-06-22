import { PlayerForm } from "../components/PlayerForm"

export default function Home() {
    return (
        <div className="max-w-[600px] m-auto">
            <h1 className="text-2xl font-bold mb-8 text-center">Badminton</h1>
            <PlayerForm />
        </div>
    )
}
