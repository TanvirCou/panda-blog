import { auth } from "./auth"

export const x = async() => {
    const session = await auth();
    return session.json();
}