export type CommandExample = {
    name: string
    description: string
}

export type Command = {
    name: string
    description: string
    usage: string
    category: string
    examples: CommandExample[]
}