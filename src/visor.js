const {
    exec
} = require('child_process');
const {
    promisify
} = require('util');
const execAsync = promisify(exec);

const createVisor = () => {
    const nvidiaCommands = {
        exec: 'nvidia-smi --query-gpu=',
        format: ' --format=csv,noheader',
        temperature: 'temperature.gpu',
        CPUClock: 'clocks.sm',
        mem: {
            clock: 'clocks.mem',
            used: 'memory.used',
            total: 'memory.total',
        },
    }

    const execCommand = async cmd => parseInt((await execAsync(nvidiaCommands.exec + cmd + nvidiaCommands.format)).stdout);

    const getGPUTotalMem = async () => await execCommand(nvidiaCommands.mem.total);

    const getData = async () => {
        return new Promise((resolve, reject) => {
            Promise.all([
                execCommand(nvidiaCommands.temperature),
                execCommand(nvidiaCommands.mem.used),
                execCommand(nvidiaCommands.CPUClock),
                execCommand(nvidiaCommands.mem.clock),
            ])
                .then(values => resolve(values))
                .catch(e => {
                    console.error('error when getting gpu data:', e);
                    reject(e);
                });
        });
    }

    return {
        getData,
        getGPUTotalMem,
    };
}

module.exports = createVisor()