/* let skills = [
    'Bash', 'Ciybter', 'Healing', true, 123
] */

const skills: string[] = [
    'Bash', 'Ciybter', 'Healing'
]


interface Character {
    name: string;
    hp: number;
    skill: string[];
    hometown?: string // opcional
}


const strider: Character = {
    name: 'strider',
    hp: 100,
    skill: ['Bash', 'Counter']
}


strider.hometown = 'Rivendell'


console.table({
    skills,
    strider
})
export {};