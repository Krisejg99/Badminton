import { PlayerForm } from "../components/PlayerForm"

export default function Home() {
    return (
        <div className="max-w-[600px]">
            <h1 className="text-2xl font-bold mb-8">Badminton shuffler</h1>
            <PlayerForm />
        </div>
    )
}
