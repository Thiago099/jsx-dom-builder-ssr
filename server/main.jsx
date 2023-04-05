
import fs from "fs";
function main(url)
{
    const dir = fs.readdirSync("./");
    for(let i = 0; i < dir.length; i++)
    {
        const cur = <div>{dir[i]}</div>
        cur.$parent(document.body)
    }
}
export default main;