const fetchData = require('../src/providers/github/trending/languges/postprocessing');
const timeout = 30000;
describe('Testing fetchData function',()=>{
    test("fetchData",async()=>{
        const inputMock = [
            {
                "id":1,
                "full_name":"zengxiaohui2019/Hui-Admin-Pro",
                "language":"Python"

            },
            {
                "id":1,
                "full_name":"sontaj/anticensorship-action",
                "language":"Java" 

            }
        ]
        const firstOutput={
            "Python":1,
            "Java":1
        }
        const secOutput = [
            "Python",
            "Java",
        ]
        expect(fetchData(inputMock)).toEqual(firstOutput,secOutput);

    },timeout)
})