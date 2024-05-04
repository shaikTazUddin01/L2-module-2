{
    //generic type
    type GeneicArray<T> = Array<T>

    // const rollNumbers: number[] = [25, 45, 45];
    const rollNumbers: GeneicArray<number> = [25, 45, 45];

    // const mentors: string[] = ["taz", 'raj', 'jim'];
    const mentors: GeneicArray<string> = ["taz", 'raj', 'jim'];

    const boolArray: GeneicArray<boolean> = [true, false, true];

    const user: GeneicArray<{ name: string, age: number | string }> = [
        {
            name: "mezba",
            age: 100
        },
        {
            name: 'jankar',
            age: "110"
        }
    ]

// generic tuple

const manush =["mr.x","mr.y"]

    const add = (x: number, y: number) => x + y

    add(30, 20)
}